import { z } from "zod";
import { signInSchema } from "./validation";

export type IsignInSchema = z.infer<typeof signInSchema>;

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
