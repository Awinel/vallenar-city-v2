import { nunito } from "../fonts";

const links = [
  {
    name: "Calendario",
    href: "/dashboard/calendar-admin",
  },
  {
    name: "Tiendas",
    href: "/dashboard/stores-admin",
  },
  {
    name: "Comida",
    href: "/dashboard/food-admin/",
  },
  {
    name: "Estilo",
    href: "/dashboard/style-admin",
  },
  {
    name: "Publicaciones",
    href: "/dashboard/publications-admin",
  },
  {
    name: "Servicios Publicos",
    href: "/dashboard/services-admin",
  },
];

export default function NavLinks() {
  return (
    <div className="flex flex-wrap md:inline">
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className={`${nunito.className} flex h-[48px] grow items-center justify-center rounded-md bg-amber-200 p-3 text-sm font-medium hover:bg-[var(--color-05)] hover:text-[var(--black)] my-1 mx-1 md:mx-0 md:flex-none md:justify-start md:p-2 md:px-3`}
          >
            <p className="p-2 m-1]">{link.name}</p>
          </a>
        );
      })}
    </div>
  );
}
