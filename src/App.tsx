import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './shared/components/layout/main-layout';

import HomePage from './modules/home';
import PortfolioPage from './modules/portfolio';
import TimelinePage from './modules/timeline';
import MemoriesPage from './modules/memories';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}