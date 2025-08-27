
import AppLayout from "@/app/app/layout";
import type { PropsWithChildren } from "react";

export default function ParentLayout({ children }: PropsWithChildren) {
    return (
        <AppLayout>
            {children}
        </AppLayout>
    )
}
