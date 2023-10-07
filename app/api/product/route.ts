import {
  createProduct,
  deleteProduct,
  fetchProducts,
  fetchProductsLimit,
  updateProduct,
} from "@/app/lib/actions/product.action";
import { Tid, Tproduct } from "@/app/lib/type";
import { idSchema, productSchema } from "@/app/lib/validation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const skip = searchParams.get("skip");

  let products: Tproduct[];
  if (!limit || !skip) {
    products = await fetchProducts();
  } else {
    const parsedLimit = parseInt(limit, 10);
    const parsedSkip = parseInt(skip, 10);
    if (typeof parsedLimit !== "number") {
      return NextResponse.json(
        { message: "Invalid parametes" },
        { status: 422 }
      );
    }
    if (typeof parsedSkip !== "number") {
      return NextResponse.json(
        { message: "Invalid parametes" },
        { status: 422 }
      );
    }
    console.log("Skip ::", parsedSkip);
    products = await fetchProductsLimit(parsedSkip, parsedLimit);
  }

  if (!products) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 400 }
    );
  }

  return NextResponse.json(products);
};

export const POST = async (request: Request) => {
  const data: Tproduct = await request.json();
  const checkData = productSchema.safeParse(data);

  if (!checkData.success)
    return NextResponse.json(checkData.error.message, { status: 422 });

  const product = await createProduct(data);

  if (!product) {
    return NextResponse.json({ message: "ERROR FROM SERVER" }, { status: 500 });
  }

  return NextResponse.json(product);
};

export const PUT = async (request: Request) => {
  const data: Tproduct = await request.json();
  const checkData = productSchema.safeParse(data);

  if (!checkData.success)
    return NextResponse.json(checkData.error.message, { status: 422 });

  const product = await updateProduct(data);

  if (!product) {
    return NextResponse.json({ message: "ERROR FROM SERVER" }, { status: 500 });
  }

  return NextResponse.json(product);
};

export const DELETE = async (request: Request) => {
  const data: Tid = await request.json();
  const checkData = idSchema.safeParse(data);
  if (!checkData.success)
    return NextResponse.json(
      { message: "invalid type parameter" },
      { status: 422 }
    );

  const product = await deleteProduct(data);

  if (!product) {
    return NextResponse.json({ message: "ERROR FROM SERVER" }, { status: 500 });
  }

  return NextResponse.json(product);
};
