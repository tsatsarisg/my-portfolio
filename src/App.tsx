import { BrowserRouter as Router, Routes, Route } from "react-router";
import Portfolio from "./Portfolio";
import BooksPage from "./pages/BooksPage";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
    <Router basename="/my-portfolio">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
