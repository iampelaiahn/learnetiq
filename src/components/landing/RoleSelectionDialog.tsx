
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
import { Crown, GraduationCap, School, Shield, User } from "lucide-react"
  
  const roles = [
    { name: 'Student', icon: GraduationCap, href: '/app/dashboard' },
    { name: 'Tutor', icon: User, href: '/tutor/dashboard' },
    { name: 'Parent', icon: Shield, href: '/parent/dashboard' },
    { name: 'Admin', icon: Crown, href: '/school-admin/dashboard' },
  ]
  
  export function RoleSelectionDialog({ children }: { children: React.ReactNode }) {
    return (
      <Dialog>
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
              <Button key={role.name} asChild variant="outline" size="lg" className="h-24 flex-col gap-2">
                <Link href={role.href}>
                  <role.icon className="h-8 w-8 text-primary" />
                  <span className="text-lg">{role.name}</span>
                </Link>
              </Button>
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
