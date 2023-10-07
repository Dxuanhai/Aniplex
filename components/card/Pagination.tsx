"use client";
import { useRouter, useSearchParams } from "next/navigation";
interface Props {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
const Pagination = ({ hasNextPage, hasPrevPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "5";

  return (
    <div className="join">
      <button
        className="join-item btn"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/products?page=${Number(page) - 1}&per_page=${perPage}`);
        }}
      >
        «
      </button>
      <button className="join-item btn">Page 22</button>
      <button
        className="join-item btn"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/products?page=${Number(page) + 1}&per_page=${perPage}`);
        }}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
