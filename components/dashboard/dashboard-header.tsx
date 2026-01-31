"use client"

import { UserButton } from "@clerk/nextjs"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function DashboardHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-6 border-b border-slate-100 bg-white sticky top-0 z-10">
            <div className="flex items-center gap-4">
                <SidebarTrigger className="-ml-1 text-slate-500 hover:text-slate-900" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <h2 className="text-lg font-semibold text-slate-900">Dashboard</h2>
            </div>
            <div className="flex items-center gap-4">
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: "w-9 h-9 border border-slate-200"
                        }
                    }}
                />
            </div>
        </header>
    )
}
