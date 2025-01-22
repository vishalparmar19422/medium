import { Hono } from "hono";
import { cors } from "hono/cors";
import UserRoute from "./routes/user";
import BlogRoute from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
app.use("/*",cors());

app.route("/api/v1/user",UserRoute)
app.route("/api/v1/blog",BlogRoute)
  






export default app;
