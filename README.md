# CuraOne Landing Page

This is a full-stack application with a React frontend and FastAPI backend.

## Project Structure

```
├── CuraOneLanding/          # Frontend React application
│   ├── client/             # React source code
│   ├── server/             # Express server (for development)
│   ├── shared/             # Shared schemas and utilities
│   ├── package.json        # Frontend dependencies
│   └── vite.config.ts      # Vite build configuration
├── public/                 # Built frontend files (served by FastAPI)
│   ├── index.html          # Main HTML file
│   └── assets/             # CSS and JS build files
├── main.py                 # FastAPI backend server
├── requirements.txt        # Python dependencies
├── build.sh               # Build script for frontend
└── README.md              # This file
```

## Development

### Frontend Development

The frontend is built with React, TypeScript, and Vite. To work on the frontend:

1. Navigate to the frontend directory:
   ```bash
   cd CuraOneLanding
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Development

The backend is built with FastAPI and serves the built frontend files.

1. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the backend server:
   ```bash
   python main.py
   ```
   
   The server will start on port 8000 by default. You can change this by setting the `PORT` environment variable.

## Building for Production

To build the frontend and update the public folder:

```bash
./build.sh
```

This script will:
1. Install frontend dependencies if needed
2. Build the React application
3. Move the built files to the `public/` directory
4. The FastAPI server will serve these files

## API Endpoints

- `POST /api/waitlist` - Add email to waitlist
- `GET /api/waitlist/stats` - Get waitlist statistics
- `GET /api/waitlist` - Get all waitlist entries

## Notes

- The frontend build output goes to `CuraOneLanding/dist/public/`
- The `public/` folder at the root contains the built files served by FastAPI
- The build script automatically moves files from the build output to the serving location
