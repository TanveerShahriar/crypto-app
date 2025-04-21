import { connectToDatabase } from "@/../lib/mongodb";
import { compare } from 'bcryptjs'; 
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const body = await req.json();
  const { loginemail, loginpass } = body;

  if (!loginemail || !loginpass) {
    return new Response(JSON.stringify({ message: "Please fill all fields" }), { status: 400 });
  }

  try {
    const { db } = await connectToDatabase();

    const user = await db.collection('users').findOne({ email : loginemail });

    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    const isMatch = await compare(loginpass, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Incorrect password' }), { status: 401 });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    return new Response(JSON.stringify({ message: 'Login successful', token }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error logging in' }), { status: 500 });
  }
}