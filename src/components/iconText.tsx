import { LucideIcon } from 'lucide-react';

interface IconTextProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export default function IconText({
  icon: Icon,
  text,
  className,
}: IconTextProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Icon className="text-white-500 h-6 w-6" />
      <span className="text-sm leading-tight font-medium text-white">
        {text}
      </span>
    </div>
  );
}
