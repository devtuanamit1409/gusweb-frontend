import Link from "next/link";

interface QuotationButtonProps {
  label?: string; // Prop cho phép truyền nội dung nút
}

export default function QuotationButton({ label = "Báo Giá" }: QuotationButtonProps) {
  return (
    <Link href="/quick-quotes">
      <button
        type="button"
        className="text-white ant-btn focus:outline-none font-medium rounded-md text-sm px-8 py-3 "
      >
        {label} {/* Nội dung của nút sẽ thay đổi theo prop */}
      </button>
    </Link>
  );
}
