import { getOneStore } from "@/app/lib/data";

export default async function StorePage({
  params,
}: {
  params: { storeId: string };
}) {
  const { storeId } = await params;

  try {
    const store = await getOneStore(storeId);

    // If store is not found
    if (!store) {
      return (
        <p className="text-center text-red-500">
          No se ha encontrado el restaurante.
        </p>
      );
    }

    return (
      <div className=" p-8 md:grid md:grid-cols-2 ">
        <h1 className="text-2xl font-bold">{store.name}</h1>
        <img
          src={`/img/${store.image}`}
          alt={store.name}
          className="w-full max-w-[500px] md:w-80 md:h-80 mt-4 rounded-lg md:col-start-1 md:row-start-2 md:justify-self-center"
        />
        <div className="col-start-2 row-start-2 md:justify-self-start md:place-self-center">
          <p className="mt-2 text-gray-700">{store.description}</p>

          {/* Display other store details */}
          <p className="">
            <strong>Address:</strong> {store.address} {store.addressNumber}
          </p>
          <p className="">
            <strong>Phone:</strong> {store.phone}
          </p>
          <p className="">
            <strong>Instagram:</strong>{" "}
            <a
              href={`https://instagram.com/${store.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {store.instagram}
            </a>
          </p>
          <p className="">
            <strong>Facebook:</strong>{" "}
            <a
              href={`https://facebook.com/${store.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {store.facebook}
            </a>
          </p>
          <p className="">
            <strong>Email:</strong>{" "}
            <a href={`mailto:${store.email}`}>{store.email}</a>
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching store:", error);
    return (
      <p className="text-center text-red-500">Error loading store data.</p>
    );
  }
}
