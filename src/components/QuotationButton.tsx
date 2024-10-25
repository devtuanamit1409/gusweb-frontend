import { getTranslations } from "next-intl/server";
import Link from "next/link";

interface QuotationButtonProps {
  label?: string; // Prop cho phép truyền nội dung nút
}

export default async function QuotationButton({
  label = "Báo Giá",
}: QuotationButtonProps) {
  const t = await getTranslations();
  return (
    <Link href="/quick-quotes">
      <button
        type="button"
        className="text-white ant-btn focus:outline-none font-medium rounded-md text-sm px-8 py-3 "
      >
        {/* {label} */}
        {t("header.button")}
      </button>
    </Link>
  );
}
