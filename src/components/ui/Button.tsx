import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary: "bg-orange text-white border-2 border-orange",
  secondary: "bg-teal text-white border-2 border-teal",
  outline: "bg-transparent text-orange border-2 border-orange",
  ghost: "bg-transparent text-black border-2 border-transparent",
};

const sizes = {
  sm: "px-8 py-3 text-sm",
  md: "px-10 py-4 text-base",
  lg: "px-14 py-5 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  children,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:scale-105 hover:shadow-md ${variants[variant]} ${sizes[size]} ${className}`;
  const style = { borderRadius: "40px" };

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={style}>
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7" /><path d="M7 7h10v10" />
        </svg>
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} style={style}>
      {children}
    </button>
  );
}
