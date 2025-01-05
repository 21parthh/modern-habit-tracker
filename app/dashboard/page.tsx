"use client"

import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs";
import {Button} from "@/components/ui/button";

export default function dashboard() {
    return (
        <div>
            <Button>
                <LogoutLink>
                    Logout
                </LogoutLink>
            </Button>
        </div>
    )
}