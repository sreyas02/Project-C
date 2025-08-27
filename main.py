import os
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr
import sqlite3
from threading import Lock


PUBLIC_DIR = os.path.join(os.path.dirname(__file__), "public")


class WaitlistEntry(BaseModel):
    email: EmailStr
    clinicName: str
    clinicSize: str


class Database:
    def __init__(self) -> None:
        # Shared in-memory database across connections
        self._conn = sqlite3.connect("file:memdb1?mode=memory&cache=shared", uri=True, check_same_thread=False)
        self._conn.execute(
            """
            CREATE TABLE IF NOT EXISTS waitlist (
              id TEXT PRIMARY KEY,
              email TEXT NOT NULL UNIQUE,
              clinic_name TEXT NOT NULL,
              clinic_size TEXT NOT NULL,
              created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
            )
            """
        )
        self._conn.commit()
        self._lock = Lock()

    def add_waitlist(self, entry: WaitlistEntry) -> dict:
        import uuid

        with self._lock:
            try:
                id_ = str(uuid.uuid4())
                self._conn.execute(
                    "INSERT INTO waitlist (id, email, clinic_name, clinic_size) VALUES (?, ?, ?, ?)",
                    (id_, entry.email, entry.clinicName, entry.clinicSize),
                )
                self._conn.commit()
            except sqlite3.IntegrityError:
                raise HTTPException(status_code=400, detail={"message": "This email is already on our waitlist!"})
        return {"id": id_, "email": entry.email, "clinicName": entry.clinicName}

    def count_waitlist(self) -> int:
        cur = self._conn.execute("SELECT COUNT(*) FROM waitlist")
        (count,) = cur.fetchone()
        return int(count)

    def list_waitlist(self) -> list[dict]:
        cur = self._conn.execute(
            "SELECT id, email, clinic_name, clinic_size, created_at FROM waitlist ORDER BY datetime(created_at) DESC"
        )
        rows = cur.fetchall()
        result: list[dict] = []
        for r in rows:
            result.append(
                {
                    "id": r[0],
                    "email": r[1],
                    "clinicName": r[2],
                    "clinicSize": r[3],
                    "createdAt": r[4],
                }
            )
        return result


db = Database()

app = FastAPI()

# If you load the UI from another origin, you can widen CORS.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/waitlist")
async def create_waitlist(entry: WaitlistEntry):
    created = db.add_waitlist(entry)
    return JSONResponse(
        status_code=201,
        content={
            "message": "Successfully joined the waitlist!",
            "entry": created,
        },
    )


@app.get("/api/waitlist/stats")
async def waitlist_stats():
    return {"count": db.count_waitlist()}


@app.get("/api/waitlist")
async def waitlist_list():
    return {"entries": db.list_waitlist()}


# Serve the existing built UI under /
if os.path.isdir(PUBLIC_DIR):
    app.mount("/", StaticFiles(directory=PUBLIC_DIR, html=True), name="static")


# Uvicorn entrypoint
def run():
    import uvicorn

    port = int(os.getenv("PORT", "8000"))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)


if __name__ == "__main__":
    run()


