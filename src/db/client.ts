import postgres from 'postgres';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is undefined!')
}

export const sql = postgres(process.env.DATABASE_URL);