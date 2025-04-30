import Navbar from "@/app/components/Navbar";
import AppSidebar from "@/app/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ActiveProvider } from "@/context/activeContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ActiveProvider >
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden py-6 px-4">
          <SidebarProvider>
            <AppSidebar />
          </SidebarProvider>
          <main className="relative  px-2 flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </ActiveProvider>
  );

}