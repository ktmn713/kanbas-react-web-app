import Signin from "../Kanbas/users/signin";
import Account from "../Kanbas/users/account";
import UserTable from "../Kanbas/users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";


function Project() {
    return (
        <div className="row">
            <div className="col-2">
                <Nav />
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/:id" element={<Account />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;