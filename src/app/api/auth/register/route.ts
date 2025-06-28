import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Employee from "@/models/Employee";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  await connectDB();
  const { name, mobile, password } = await req.json();

  if (!name || !mobile || !password) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const existingUser = await Employee.findOne({ mobile });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await Employee.create({
    name,
    mobile,
    password: hashedPassword,
  });

  return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
}
