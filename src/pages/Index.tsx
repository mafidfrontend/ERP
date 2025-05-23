import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Calendar, User, CreditCard, Award, ShoppingCart, BarChart2, Settings } from "lucide-react";
import HomePage from '@/components/pages/HomePage';
import GroupPage from '@/components/pages/GroupPage';
import PaymentsPage from '@/components/pages/PaymentsPage';
import RankingPage from '@/components/pages/RankingPage';
import ProfilePage from '@/components/pages/ProfilePage';
import ShopPage from '@/components/pages/ShopPage';
import StatsPage from '@/components/pages/StatsPage';
import SettingsPage from '@/components/pages/SettingsPage';
import { ThemeProvider } from '@/components/ThemeProvider';
import { useTheme } from '@/hooks/useTheme';

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { theme } = useTheme();
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Welcome back!",
      description: "You have new notifications",
    });
  }, [toast]);

  const menuItems = [
    { id: "home", title: "Home", icon: <Calendar className="h-4 w-4" /> },
    { id: "group", title: "Group", icon: <User className="h-4 w-4" /> },
    { id: "payments", title: "To'lovlarim", icon: <CreditCard className="h-4 w-4" /> },
    { id: "ranking", title: "Reyting", icon: <Award className="h-4 w-4" /> },
    { id: "profile", title: "Profile", icon: <User className="h-4 w-4" /> },
    { id: "shop", title: "Shop", icon: <ShoppingCart className="h-4 w-4" /> },
    { id: "stats", title: "Ko'rsatgichlarim", icon: <BarChart2 className="h-4 w-4" /> },
    { id: "settings", title: "Settings", icon: <Settings className="h-4 w-4" /> }
  ];

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${theme}`}>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <Sidebar>
              <SidebarContent>
                <div className="px-3 py-2">
                  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    Student Portal
                  </h2>
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton 
                          isActive={activeTab === item.id}
                          onClick={() => setActiveTab(item.id)}
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
                {activeTab === "home" && <HomePage />}
                {activeTab === "group" && <GroupPage />}
                {activeTab === "payments" && <PaymentsPage />}
                {activeTab === "ranking" && <RankingPage />}
                {activeTab === "profile" && <ProfilePage />}
                {activeTab === "shop" && <ShopPage />}
                {activeTab === "stats" && <StatsPage />}
                {activeTab === "settings" && <SettingsPage />}
              </div>
            </main>
          </div>
        </SidebarProvider>
      </div>
    </ThemeProvider>
  );
};

export default Index;
