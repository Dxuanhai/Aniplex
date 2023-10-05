import { NextResponse } from "next/server";
import { createUser, checkUserExists } from "@/app/lib/actions/user.action";
import { IsignInSchema } from "@/app/lib/type";
import { signInSchema } from "@/app/lib/validation";

export const POST = async (request: Request) => {
  try {
    const body: IsignInSchema = await request.json();

    const parseForm = signInSchema.safeParse(body);

    if (!parseForm.success) {
      return NextResponse.json(parseForm.error.message, { status: 422 });
    }
    const userExists = await checkUserExists(body.email);
    if (userExists)
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );

    const user = await createUser(body);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: "Post error", error }, { status: 500 });
  }
};
