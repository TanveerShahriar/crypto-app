import { connectToDatabase } from "@/../lib/mongodb";
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, password } = body;

  if (!name || !email || !phone || !password) {
    return new Response(JSON.stringify({ message: "Please fill all fields" }), { status: 400 });
  }

  try {
    const hashedPassword = await hash(password, 12);

    const { db } = await connectToDatabase();

    const result = await db.collection('users').insertOne({
      name,
      email,
      phone,
      password: hashedPassword,
      createdAt: new Date(),
    });

    const token = jwt.sign(
      { id: result.insertedId, name, email },
      process.env.JWT_SECRET!, 
      { expiresIn: '1h' }
    );

    return new Response(JSON.stringify({ message: 'User created successfully', token }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error creating user' }), { status: 500 });
  }
}