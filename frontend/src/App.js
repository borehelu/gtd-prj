import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import NextActions from "./pages/NextActions";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import Calendar from "./pages/Calendar";
import WaitingFor from "./pages/WaitingFor";
import Someday from "./pages/SomedayMaybe";
import References from "./pages/References";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* auth routes */}
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />

      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/next-actions" element={<NextActions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/waiting-for" element={<WaitingFor />} />
          <Route path="/someday-maybe" element={<Someday />} />
          <Route path="/references" element={<References />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
