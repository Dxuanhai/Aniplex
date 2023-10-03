import { NextResponse } from "next/server";
import { createUser, checkUserExists } from "@/app/lib/actions/user.action";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const userExists = await checkUserExists(body.email);
    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const user = await createUser(body);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: "Post error", error }, { status: 500 });
  }
};
