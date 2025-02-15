import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="">
        <Image
          alt="Vallenar City Logo"
          src="logo.svg"
          height={100}
          width={100}
        />
      </div>
      <div className="">{children}</div>
    </div>
  );
}
