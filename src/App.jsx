import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import LoggedInNavbar from "./components/LoggedInNavbar";
import SignInPageSeller from "./components/SignInPageSeller";
import LoggedInPage from "./components/LoggedInPage";
import SignUpSeller from "./components/SignUpSeller";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Divider from "./components/Divider";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import AdminPanel from "./components/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar />
              <MainPage />
              <Divider/>
              <Footer />
            </>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/LoggedInPage"
            element={
              <>
                <LoggedInNavbar />
                <LoggedInPage />
                <Divider/>
                <Footer />
              </>
            }
          />
        </Route>
        <Route
          path="/SignIn"
          element={
            <>
              <SignInPageSeller />
            </>
          }
        />
        <Route
          path="/SignUp"
          element={
            <>
              <SignUpSeller />
            </>
          }
        />
        <Route
          path="/CreateProduct"
          element={
            <>
              <Navbar />
              <CreateProduct />
              <Footer />
            </>
          }
        />
      </Routes>
      <Routes>
      <Route
          path="/AdminPanel"
          element={
            <>
              <Navbar />
              <AdminPanel/>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
