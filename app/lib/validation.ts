import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const productSchema = z.object({
  urlImage: z.string(),
  title: z.string(),
  desc: z.string().optional(),
  link: z.string(),
  type: z.string().refine((value) => ["ANIME", "TOY", "BOX"].includes(value)),
});

// id          Int      @id @default(autoincrement())
// urlImage:    string
// desc    :    string?
// title   :    string
// link    :    string
// type    :    string       // Loại product (ví dụ: "ANIME","TOY","BOX")
// createdAt:   DateTime     @default(now())
// anime :  Anime    @relation(fields: [animeId], references: [id])
// animeId : Int
