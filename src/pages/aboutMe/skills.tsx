type Skill = { name: string; value: number };

type SkillsSectionProps = {
  title?: string;
  introHeading?: string;
  introText?: string;
  skills: Skill[];
  barColor?: string;
  trackColor?: string;
  trackBorder?: string;
};

export default function SkillsSection({
  introHeading = "Algunas habilidades",
  introText = "Short paragraph describing your skillset and experience. Keep it concise and informative.",
  skills,
  barColor = "#c4a885",
  trackColor = "rgba(0,0,0,0.08)",
  trackBorder = "rgba(0,0,0,0.12)",
}: SkillsSectionProps) {
  return (
    <div className="bg-[#fdfcf5]">
      <section className="mx-auto max-w-4xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold leading-snug">
              {introHeading}
            </h3>
            <p className="text-base leading-relaxed">{introText}</p>
          </div>

          <ul className="flex flex-col gap-5">
            {skills.map((s, idx) => (
              <li key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{s.name}</span>
                  <span className="text-sm font-medium tabular-nums">
                    {s.value}%
                  </span>
                </div>

                {/* Track */}
                <div
                  className="h-1.5 w-full rounded-full"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={s.value}
                  aria-label={s.name}
                  style={{
                    backgroundColor: trackColor,
                    border: `1px solid ${trackBorder}`,
                  }}
                >
                  {/* Fill */}
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.max(0, Math.min(100, s.value))}%`,
                      backgroundColor: barColor, // ← aquí aplicamos #c4a885
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
