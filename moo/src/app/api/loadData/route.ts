import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`INSERT INTO Persons (PersonID, LastName, FirstName, Address, City)
      VALUES ('0', 'Tapia', 'Joshua', 'Atwood', 'Modesto');`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}