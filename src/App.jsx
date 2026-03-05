import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

import HomePage from "@/pages/HomePage";
import PostTest from "@/components/containers/AnswerCard/PostTest";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="answer" element={<PostTest />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
