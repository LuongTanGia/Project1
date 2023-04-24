import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./not_found/NotFound";
import DashBoard from "./dashboard/dashBoard";
import Infor from "./Infor_page/inforPage";
import ThietBi from "./ThietBi/ThietBi";
import DetailThietbi from "./ThietBi/detail/detailThietbi";
import CreateThietbi from "./ThietBi/create/createThietbi";
import EditThietBi from "./ThietBi/edit/editThietBi";

function Pages() {
    return (
        <Routes>
            {/* <Route path="/" element={<H />} /> */}
            <Route path="/" element={<Infor />} />
            <Route path="/dash" element={<DashBoard />} />
            <Route path="/thietbi" element={<ThietBi />} />
            <Route path="/thietbi/:id" element={<DetailThietbi />} />
            <Route path="/create_thietbi" element={<CreateThietbi />} />
            <Route path="/update/:id" element={<EditThietBi />} />

            {/* <Route
                path="/register"
                element={isLogged ? <NotFound /> : <Register />}
            />
            <Route
                path="/category"
                element={isAdmin ? <Categories /> : <NotFound />}
            />
            <Route
                path="/create_product"
                element={isAdmin ? <CreateProduct /> : <NotFound />}
            />
            <Route
                path="/edit_product/:id"
                element={isAdmin ? <CreateProduct /> : <NotFound />}
            />
            <Route
                path="/history"
                element={isLogged ? <OrderHistory /> : <NotFound />}
            />
            <Route
                path="/history/:id"
                element={isLogged ? <OrderDetails /> : <NotFound />}
            />
            <Route path="/cart" element={<Cart />} />*/}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Pages;
