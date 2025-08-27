
import AppLayout from "@/app/app/layout";
import type { PropsWithChildren } from "react";

export default function TutorLayout({ children }: PropsWithChildren) {
    return (
        <AppLayout>
            {children}
        </AppLayout>
    )
}
