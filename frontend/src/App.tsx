import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import CoursePage from "views/course/CoursePage";  // Import the new component
import { useAuthContext } from "context/LoginContext";

const App = () => {
  const { loggedIn } = useAuthContext();

  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route
        path="/"
        element={loggedIn ? <AdminLayout /> : <AuthLayout />}
      />
      <Route path="/course" element={<CoursePage />} />{" "}
    </Routes>
  );
};

export default App;
