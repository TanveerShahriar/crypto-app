import { connectToDatabase } from "@/../lib/mongodb"; // Make sure this path matches your lib folder
import { verify } from "jsonwebtoken";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { securityCode, token } = await req.json();
    
    // Verify the JWT token
    const decoded = verify(token, process.env.JWT_SECRET);
    
    if (!decoded || !decoded.id) {
      return new Response(
        JSON.stringify({ message: "Unauthorized, invalid token" }),
        { status: 401 }
      );
    }

    // Connect to the database
    const { db } = await connectToDatabase();

    // Find the user in the database using the userId from JWT
    const user = await db.collection("users").findOne({
      _id: new ObjectId(decoded.id),
    });

    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not found" }),
        { status: 404 }
      );
    }

    console.log(decoded.userId);
    

    // Update the user's security code
    await db.collection("users").updateOne(
      { _id: new ObjectId(decoded.id) },
      { $set: { securityCode: securityCode } }
    );

    return new Response(
      JSON.stringify({ message: "Security code added successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error processing your request" }),
      { status: 500 }
    );
  }
}