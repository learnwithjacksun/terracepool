import { z } from "zod";

const singleLine = (max: number, message: string) => z.string()
  .trim().min(1, message).max(max, message)
  .refine(value => !/[\r\n]/.test(value) && !value.includes("\u0000"), message);

export const quoteSchema = z.object({
  name: singleLine(120, "contact.validation.name"),
  email: z.string().trim().max(254, "contact.validation.email")
    .email("contact.validation.email"),
  phone: singleLine(40, "contact.validation.phone"),
  subject: z.enum(["terrace", "renovation", "other"], {
    error: "contact.validation.subject",
  }),
  message: z.string().trim().min(1, "contact.validation.message")
    .max(5000, "contact.validation.message")
    .refine(value => !value.includes("\u0000"), "contact.validation.message"),
}).strict();

export const contactSubmissionSchema = quoteSchema.extend({
  locale: z.enum(["en", "es", "fr", "sv"]),
  submissionId: z.uuid(),
  verificationToken: z.string().min(1).max(2048),
  website: z.string().max(200).optional(),
}).strict();

export type QuoteSchema = z.infer<typeof quoteSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
