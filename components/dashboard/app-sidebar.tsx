"use client"

import * as React from "react"
import {
    LayoutGrid,
    Video,
    BookOpen,
    CreditCard,
    Settings,
    Zap,
    Plus,
    Rocket,
    UserCircle
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const menuItems = [
    {
        title: "Series",
        icon: LayoutGrid,
        url: "/dashboard/series",
    },
    {
        title: "Videos",
        icon: Video,
        url: "/dashboard/videos",
    },
    {
        title: "Guides",
        icon: BookOpen,
        url: "/dashboard/guides",
    },
    {
        title: "Billing",
        icon: CreditCard,
        url: "/dashboard/billing",
    },
    {
        title: "Settings",
        icon: Settings,
        url: "/dashboard/settings",
    },
]

const footerItems = [
    {
        title: "Upgrade",
        icon: Rocket,
        url: "/dashboard/upgrade",
    },
    {
        title: "Profile Settings",
        icon: UserCircle,
        url: "/dashboard/profile",
    },
]

export function AppSidebar() {
    return (
        <Sidebar className="border-r border-slate-200 bg-white">
            <SidebarHeader className="h-16 flex items-center px-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white fill-current" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">EasyShorts</span>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-4 py-4">
                <div className="px-2 mb-6">
                    <Link href="/dashboard/create">
                        <Button className="w-full justify-start gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl h-12 text-base font-semibold transition-all shadow-sm shadow-purple-200">
                            <Plus className="w-5 h-5" />
                            <span>Create new series</span>
                        </Button>
                    </Link>
                </div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        size="lg"
                                        className="h-12 px-4 rounded-xl text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-colors group"
                                    >
                                        <a href={item.url} className="flex items-center gap-3">
                                            <item.icon className="w-5 h-5 group-hover:text-purple-600 transition-colors" />
                                            <span className="text-base font-medium">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-slate-100">
                <SidebarMenu>
                    {footerItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                size="lg"
                                className="h-12 px-4 rounded-xl text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-colors group"
                            >
                                <a href={item.url} className="flex items-center gap-3">
                                    <item.icon className="w-5 h-5 group-hover:text-purple-600 transition-colors" />
                                    <span className="text-base font-medium">{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
