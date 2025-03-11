"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { authenticate } from "../lib/authentication";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction}>
      <div className="flex flex-col items-center justify-center bg-[var(--color-03)] my-10 w-[350px] mx-auto rounded-xl">
        <h1 className="text-2xl my-5">Inicie sesión para continuar</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
            required
            className="mb-3 p-1 rounded-sm"
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
            minLength={6}
            className="mb-3 p-1 rounded-sm"
          />
          <input type="hidden" name="redirectTo" value={callbackUrl} />
          <button
            className="my-5 bg-[var(--color-05)] p-2 rounded-xl hover:text-white hover:bg-amber-600 font-bold"
            aria-disabled={isPending}
          >
            Iniciar Sesión
          </button>
          <div>
            {errorMessage && (
              <>
                <p className="text-red-500 text-center pb-5 font-black">
                  {errorMessage}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
