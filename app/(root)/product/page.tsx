import ProductForm from "@/components/form/ProductForm";
import prisma from "../../lib/primasdb";

const page = async () => {
  const data = await prisma.product.findMany({
    include: {
      animes: {
        select: {
          type: true,
        },
      },
    },
  });

  return <div>`{`${data}`}`</div>;
};

export default page;
