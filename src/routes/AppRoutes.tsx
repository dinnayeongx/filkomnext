import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/home";
import Quiz from "../pages/quiz";
import Path from "../pages/learnPath";
import Career from "../pages/career";
import ScrollToTop from "../components/scrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/career" element={<Career isArticlePage={false} />} />
          <Route path="/article" element={<Career isArticlePage={true} />} />
          <Route path="pathLearn" element={<Path />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
