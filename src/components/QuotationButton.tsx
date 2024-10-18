import { useTranslations } from "next-intl";
import Link from "next/link";

export default function QuotationButton() {
  const t = useTranslations();
  return (
    <Link href="/quick-quotes">
      <button
        type="button"
        className="text-white ant-btn focus:outline-none font-medium rounded-md text-sm px-8 py-3 "
      >
        {t("header.button")}
      </button>
    </Link>
  );
}
