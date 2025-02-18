import postgres from "postgres";
import { Event, Publication, Store, User } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!,  { ssl: 'require' });

export async function fetchCalendarEvents() {
    try {
        const data = await sql<Event[]>`SELECT * FROM calendar`;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch calendar data.");
    }
}

export async function fetchStores() {
    try {
        const data = await sql<Store[]>`SELECT * FROM stores`;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch stores data.");
    }
}

export async function getOneStore(storeId: string) {
    try {
      const data = await sql<Store[]>`
        SELECT * FROM stores WHERE id = ${storeId}`;
  
      if (data.length === 0) {
        throw new Error(`Store with ID "${storeId}" not found.`);
      }
  
      return data[0]; // Return the first store found
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch store data.");
    }
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

export async function fetchUsers() {
    try {
        const data = await sql<User[]>`SELECT * FROM users`;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch users data.");
    }
}