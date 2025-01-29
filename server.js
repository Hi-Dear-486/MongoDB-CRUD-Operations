import express from "express";
import next from "next";
import connectDB from "./lib/db.js";
import cors from "cors";
import dotenv from "dotenv";
import router from "./app/routes/users/userRoutes.js";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

const PORT = 8000 || 4000;
console.log("🚀 ~ PORT:", PORT);

app.prepare().then(async () => {
  // Connect to MongoDB
  await connectDB();
  const server = express();

  server.use(
    cors({
      origin: ["http://localhost:8000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
  // Middleware
  server.use(express.json());
  server.use(cors());

  server.use(router);

  // Custom routes (optional)
  server.get("/api/custom", (req, res) => {
    res.send({ message: "This is a custom route!" });
  });

  // Serve Next.js pages
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(8000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${8000}`);
  });
});
