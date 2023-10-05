import ProductForm from "@/components/form/ProductForm";
import prisma from "../../../lib/primasdb";

const page = async ({ params }: { params: { slug: string } }) => {
  const productId = parseInt(params.slug, 10);

  const data = await prisma.product.findUnique({
    where: { id: productId },
    include: {
      animes: { select: { type: true } },
    },
  });
  if (!data) return;

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <ProductForm product={data} />
    </main>
  );
};

export default page;
