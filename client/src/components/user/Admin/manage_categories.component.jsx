import React from "react";
import UserLayout from "../../../hoc/user-hoc";
import ManageBrands from "./manage_brands.component";
import ManageWoods from "./manage_woods.component";

const ManageCategories = () => {
  return (
    <UserLayout>
      <ManageBrands />
      <ManageWoods />
    </UserLayout>
  );
};

export default ManageCategories;
