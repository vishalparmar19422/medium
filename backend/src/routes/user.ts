import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import bcrypt from "bcryptjs";
import userSchema from "../validation/userValidate";

const UserRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

UserRoute.post("/signup", async (c) => {
  try {
    const body = await c.req.json();
    console.log(body);

    // Validate the body with Zod schema
    const parsed = userSchema.safeParse(body);

    if (!parsed.success) {
      const errorMessages = parsed.error.errors.map((err) => err.message);
      return c.json({ message: errorMessages, success: false }, 400); // Return validation error messages
    }

    const { username, email, password } = body;

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const saltRounds = 10; // The number of rounds to salt the password (higher = more secure but slower)
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const existingUser = await prisma.user.findFirst({
      where: {
        username: username 
      },
    });

    if (existingUser) {
      // Return a 409 Conflict error if the user already exists
      return c.json(
        {
          error: "User with this username already exists",
          success: false,
        },
        409
      );
    }
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt: jwt, success: true }, 201);
  } catch (error: any) {
    if (error.code === "P2002") {
      // Prisma unique constraint violation error
      const field = error.meta.target; // Identify the field causing the conflict
      return c.json(
        { error: `User with this ${field} already exists`, success: false },
        409
      );
    }

    // For other errors, return a generic server error
    console.error("Unexpected error during user creation:", error);
    return c.json({ error: "Internal server error", success: false }, 500);
  }
});

UserRoute.post("/signin", async (c) => {
  try {
    const body = await c.req.json();

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return c.json({ message: "user with this email does't exist " }, 401); // Unauthorized error
    }

    const isMatch = await bcrypt.compare(body.password, user.password);

    if (!isMatch) {
      return c.json({ message: "password is incorrect  " }, 401); // Unauthorized error
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt: jwt });
  } catch (error: any) {
    return c.text(`Error: ${error.message}`, 500); // Internal server error
  }
});

UserRoute.get("/getuser/:id",async(c)=>{
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const user = await prisma.user.findFirst({
    where: {
      id: Number(id),
    },
    select:{
      id:true,
      username:true,
      blogs:true

    }
    
  });
  return c.json({ user });
})

export default UserRoute;
