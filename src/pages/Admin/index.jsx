// import UpdateImage from "../../components/update"

import { useSelector } from "react-redux";
import Content from "./conponents/content";
import SidebarAdmin from "./conponents/sidebar";
import User from "./conponents/user";
import "./style.scss";

const Admin = () => {
  const { manager } = useSelector((states) => states.appReduce);
  return (
    <div className="admin container">
      <SidebarAdmin />
      <div style={{ width: "100%" }}>
        {manager === "product" ? <Content /> : <User />}
      </div>
    </div>
  );
};

export default Admin;
