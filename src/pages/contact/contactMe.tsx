import { FaBlogger, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

type ContactSectionProps = {
  title?: string;
  subtitle?: string;
  emails: string[];
  blog: string[];
  linkedIn: string[];
  github: string[];
  bgColor?: string;
  textColor?: string;
};

export default function ContactSection({
  title = "Contacto",
  subtitle = "Si te interesa escribirme lo puedes hacer enviándome un email, si quieres saber mas sobre mi trabajo échale un vistazo a mi blog, o a mi LinkedIn.",
  emails,
  blog,
  linkedIn,
  github,
  bgColor = "#c4a885",
  textColor = "#ffffff",
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="w-full"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="mx-auto max-w-4xl  py-12">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-3 max-w-xl text-base/7 opacity-90">{subtitle}</p>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-start gap-4 min-w-0">
            <FaEnvelope className="size-5 shrink-0 leading-none" />
            <div className="flex-1 min-w-0">
              <h3 className="text-md font-semibold">Correo</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {emails.map((e, i) => (
                  <li key={i}>
                    <a
                      href={`mailto:${e}`}
                      className="underline-offset-2 hover:underline break-words"
                    >
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4 min-w-0">
            <FaBlogger className="size-5 shrink-0 leading-none" />
            <div className="flex-1 min-w-0">
              <h3 className="text-md font-semibold">Blog</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {blog.map((p, i) => (
                  <li key={i} className="min-w-0">
                    <a
                      href={`${p}`}
                      className="underline-offset-2 hover:underline break-words"
                    >
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4 min-w-0">
            <FaLinkedinIn className="size-5 shrink-0 leading-none" />
            <div className="flex-1 min-w-0">
              <h3 className="text-md font-semibold">LinkedIn</h3>
              <address className="mt-2 not-italic text-sm space-y-1">
                {linkedIn.map((ln, i) => (
                  <div key={i} className="min-w-0">
                    <a
                      href={`${ln}`}
                      className="underline-offset-2 hover:underline break-words"
                    >
                      {ln}
                    </a>
                  </div>
                ))}
              </address>
            </div>
          </div>

          <div className="flex items-start gap-4 min-w-0">
            <FaGithub className="size-5 shrink-0 leading-none" />
            <div className="flex-1 min-w-0">
              <h3 className="text-md font-semibold">GitHub</h3>
              <address className="mt-2 not-italic text-sm space-y-1">
                {github.map((gh, i) => (
                  <div key={i} className="min-w-0">
                    {" "}
                    <a
                      href={`${gh}`}
                      className="underline-offset-2 hover:underline break-words"
                    >
                      {gh}
                    </a>
                  </div>
                ))}
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
