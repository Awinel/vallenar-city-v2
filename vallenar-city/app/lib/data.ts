
import postgres from "postgres";
import { Event, Publication, Store, User } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!,  { ssl: 'require' });

export async function fetchCalendarEvents() {
    try {
        const data = await sql<Event[]>`SELECT * FROM calendar`;

        return data.map(event => ({
            ...event,
            date: typeof event.date === "object" && event.date instanceof Date 
                ? event.date.toISOString().split("T")[0] // Extract only YYYY-MM-DD
                : event.date,
            creation_date: typeof event.creation_date === "object" && event.creation_date instanceof Date 
                ? event.creation_date.toISOString().split("T")[0] // Extract only YYYY-MM-DD
                : event.creation_date,
        }));
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch calendar data.");
    }
}


export async function fetchStores() {
    try {
        const data = await sql<Store[]>`SELECT * FROM stores WHERE type NOT IN ('Food', 'Style', 'Services') `;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch stores data.");
    }
}

export async function fetchStoreById(id: string) {
    const stores = await fetchStores(); // Fetch all stores
    return stores.find((store) => store.id === id) || null;
  }
  

export async function fetchFood() {
    try {
        const data = await sql<Store[]>`SELECT * FROM stores WHERE type = 'Food'`;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch stores data.");
    }
}

export async function fetchFoodById(id: string) {
    const stores = await fetchFood(); // Fetch all Food
    return stores.find((store) => store.id === id) || null;
  }

export async function fetchStyle() {
    try {
        const data = await sql<Store[]>`SELECT * FROM stores WHERE type = 'Style'`;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch stores data.");
    }
}

export async function fetchStyleById(id: string) {
    const stores = await fetchStyle(); // Fetch all Food
    return stores.find((store) => store.id === id) || null;
  }

export async function fetchServices() {
    try {
        const data = await sql<Store[]>`SELECT * FROM stores WHERE type = 'Services'`;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch stores data.");
    }
}

export async function fetchServicesById(id: string) {
    const stores = await fetchServices(); // Fetch all Food
    return stores.find((store) => store.id === id) || null;
  }


export async function fetchPublications() {
    try {
        const data = await sql<Publication[]>`SELECT * FROM publications`;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch publications data.");
    }
}

export async function fetchPublicationById(id: string) {
    const stores = await fetchPublications(); // Fetch all Food
    return stores.find((store) => store.id === id) || null;
  }

export async function fetchUsers() {
    try {
        const data = await sql<User[]>`SELECT * FROM users`;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch users data.");
    }
}