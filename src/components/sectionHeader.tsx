type SectionHeaderProps = {
  title: string;
  accentColor?: string;
  align?: "left" | "center" | "right";
  className?: string;
  uppercase?: boolean;
};

export default function SectionHeader({
  title,
  accentColor = "#c4a885",
  align = "left",
  className = "",
  uppercase = true,
}: SectionHeaderProps) {
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";
  const underlineClass =
    align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "mr-auto";

  return (
    <header className={`mb-10 ${alignClass} ${className}`}>
      <h2 className="text-3xl font-semibold tracking-tight inline-block relative">
        {uppercase ? title.toUpperCase() : title}
        <span
          aria-hidden
          className={`block mt-3 h-0.5 w-24 ${underlineClass}`}
          style={{ backgroundColor: accentColor }}
        />
      </h2>
    </header>
  );
}
