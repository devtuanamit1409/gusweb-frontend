import { useTranslations } from "next-intl";
import Link from "next/link";

interface QuotationButtonProps {
  label?: string; // Prop cho phép truyền nội dung nút
}

export default function QuotationButton({ label = "Báo Giá" }: QuotationButtonProps) {
  const t = useTranslations();
  return (
    <Link href="/quick-quotes">
      <button
        type="button"
        className="text-white ant-btn focus:outline-none font-medium rounded-md text-sm px-8 py-3 "
      >
        {label} {/* Nội dung của nút sẽ thay đổi theo prop */}
        {t("header.button")}
      </button>
    </Link>
  );
}
