import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../../libs/primasdb";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const passwordMatch = await bcrypt.compare(body.password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error;
  }
};
