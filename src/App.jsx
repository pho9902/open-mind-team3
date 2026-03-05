import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

import { PublicRoute } from "@/components/routes/PublicRoute";
import HomePage from "@/pages/HomePage";
import PostTest from "@/components/containers/AnswerCard/PostTest";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* 로컬스토리지가 없는 경우만 진입 가능한 라우트 입니다. */}
          <Route element={<PublicRoute />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="answer" element={<PostTest />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
