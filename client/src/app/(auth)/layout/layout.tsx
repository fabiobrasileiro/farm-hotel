import Navbar from "@/app/components/Navbar";
import AppSidebar from "@/app/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ActiveProvider } from "@/context/activeContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ActiveProvider>
      <Navbar />
      <div className="flex">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </ActiveProvider>
  );

}