import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

import { registerSW } from 'virtual:pwa-register';
registerSW({ immediate: true }); // This will register your service worker

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>,
)
