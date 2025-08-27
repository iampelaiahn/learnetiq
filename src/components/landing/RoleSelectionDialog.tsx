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
import { Crown, GraduationCap, Shield, User } from "lucide-react"
  
  const roles = [
    { name: 'Student', icon: GraduationCap, href: '/app/dashboard' },
    { name: 'Tutor', icon: User, href: '/app/dashboard' },
    { name: 'Parent', icon: Shield, href: '/app/dashboard' },
    { name: 'Admin', icon: Crown, href: '/app/dashboard' },
  ]
  
  export function RoleSelectionDialog({ children }: { children: React.ReactNode }) {
    return (
      <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
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
        </DialogContent>
      </Dialog>
    )
  }
  