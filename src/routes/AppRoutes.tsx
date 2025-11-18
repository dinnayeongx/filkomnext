import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<HomePage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;