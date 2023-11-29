import { useDispatch } from "react-redux";
import "./sidebar.scss";
import { setManager } from "../../../redux/slice/appReduce";
const SidebarAdmin = () => {
  const dispatch = useDispatch();
  const next = (value) =>{
    dispatch( setManager(value))
  }
  return (
    <div className="SidebarAdmin">
      <h1>My Admin</h1>
      <ul>
        <li class="admin__menu " onClick={()=> next("product")}>
          <p> MangerProduct</p>
        </li>
        <li class="admin__menu " onClick={()=> next("user")}>
          <p> ManagerUser</p>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
