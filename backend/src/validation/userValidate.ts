import { z } from "zod";

// Zod schema validation for user input
const userSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }).trim().max(255,{message:"maximum character limit  is reached "}),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});


export default userSchema;    