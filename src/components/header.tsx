import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";

type NavItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavItem[] = [
  { name: "Inicio", href: "#", current: true },
  { name: "Sobre mi", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contacto", href: "#", current: false },
];

function classNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
const logo = "/src/assets/images/Ehylinolezjua.png";

//const imgHelp = '/src/assets/logos/Circle_Help.svg'
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-full">
      <div className="bg-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* logo + menú desktop */}
            <div className="flex items-center">
              <div className="shrink-0">
                <img alt="Logo" src={logo} className="size-8" />
              </div>

              {/* Menú desktop */}
              <nav className="hidden md:block">
                <ul className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Botón hamburguesa (solo mobile) */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((v) => !v)}
                className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Abrir menú principal</span>
                {!mobileOpen ? (
                  <FaBars className="hover:text-white transition" />
                ) : (
                  <FaX className="hover:text-white transition" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú mobile colapsable */}
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden">
            <nav className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
