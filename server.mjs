import express from "express";
import { connectMongoDB } from "./config/db.mjs";
import cors from "cors";
import productRoutes from "./routes/routes.mjs";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.use("/api", productRoutes); 

// Test Route
app.get("/", (req, res) => {
  res.send("Hello from Yatra Backend!");
});

// Connect to DB and start server
connectMongoDB();

const port = 5000;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
