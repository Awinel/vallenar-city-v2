import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";

export default function Login() {
  return (
    <main>
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
