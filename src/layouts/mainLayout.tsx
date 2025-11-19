import { Outlet } from "react-router-dom";
// import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const MainLayout = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;