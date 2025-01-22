import { BrowserRouter, Route, Routes } from "react-router";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Blog from "./pages/blog";
import Homepage from "./pages/Homepage";
import Fullblog from "./pages/Fullblog";
import WriteBlog from "./pages/Writeblog";
import Profile from "./pages/profile";
import AboutUs from "./pages/Aboutus";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route element={<ProtectedRoute></ProtectedRoute>}>
          <Route path="/blog/" element={<Blog />} />
          <Route path="/fullblog/:id" element={<Fullblog />} />
          <Route path="/writeblog" element={<WriteBlog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
