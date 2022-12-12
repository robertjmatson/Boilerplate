import { Route, Routes } from "react-router-dom"
import { routes as appRoutes } from "./utils/routes";
import { ThemeProvider, CssBaseline, Switch } from "@mui/material";
import { theme } from './design/theme';
import Layout from './design/layout';
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './utils/react-query/queryClient'


export default function App() { 
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>

            <Layout>

              <Routes>
                {appRoutes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider> 
    )
    
  }



