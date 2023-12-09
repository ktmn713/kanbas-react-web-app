import Signin from "../Kanbas/users/signin";
import Account from "../Kanbas/users/account";
import UserTable from "../Kanbas/users/table";
import Signup from "../Kanbas/users/signup";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import { Link, useLocation } from "react-router-dom";
import ProjectNav from "./ProjectNav";


function Project() {
    const { pathname } = useLocation();
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <Nav />     
                </div>
                <div className="row">
                    <div className="col-3">
                        <ProjectNav />
                    </div>
                    <div className="col-10">
                        <Routes>
                            <Route path="/admin/users" element={<UserTable />} />
                            <Route path="/" element={<Navigate to="/project/home" />} />
                            <Route path="/signin" element={<Signin />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/account" element={<Account />} />
                            <Route path="/account/:id" element={<Account />} />
                        </Routes>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Project;