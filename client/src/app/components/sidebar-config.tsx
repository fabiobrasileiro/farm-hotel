// menu-config.ts
export const sidebarMenu = [
    {
      module: "Dashboard",
      children: [
        { label: "Analytics", href: "/dashboard/analytics", icon: "Activity" },
        { label: "Students", href: "/dashboard/students", icon: "GraduationCap" },
        { label: "Complaints", href: "/dashboard/complaints", icon: "Megaphone" },
        { label: "Stock", href: "/dashboard/stock", icon: "Boxes" },
        { label: "Users", href: "/dashboard/users", icon: "Users" },
        { label: "Meals", href: "/dashboard/meals", icon: "Utensils" }
      ]
    },
    {
      module: "Rooms",
      children: [
        { label: "Occupancy", href: "/rooms/occupancy", icon: "Gauge" },
        { label: "Hostels", href: "/rooms/hostels", icon: "Building2" },
        { label: "Rooms", href: "/rooms/rooms", icon: "BedDouble" },
        { label: "Assigned", href: "/rooms/assigned", icon: "ClipboardCheck" },
        { label: "Furniture", href: "/rooms/furniture", icon: "LampDesk" }
      ]
    },
    {
      module: "Attendance",
      children: [
        { label: "All", href: "/attendance/all", icon: "List" },
        { label: "In", href: "/attendance/in", icon: "LogIn" },
        { label: "Out", href: "/attendance/out", icon: "LogOut" },
        { label: "Leave", href: "/attendance/leave", icon: "Plane" }
      ]
    },
    {
      module: "Accounts",
      children: [
        { label: "Dashboard", href: "/accounts/dashboard", icon: "LayoutDashboard" },
        { label: "Credit", href: "/accounts/credit", icon: "ArrowDownCircle" },
        { label: "Debit", href: "/accounts/debit", icon: "ArrowUpCircle" },
        { label: "Vendors", href: "/accounts/vendors", icon: "Store" },
        { label: "Orders", href: "/accounts/orders", icon: "ShoppingCart" },
        { label: "Expected", href: "/accounts/expected", icon: "CalendarClock" },
        { label: "Overdue", href: "/accounts/overdue", icon: "Clock" }
      ]
    },
    {
      module: "Maintenance",
      children: []
    }
  ];
  