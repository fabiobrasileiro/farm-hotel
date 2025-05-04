// components/InfoCard.tsx
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  href?: string;
  children?: ReactNode;
}

export default function InfoCard({ title, href = "/", children }: InfoCardProps) {
  return (
    <div className="bg-slate-800 py-4 px-4 rounded-lg gap-8 flex flex-col">
      <div className="flex items-center gap-2">
        <p className="font-medium">{title}</p>
        <Link href={href}>
          <ExternalLink size={16} />
        </Link>
      </div>
      <div className="px-8">
        {children}
      </div>
    </div>
  );
}
