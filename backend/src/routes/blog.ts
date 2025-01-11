import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify, decode, sign } from "hono/jwt";

const BlogRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: number;
  };
}>();

BlogRoute.use("*", async (c, next) => {
  try {
    const token = c.req.header("Authorization") || "";
    const user: any = await verify(token, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);

      await next();
    } else {
      c.status(403);
      return c.json({
        msg: "you are not logged in",
      });
    }
  } catch (error) {
    return c.json({
      msg: "error in middleware",
      error,
    });
  }
});

BlogRoute.post("/create", async (c) => {
  try {
    const body = await c.req.json();
    const id = c.get("userId");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        discription: body.discription,
        userId: id,
      },
    });
    return c.json({ msg: "blog created ", id: blog.id });
  } catch (error) {
    return c.json({
      error,
    });
  }
});

BlogRoute.put("/update", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const updatedBlog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      discription: body.discription,
    },
  });
  return c.json({ updatedblog: updatedBlog });
});

BlogRoute.get("/get/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.findFirst({
    where: {
      id: Number(id),
    },
  });
  return c.json({ msg: blog });
});

BlogRoute.get("/bulk", async (c) => {
  console.log("hello");
  
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blogs = await prisma.blog.findMany();
    return c.json({ blogs });
  } catch (error) {
    console.error("Bulk route error:", error);
    return c.json({ error: "An error occurred while fetching blogs." }, 500);
  }
});



export default BlogRoute;
