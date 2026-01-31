import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-slate-50 w-full">
                <AppSidebar />
                <SidebarInset className="flex flex-col flex-1 bg-slate-50/50">
                    <DashboardHeader />
                    <main className="flex-1 p-6 lg:p-10">
                        {children}
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}
