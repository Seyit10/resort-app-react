import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Router>
        <AppRoutes />
    </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
