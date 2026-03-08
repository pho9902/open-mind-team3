import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";

import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

import HomePage from "@/pages/HomePage";
import ListPage from "@/pages/ListPage";
import PostTest from "@/components/containers/AnswerCard/PostTest";
import FeedPage from "@/pages/FeedPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-center" />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/answer" element={<PostTest />} />
          {/* Todo: /post/${id} 라우팅 변경 필요 */}
          <Route path="/post" element={<FeedPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
