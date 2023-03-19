import { Course } from '../pages/Course';
import { Main } from '../pages/Main';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:course" element={<Course />} />
    </Routes>
  );
};
