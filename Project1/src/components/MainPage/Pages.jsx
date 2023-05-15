import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./not_found/NotFound";
import DashBoard from "./dashboard/dashBoard";
import Infor from "./Infor_page/inforPage";
import ThietBi from "./ThietBi/ThietBi";
import DetailThietbi from "./ThietBi/detail/detailThietbi";
import CreateThietbi from "./ThietBi/create/createThietbi";
import EditThietBi from "./ThietBi/edit/editThietBi";
import DichVu from "./DichVu/dichvu";
import DetailDichvu from "./DichVu/detail/detailDichVu";
import Createdichvu from "./DichVu/create/createDichVu";
import Editdichvu from "./DichVu/edit/editDichVu";
import CapSo from "./capso/Capso";
import DetailCapSo from "./capso/detail/detailCapSo";
import Capsomoi from "./capso/capsomoi/capsomoi";
import Baocao from "./baocao/baocao";
import Quanlyvaitro from "./caidat/quanlyvaitro";
import Createvaitro from "./caidat/create/createvaitro";
import EditVaitro from "./caidat/edit/editvaitro";
import Quanlytaikhoan from "./caidat/quanlytaikhoan";
import Createtaikhoan from "./caidat/create/createtaikhoan";
import Edittaikhoan from "./caidat/edit/edittaikhoan";
import Nhatky from "./caidat/nhatkynguoidung";

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Infor />} />
            <Route path="/dash" element={<DashBoard />} />
            <Route path="/thietbi" element={<ThietBi />} />
            <Route path="/thietbi/:id" element={<DetailThietbi />} />
            <Route path="/create_thietbi" element={<CreateThietbi />} />
            <Route path="/update/:id" element={<EditThietBi />} />
            <Route path="/dichvu" element={<DichVu />} />
            <Route path="/dichvu/:id" element={<DetailDichvu />} />
            <Route path="/create_dichvu" element={<Createdichvu />} />
            <Route path="/update/dichvu/:id" element={<Editdichvu />} />
            <Route path="/capso" element={<CapSo />} />
            <Route path="/capso/:id" element={<DetailCapSo />} />
            <Route path="/capso/create" element={<Capsomoi />} />
            <Route path="/baocao" element={<Baocao />} />
            <Route path="/caidat/quanly" element={<Quanlyvaitro />} />

            <Route path="/caidat/nhatky" element={<Nhatky />} />

            <Route
                path="/caidat/quanly/create/vaitro"
                element={<Createvaitro />}
            />
            <Route
                path="/caidat/quanly/create/taikhoan"
                element={<Createtaikhoan />}
            />
            <Route path="/caidat/quanly/vaitro/:id" element={<EditVaitro />} />
            <Route
                path="/caidat/quanly/taikhoan/:id"
                element={<Edittaikhoan />}
            />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Pages;
