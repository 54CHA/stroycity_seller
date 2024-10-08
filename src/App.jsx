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
import ProductList from "./components/ProductList";
import AddImages from "./components/AddImages";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <MainPage />
              <Divider />
              <Footer />
            </>
          }
        />
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
          path="/AdminPanel"
          element={
            <>
              <Navbar />
              <AdminPanel />
              <Footer />
            </>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/Store"
            element={
              <>
                <LoggedInNavbar />
                <LoggedInPage />
                <Divider />
                <Footer />
              </>
            }
          />
          <Route
            path="/LoggedInPage"
            element={
              <>
                <LoggedInNavbar />
                <LoggedInPage />
                <Divider />
                <Footer />
              </>
            }
          />
          <Route
            path="/ProductList/CreateProduct"
            element={
              <>
                <LoggedInNavbar />
                <CreateProduct />
                <Footer />
              </>
            }
          />
          <Route
            path="/Photo/:createdItemId"
            element={
              <>
                <LoggedInNavbar />
                <AddImages />
                <Footer />
              </>
            }
          />
          <Route
            path="/ProductList"
            element={
              <>
                <LoggedInNavbar />
                <ProductList />
                <Footer />
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
