import express from "express";
import next from "next";
import connectDB from "./lib/db.js";
import router from "./app/routes/users/userRoutes.js";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  // Middleware
  server.use(express.json());
  server.use(router);

  // Connect to MongoDB
  connectDB();

  // Custom routes (optional)
  server.get("/api/custom", (req, res) => {
    res.send({ message: "This is a custom route!" });
  });

  // Serve Next.js pages
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
