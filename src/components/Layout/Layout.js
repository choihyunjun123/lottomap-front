import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <div style={{ marginTop: "100px"}}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;