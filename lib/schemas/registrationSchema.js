import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      {
        message:
          "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.",
      }
    ),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Phone number must be a valid international format.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  gender: z
    .string()
    .refine((val) => ["male", "female", "other"].includes(val), {
      message: "You need to select a notification type.",
    }),
});
