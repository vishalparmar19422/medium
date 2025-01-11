import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import bcrypt from "bcryptjs";

//give hndeled errors
//add zod validation

const UserRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

UserRoute.post("/signup", async (c) => {
  const body = await c.req.json();
  const password = body.password;

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const saltRounds = 10; // The number of rounds to salt the password (higher = more secure but slower)

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json(jwt);
  } catch (error) {
    return c.text("user already exist");
  }
});

UserRoute.post("/signin", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return c.text("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(body.password, user.password);
    
    if (!isMatch) {
      return c.text("Invalid credentials");
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json(jwt);
  } catch (error : any) {
    return c.text(`Error: ${error.message}`);
  }
});

export default UserRoute;
