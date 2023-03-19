import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            window.localStorage.setItem("payment", "true");
            navigate("/dashboard");
        }, 1000);
    }, []);
    return (
        <div className="paymentSuccess">
            <h1>Payment Successful.</h1>;
        </div>
    );
};

export default PaymentSuccess;
