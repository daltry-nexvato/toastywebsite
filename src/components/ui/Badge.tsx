interface BadgeProps {
  variant?: "new" | "popular" | "sale" | "default";
  children: React.ReactNode;
}

const variantClasses = {
  new: "bg-teal text-white",
  popular: "bg-orange text-white",
  sale: "bg-red-500 text-white",
  default: "bg-gray-200 text-gray-800",
};

export default function Badge({ variant = "default", children }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wide ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
