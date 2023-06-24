import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import ManageProducts from "./ManageProducts";
import ManageUsers from "./ManageUsers";

const AdminPanel = () => {
  return (
    <div>
      {/* Admin Panel Navigation */}
      <nav>
        {/* Add your navigation links here */}
      </nav>

      {/* Admin Panel Header */}
      <header>
        <h1>Admin Panel</h1>
      </header>

      {/* Admin Panel Content */}

      <h4>facing complication for admin panel very sorry....i will learn this 100%.
        believe me i am fast learn
      </h4>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<ManageProducts />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        {/* Add more routes for other admin features */}
      </Routes>
    </div>
  );
};
``
export default AdminPanel;

