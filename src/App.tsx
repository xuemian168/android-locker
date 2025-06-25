import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from 'react-helmet-async';
import { Language } from './data/translations';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path=":lang/" element={<Index />} />
            <Route path="/zh/" element={<Index forcedLanguage="zh" />} />
            <Route path="/en/" element={<Index forcedLanguage="en" />} />
            <Route path="/hi/" element={<Index forcedLanguage="hi" />} />
            <Route path="/zh/*" element={<NotFound />} />
            <Route path="/en/*" element={<NotFound />} />
            <Route path="/hi/*" element={<NotFound />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
