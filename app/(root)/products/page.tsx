import {
  countProducts,
  fetchProductsLimit,
} from "@/app/lib/actions/product.action";
import Pagination from "@/components/card/Pagination";
import TableProduct from "@/components/shared/Table";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["perPage"] ?? "5";
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);
  const totalProducts = await countProducts();
  const data = await fetchProductsLimit(start, end);

  return (
    <>
      <TableProduct data={data} />{" "}
      <div className="w-full flex justify-center items-center my-4">
        <Pagination hasNextPage={end < totalProducts} hasPrevPage={start > 0} />
      </div>
      ;
    </>
  );
};

export default Page;
