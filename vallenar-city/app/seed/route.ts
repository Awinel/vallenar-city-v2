import bcrypt from 'bcrypt';
import postgres from 'postgres';
import user from '@/app/lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
    const insertedUsers = await Promise.all(
        user.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return sql`
            INSERT INTO users (id, username, name, email, password, level)
            VALUES (${user.id}, ${user.username}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.level})
            ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );
    return insertedUsers;
}

export async function GET() {
    try {
        const result = await sql.begin((sql) => {
            seedUsers()
        });

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}

