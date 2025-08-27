import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist signup endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(400).json({ 
          message: "This email is already on our waitlist!" 
        });
      }

      const entry = await storage.createWaitlistEntry(validatedData);
      res.status(201).json({ 
        message: "Successfully joined the waitlist!", 
        entry: { 
          id: entry.id, 
          email: entry.email, 
          clinicName: entry.clinicName 
        } 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get waitlist stats (for displaying count)
  app.get("/api/waitlist/stats", async (req, res) => {
    try {
      const entries = await storage.getWaitlistEntries();
      res.json({ count: entries.length });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
