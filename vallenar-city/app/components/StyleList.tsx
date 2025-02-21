import { fetchStyle } from "../lib/data";
import StyleDisplayCard from "../ui/style/StyleDisplayCard";

export default async function StyleList() {
  const styles = await fetchStyle();

  return (
    <div className="flex flex-wrap justify-evenly mt-5">
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
  );
}
