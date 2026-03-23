import { z } from "zod";

export const quoteSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    message: z.string().min(1, { message: "Message is required" }),
})

export type QuoteSchema = z.infer<typeof quoteSchema>;