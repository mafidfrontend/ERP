import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoginPage from "./components/pages/Login";
import HomePage from "./components/pages/HomePage";
import ProtectedRoute from "./components/pages/ProtectedRoute";
import GroupPage from "./components/pages/GroupPage";
import PaymentsPage from "./components/pages/PaymentsPage";
import RankingPage from "./components/pages/RankingPage";
import ProfilePage from "./components/pages/ProfilePage";
import ShopPage from "./components/pages/ShopPage";
import StatsPage from "./components/pages/StatsPage";
import SettingsPage from "./components/pages/SettingsPage";
import Layout from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={<Navigate to="/home" />}
          />
          <Route
            path="/home"
            element={<ProtectedRoute><Layout><HomePage /></Layout></ProtectedRoute>}
          />
          <Route
            path="/group"
            element={<ProtectedRoute><Layout><GroupPage /></Layout></ProtectedRoute>}
          />
          <Route
            path="/payments"
            element={<ProtectedRoute><Layout><PaymentsPage /></Layout></ProtectedRoute>}
          />
          <Route
            path="/ranking"
            element={<ProtectedRoute><Layout><RankingPage /></Layout></ProtectedRoute>}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute><Layout><ProfilePage /></Layout></ProtectedRoute>}
          />
          <Route
            path="/shop"
            element={<ProtectedRoute><Layout><ShopPage /></Layout></ProtectedRoute>}
          />
          <Route
            path="/stats"
            element={<ProtectedRoute><Layout><StatsPage /></Layout></ProtectedRoute>}
          />
          <Route
            path="/settings"
            element={<ProtectedRoute><Layout><SettingsPage /></Layout></ProtectedRoute>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
