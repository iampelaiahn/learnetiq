
import type { PropsWithChildren } from "react";
import { Logo } from "@/components/Logo";

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
            <div className="mb-8">
                <Logo />
            </div>
            {children}
        </div>
    )
}
