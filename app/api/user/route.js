import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

//define schema for validation
const userSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email(),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character' }),
    passwordConfirmation: z.string()
  })

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, password } = userSchema.parse(body);

        //check if user with email already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if(existingUser) {
            return NextResponse.json({ message: 'User with this email already exists' }, { status: 400 });
        }

        //create new user
        const hashedPassword = await hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        const { password: newUserPassword, ...rest } = newUser;

        return NextResponse.json({ user: rest }, { message: 'User created successfully' }, { status: 201 })
        
    } catch (error) {
        
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}