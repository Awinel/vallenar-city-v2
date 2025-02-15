import { nunito } from "./fonts";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Calendario",
    href: "/calendar",
  },
  {
    name: "Tiendas",
    href: "/stores",
  },
  {
    name: "Comida",
    href: "/food",
  },
  {
    name: "Estilo",
    href: "/style",
  },
  {
    name: "Publicaciones",
    href: "/publications",
  },
  {
    name: "Servicios Publicos",
    href: "/services",
  },
];

export const NavLinks = () => {
  return (
    <div className="flex flex-row justify-evenly bg-[var(--color-02)] flex-wrap">
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className={`${nunito.className} font-bold text-base text-[var(--white)]`}
          >
            <p className="p-2 m-3 border-[var(--color-02)] border-b-2 hover:border-b-2 hover:border-[var(--white)] transition duration-500 ease-in-out">
              {link.name}
            </p>
          </a>
        );
      })}
    </div>
  );
};
