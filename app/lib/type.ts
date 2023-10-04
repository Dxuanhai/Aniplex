import { z } from "zod";
import { productSchema, signInSchema } from "./validation";

export type IsignInSchema = z.infer<typeof signInSchema>;
export type Tproduct = z.infer<typeof productSchema>;

export interface Iuser {
  email: string;
  password: string;
  isAdmin?: boolean;
}
export interface SlideData {
  id: number;
  url: string;
  title: string;
  desc?: string;
  status?: string;
  link: string;
}

export interface TrailerType {
  id: number;
  name: string;
  idVideo: string;
  urlImage: string;
  title: string;
}

// export interface Product {
//   id          Int      @id @default(autoincrement())
//   urlImage    String
//   title       String
//   desc        String?
//   link        String
//   type        String       // Loại product (ví dụ: "ANIME","TOY","BOX")
//   createdAt   DateTime     @default(now())
//   anime   Anime    @relation(fields: [animeId], references: [id])
//   animeId  Int

// }
