import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify, decode, sign } from "hono/jwt";
import UserRoute from "./routes/user";
import BlogRoute from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.route("/api/v1/user",UserRoute)
app.route("/api/v1/blog",BlogRoute)
  






export default app;
