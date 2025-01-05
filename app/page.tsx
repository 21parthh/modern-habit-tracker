"use client"

import {Button} from "@/components/ui/button";
import {LoginLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs";
import {localStrings} from "@/constants/stringify"

export default function Home() {
  return (
    <div className={"p-8 gap-4"}>
      <h1>Hello World</h1>
      <Button>
        <RegisterLink>
            {localStrings.register}
        </RegisterLink>
        <LoginLink>
          Login
        </LoginLink>
      </Button>
    </div>
  );
}
