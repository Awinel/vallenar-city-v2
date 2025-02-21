import { fetchStyle } from "@/app/lib/data";
import StyleDisplayCard from "@/app/ui/style/StyleDisplayCard";

export default async function StylePage() {
  const styles = await fetchStyle();

  return (
    <div>
      <h1 className={`text-2xl text-center`}>Style</h1>
      <div className="flex flex-wrap justify-evenly">
        {styles.map((style) => (
          <StyleDisplayCard
            key={style.id}
            id={style.id}
            name={style.name}
            address={style.address}
            addressnumber={style.addressnumber}
            description={style.description}
            image={style.image}
            phone={style.phone}
            type={style.type}
            email={style.email}
            facebook={style.facebook}
            instagram={style.instagram}
          />
        ))}
      </div>
    </div>
  );
}
