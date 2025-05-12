import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import connectToDatabase from "./lib/mongodb";
import visitModel from "./models/Project";
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const initDatabase = async () => {
      try {
        await connectToDatabase();
        // Use the model as a constructor first, then save the document
        const visit = new visitModel({ userAgent: navigator.userAgent });
        await visit.save();
      } catch (error) {
        console.error("Database connection or visit creation failed:", error);
      }
    };
    initDatabase();
  }, []);
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)};

export default App;
