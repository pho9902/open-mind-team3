import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";

import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

import { PublicRoute } from "@/components/routes/PublicRoute";
import HomePage from "@/pages/HomePage";
import ListPage from "@/pages/ListPage";
import PostTest from "@/components/containers/AnswerCard/PostTest";
import FeedPage from "@/pages/FeedPage";
import TestPage from "@/pages/TestPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-center" />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/list" element={<ListPage />} />
          <Route path="/answer" element={<PostTest />} />
          <Route path="/post/:id" element={<FeedPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
