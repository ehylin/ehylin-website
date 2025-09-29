import SectionHeader from "../../components/sectionHeader";

type InfoItem = { label: string; value: string };

type AboutMeProps = {
  title?: string;
  headline?: string;
  role?: string;
  description?: string;
  info?: InfoItem[];
  imageUrl: string;
  onDownloadCV?: () => void;
};

export default function AboutMe({
  headline = "Hi There! I'm Your Name",
  role = "Your Role",
  description = "Short bio goes here. Keep it to 2–3 sentences for readability.",
  info = [],
  imageUrl,
  onDownloadCV,
}: AboutMeProps) {
  return (
    <section className="mx-auto max-w-4xl py-12">
      {/* Título sección */}
      <SectionHeader title="Sobre mi" accentColor="#c4a885" align="left" />

      {/* 2 columnas en desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Columna imagen */}
        <figure className="w-full overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </figure>

        {/* Columna contenido */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-1">{headline}</h3>
            <p className="text-base font-medium">{role}</p>
          </div>

          <p className="text-base leading-relaxed">{description}</p>

          {/* Datos en dos columnas */}
          {info.length > 0 && (
            <dl className="grid grid-cols-1  gap-x-8 gap-y-4">
              {info.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <dt className="w-28 shrink-0 text-sm font-medium">
                    {item.label}
                  </dt>
                  <dd className="text-sm">{item.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {/* Botón CV */}
          <div>
            <button
              onClick={onDownloadCV}
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium border"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
