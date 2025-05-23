import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Calendar, User, CreditCard, Award, ShoppingCart, BarChart2, Settings } from "lucide-react";

const menuItems = [
  { path: "/home", title: "Home", icon: <Calendar className="h-4 w-4" /> },
  { path: "/group", title: "Group", icon: <User className="h-4 w-4" /> },
  { path: "/payments", title: "To'lovlarim", icon: <CreditCard className="h-4 w-4" /> },
  { path: "/ranking", title: "Reyting", icon: <Award className="h-4 w-4" /> },
  { path: "/profile", title: "Profile", icon: <User className="h-4 w-4" /> },
  { path: "/shop", title: "Shop", icon: <ShoppingCart className="h-4 w-4" /> },
  { path: "/stats", title: "Ko'rsatgichlarim", icon: <BarChart2 className="h-4 w-4" /> },
  { path: "/settings", title: "Settings", icon: <Settings className="h-4 w-4" /> },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        <Sidebar>
          <SidebarContent>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold">Student Portal</h2>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      isActive={location.pathname === item.path}
                      onClick={() => navigate(item.path)}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </div>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mx-auto max-w-4xl">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
