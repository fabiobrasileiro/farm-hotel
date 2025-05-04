'use client';

import {
    Activity, GraduationCap, Megaphone, Boxes, Users, Utensils,
    Gauge, Building2, BedDouble, ClipboardCheck, LampDesk,
    List, LogIn, LogOut, Plane, LayoutDashboard,
    ArrowDownCircle, ArrowUpCircle, Store, ShoppingCart,
    CalendarClock, Clock
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { sidebarMenu } from "./sidebar-config";
import { useActive } from "@/context/activeContext";



const icons = {
    Activity,
    GraduationCap,
    Megaphone,
    Boxes,
    Users,
    Utensils,
    Gauge,
    Building2,
    BedDouble,
    ClipboardCheck,
    LampDesk,
    List,
    LogIn,
    LogOut,
    Plane,
    LayoutDashboard,
    ArrowDownCircle,
    ArrowUpCircle,
    Store,
    ShoppingCart,
    CalendarClock,
    Clock,
};


export function AppSidebar() {
    const { active, setActive } = useActive();
    return (
            <div>
                <SidebarGroup className="p-0 h-5/6 w-48   sticky bg-gray-900 text-white rounded-md">
                    <SidebarGroupContent>
                        <SidebarMenu >
                            {sidebarMenu.filter((section) => section.module === active).map((section) => (
                                <div key={section.module}>
                                    {section.children.map((item) => {
                                        const Icon = icons[item.icon as keyof typeof icons];
                                        return (
                                            <SidebarMenuItem key={item.href} >
                                                <SidebarMenuButton asChild className="hover:bg-divine-ocean-900 hover:text-sky-500 h-12">
                                                    <a href={item.href} className="flex items-center gap-4 p-2 ">
                                                        {Icon && <Icon className="w-4 h-4 " />}
                                                        <span className="text-white ">{item.label}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        );
                                    })}
                                </div>
                            ))}

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </div>
    )
}
export default AppSidebar