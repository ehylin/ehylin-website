import { FaSuitcase, FaUserGraduate } from "react-icons/fa6";
import SectionHeader from "../../components/sectionHeader";

type TimelineItem = {
  title: string;
  period: string;
  org: string;
  description?: string;
};

type ResumeSectionProps = {
  education: TimelineItem[];
  experience: TimelineItem[];
  educationTitle?: string;
  experienceTitle?: string;
  highlightColor?: string;
};

export default function ResumeSection({
  education,
  experience,
  educationTitle = "Educación",
  experienceTitle = "Experiencia",
  highlightColor = "#c4a885",
}: ResumeSectionProps) {
  return (
    <section id="resume" className="mx-auto max-w-4xl py-12">
      <SectionHeader title="Resume" accentColor={highlightColor} align="left" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <FaUserGraduate className="text-lg" />
            <h3 className="text-2xl font-semibold">{educationTitle}</h3>
          </div>

          <ol className="relative pl-6">
            <span
              aria-hidden
              className="absolute left-[7px] top-0 h-full w-px"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            />
            {education.map((item, idx) => (
              <li key={idx} className="mb-8">
                <span
                  aria-hidden
                  className="absolute -ml-[11px] mt-2 size-2.5 rounded-full"
                  style={{ backgroundColor: highlightColor }}
                />
                <div className="space-y-1 ml-1">
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: highlightColor }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm opacity-80">{item.period}</p>
                  <p className="text-base font-medium">{item.org}</p>
                  {item.description && (
                    <p className="text-sm leading-relaxed opacity-80">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Experience */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <FaSuitcase className="text-lg" />
            <h3 className="text-2xl font-semibold">{experienceTitle}</h3>
          </div>

          <ol className="relative pl-6">
            <span
              aria-hidden
              className="absolute left-[7px] top-0 h-full w-px"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            />
            {experience.map((item, idx) => (
              <li key={idx} className="mb-8">
                <span
                  aria-hidden
                  className="absolute -ml-[11px] mt-2 size-2.5 rounded-full"
                  style={{ backgroundColor: highlightColor }}
                />
                <div className="space-y-1 ml-1">
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: highlightColor }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm opacity-80">{item.period}</p>
                  <p className="text-base font-medium">{item.org}</p>
                  {item.description && (
                    <p className="text-sm leading-relaxed opacity-80">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
