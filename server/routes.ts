import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";

export function registerRoutes(app: Express): Server {
  const httpServer = createServer(app);

  // Create WebSocket server
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });

  wss.on('connection', (ws: WebSocket) => {
    console.log('New client connected');

    // Send welcome message
    ws.send(JSON.stringify({
      message: "Hello! I'm your portfolio assistant. How can I help you today?"
    }));

    ws.on('message', (data: string) => {
      try {
        const { message } = JSON.parse(data.toString());

        // Simple response logic - can be enhanced with actual AI/ML
        let response = "";
        if (message.toLowerCase().includes('project')) {
          response = "I've worked on various exciting projects. Check out the Projects section to learn more!";
        } else if (message.toLowerCase().includes('contact')) {
          response = "You can reach out to me through the contact form or my social media links!";
        } else if (message.toLowerCase().includes('skill')) {
          response = "I specialize in modern web technologies including React, Three.js, and full-stack development.";
        } else {
          response = "Thanks for your message! Feel free to ask about my projects, skills, or how to get in touch.";
        }

        ws.send(JSON.stringify({ message: response }));
      } catch (error) {
        console.error('Error processing message:', error);
      }
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });

  return httpServer;
}