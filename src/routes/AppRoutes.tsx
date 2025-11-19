import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import Home from '../pages/home';
import Quiz from '../pages/quiz';
import ScrollToTop from '../components/scrollToTop';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;