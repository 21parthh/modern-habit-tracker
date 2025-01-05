import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    console.log("API route hit");
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log("User from Kinde:", user);

    if (!user || !user.id) {
        throw new Error("No user found");
    }

    console.log("User ID:", user.id);
    let dbUser;
    try {
        dbUser = await prisma.user.findUnique({ where: { id: user.id } });
        console.log("DB User:", dbUser);
    } catch (error) {
        console.error("Error fetching user:", error);
    }

    if (!dbUser) {
        try {
            dbUser = await prisma.user.create({
                data: {
                    id: user.id,
                    firstName: user.given_name ?? "",
                    lastName: user.family_name ?? "",
                    email: user.email ?? "",
                    profileImage: user.picture,
                },
            });
            console.log("New user created:", dbUser);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    return NextResponse.redirect("http://localhost:3000/dashboard");
}
