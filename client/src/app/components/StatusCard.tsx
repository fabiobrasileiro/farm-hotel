// components/StatCard.tsx
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  titleSize?: string,
  iconSize?: number,
  textize?: string,
  strokeSize?: number,
  href?: string;
  colorClass?: string;
}

export default function StatCard({ label, value, href = "/", colorClass = "", titleSize, iconSize, strokeSize, textize = ""}: StatCardProps) {
  return (
    <div className="h-20 w-64 bg-slate-800 rounded-md px-4 py-3 flex items-center justify-between">
      <div>
        <h3 className={titleSize}>{label}</h3>
        <p className={`text-2xl font-medium ${colorClass}`}>{value}</p>
      </div>
      <Link href={href}>
        <ExternalLink size={iconSize} strokeWidth={strokeSize} className={colorClass} />
      </Link>
    </div>
  );
}
