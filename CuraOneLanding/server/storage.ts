import { type User, type InsertUser, type Waitlist, type InsertWaitlist } from "@shared/schema";
import { randomUUID } from "crypto";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { users, waitlist } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistEntries(): Promise<Waitlist[]>;
  getWaitlistByEmail(email: string): Promise<Waitlist | undefined>;
}

export class SqliteStorage implements IStorage {
  private db: Database.Database;
  private drizzleDb: ReturnType<typeof drizzle>;

  constructor() {
    // Create in-memory SQLite database
    this.db = new Database(':memory:');
    this.drizzleDb = drizzle(this.db);
    
    // Initialize tables
    this.initializeTables();
  }

  private initializeTables() {
    // Create users table
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )
    `);

    // Create waitlist table
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
        email TEXT NOT NULL,
        clinic_name TEXT NOT NULL,
        clinic_size TEXT NOT NULL,
        created_at INTEGER DEFAULT (unixepoch()) NOT NULL
      )
    `);
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = this.drizzleDb.select().from(users).where(eq(users.id, id)).get();
    return result || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = this.drizzleDb.select().from(users).where(eq(users.username, username)).get();
    return result || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.drizzleDb.insert(users).values(user).run();
    return user;
  }

  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    const id = randomUUID();
    const waitlistEntry: Waitlist = { 
      ...entry, 
      id, 
      createdAt: new Date()
    };
    this.drizzleDb.insert(waitlist).values(waitlistEntry).run();
    return waitlistEntry;
  }

  async getWaitlistEntries(): Promise<Waitlist[]> {
    return this.drizzleDb.select().from(waitlist).all();
  }

  async getWaitlistByEmail(email: string): Promise<Waitlist | undefined> {
    const result = this.drizzleDb.select().from(waitlist).where(eq(waitlist.email, email)).get();
    return result || undefined;
  }
}

// Keep the old MemStorage for backward compatibility if needed
export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private waitlistEntries: Map<string, Waitlist>;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    const id = randomUUID();
    const waitlistEntry: Waitlist = { 
      ...entry, 
      id, 
      createdAt: new Date() 
    };
    this.waitlistEntries.set(id, waitlistEntry);
    return waitlistEntry;
  }

  async getWaitlistEntries(): Promise<Waitlist[]> {
    return Array.from(this.waitlistEntries.values());
  }

  async getWaitlistByEmail(email: string): Promise<Waitlist | undefined> {
    return Array.from(this.waitlistEntries.values()).find(
      (entry) => entry.email === email,
    );
  }
}

// Use SQLite storage by default
export const storage = new SqliteStorage();
