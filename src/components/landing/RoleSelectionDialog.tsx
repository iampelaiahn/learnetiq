
'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Link from "next/link"
import { Button } from "../ui/button"
import { Crown, GraduationCap, School, Shield, User, Eye } from "lucide-react"
import { LoginDialog } from "./LoginDialog"
import * as React from "react";
  
  const roles = [
    { name: 'Student', icon: GraduationCap, href: '/app/dashboard' },
    { name: 'Tutor', icon: User, href: '/tutor/dashboard' },
    { name: 'Parent', icon: Shield, href: '/parent/dashboard' },
    { name: 'Admin', icon: Crown, href: '/school-admin/dashboard' },
  ]
  
  export function RoleSelectionDialog({ children }: { children: React.ReactNode }) {
    const [isRoleSelectionOpen, setIsRoleSelectionOpen] = React.useState(false);

    return (
      <Dialog open={isRoleSelectionOpen} onOpenChange={setIsRoleSelectionOpen}>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>View the App As</DialogTitle>
            <DialogDescription>
                Select a role to experience the platform from a different perspective.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            {roles.map((role) => (
                <div key={role.name} className="relative group">
                    <LoginDialog role={role.name} href={role.href} onOpenChange={(isOpen) => !isOpen && setIsRoleSelectionOpen(false)}>
                        <Button variant="outline" size="lg" className="h-24 w-full flex-col gap-2">
                            <role.icon className="h-8 w-8 text-primary" />
                            <span className="text-lg">{role.name}</span>
                        </Button>
                    </LoginDialog>
                    <Button asChild size="sm" variant="ghost" className="absolute bottom-1 right-1 h-auto p-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link href={role.href}>
                            <Eye className="mr-1 h-3 w-3"/>
                            Preview
                        </Link>
                    </Button>
                </div>
            ))}
          </div>
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                Or
                </span>
            </div>
          </div>
           <Button asChild variant="secondary" size="lg" className="h-24 flex-col gap-2">
                <Link href="/auth/create-school">
                  <School className="h-8 w-8 text-primary" />
                  <span className="text-lg">School Admin Signup</span>
                </Link>
            </Button>
        </DialogContent>
      </Dialog>
    )
  }
