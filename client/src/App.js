import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./user/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import DashboardSeller from "./user/DashboardSeller";
import NewHotel from "./hotels/NewHotel";
import ConnectPayouts from "./payments/ConnectPayouts";
import EditHotel from "./hotels/EditHotel";
import ViewHotel from "./hotels/ViewHotel";
import PaymentSuccess from "./payments/PaymentSuccess";
import SearchResults from "./hotels/SearchResults";

function App() {
    return (
        <div className="App">
            <ToastContainer position="top-center" className="toast" />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute redirectTo={"/login"}>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dashboard/seller"
                    element={
                        <PrivateRoute redirectTo={"/login"}>
                            <DashboardSeller />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/connect-payouts"
                    element={
                        <PrivateRoute redirectTo={"/login"}>
                            <ConnectPayouts />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/hotels/new"
                    element={
                        <PrivateRoute redirectTo={"/login"}>
                            <NewHotel />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/hotel/edit/:hotelId"
                    element={
                        <PrivateRoute redirectTo={"/login"}>
                            <EditHotel />
                        </PrivateRoute>
                    }
                />
                <Route path="/hotel/:hotelId" element={<ViewHotel />} />
                <Route
                    path="/hotel/payment-success"
                    element={
                        <PrivateRoute redirectTo={"/login"}>
                            <PaymentSuccess />
                        </PrivateRoute>
                    }
                />
                <Route path="/search-result" element={<SearchResults />} />
            </Routes>
        </div>
    );
}

export default App;
