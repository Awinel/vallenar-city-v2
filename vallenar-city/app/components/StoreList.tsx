// import StoreCards from "@/app/components/StoreCards";
// import { Store } from "@/app/lib/definitions";
// import { fetchStores } from "@/app/lib/data";
// import React, { useEffect, useState } from "react";

// const StoreList = () => {
//   const [stores, setStores] = useState<Store[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getStores = async () => {
//       try {
//         const storeData = await fetchStores();
//         setStores(storeData);
//       } catch (error) {
//         console.error("Error fetching stores:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getStores();
//   }, []);

//   if (loading) return <p>Loading Stores...</p>;

//   return (
//     <div className="flex flex-wrap gap-4">
//       {stores.length > 0 ? (
//         stores.map((store) => (
//           <StoreCards
//             key={store.id}
//             title={store.name}
//             description={store.description}
//             image={store.image || "https://via.placeholder.com/150"}
//           />
//         ))
//       ) : (
//         <p>No stores available.</p>
//       )}
//     </div>
//   );
// };

// export default StoreList;

import StoreCards from "@/app/ui/store/StoreCards";
import { fetchStores } from "@/app/lib/data";

export default async function StoreList() {
  const stores = await fetchStores(); // Server-side fetching

  return (
    <div className="flex flex-wrap justify-evenly gap-4">
      {stores.length > 0 ? (
        stores.map((store) => (
          <StoreCards
            key={store.id}
            title={store.name}
            description={store.description}
            image={store.image || "https://via.placeholder.com/150"}
          />
        ))
      ) : (
        <p>No stores available.</p>
      )}
    </div>
  );
}
