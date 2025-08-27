
import AppLayout from "@/app/app/layout";
import type { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <AppLayout>
            {children}
        </AppLayout>
    )
}
