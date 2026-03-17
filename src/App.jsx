import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";

import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

import { PublicRoute } from "@/components/routes/PublicRoute";
import HomePage from "@/pages/HomePage";
import ListPage from "@/pages/ListPage/ListPage";
import FeedPage from "@/pages/FeedPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-center" containerStyle={{ bottom: 60 }} />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/list" element={<ListPage />} />
          <Route path="/post/:subjectId/*" element={<FeedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
