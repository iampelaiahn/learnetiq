
import AppLayout from "@/app/app/layout";
import type { PropsWithChildren } from "react";

export default function SchoolAdminLayout({ children }: PropsWithChildren) {
    return (
        <AppLayout>
            {children}
        </AppLayout>
    )
}
