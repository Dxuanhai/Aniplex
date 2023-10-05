import prisma from "../primasdb";
import { Tid, Tproduct } from "../type";

export const fetchProducts = async () => {
  try {
    const product = await prisma.product.findMany({
      include: {
        animes: {
          select: { type: true },
        },
      },
    });
    return product;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const sortProduct = async (type: string, typeAnime: string) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        type,
        animes: {
          some: {
            type: typeAnime,
          },
        },
      },
      orderBy: {
        title: "asc",
      },
    });

    return products;
  } catch (error) {
    console.error("Error sorting products:", error);
    throw error;
  }
};
export const createProduct = async (data: Tproduct) => {
  try {
    await prisma.product.create({
      data: {
        urlImage: data.urlImage,
        title: data.title,
        link: data.link,
        type: data.type,
        desc: data.desc || null,
        animes: { create: { type: data.animes[0].type } },
      },
    });

    return { message: "created product successfully", status: 200 };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const updateProduct = async (newData: Tproduct) => {
  try {
    const existingProduct = await prisma.product.findUnique({
      where: {
        id: newData.id,
      },
    });
    if (!existingProduct) return { message: "Product not found", status: 422 };
    await prisma.product.update({
      where: { id: newData.id },
      data: {
        title: newData.title,
        desc: newData.desc || null,
        link: newData.link,
        type: newData.type,
        urlImage: newData.urlImage,
        animes: {
          update: {
            where: { id: newData.id },
            data: {
              type: newData.animes[0].type,
            },
          },
        },
      },
    });
    return { message: "Product updated successfully", status: 200 };
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (data: Tid) => {
  try {
    const existingProduct = await prisma.product.findUnique({
      where: {
        id: data.id,
      },
    });
    if (!existingProduct) {
      return { message: "Product not found", status: 422 };
    }
    await prisma.anime.deleteMany({
      where: {
        productId: data.id,
      },
    });
    await prisma.product.delete({
      where: {
        id: data.id,
      },
    });
    return { message: "Product deleted successfully", status: 200 };
  } catch (error) {
    console.error("Error delete product:", error);
    throw error;
  }
};
