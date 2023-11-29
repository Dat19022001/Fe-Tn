// import Helmet from "../components/helmet";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { isValidEmail } from "../../containt/validate";
// import { registerRequest } from "../services/authService";
import "../login/style.scss";
import { registerRequest } from "../../service/auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const initialValues = {
    email: "",
    password: "",
    Name: "",
    ConfirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({
    email: "",
    password: "",
    Name: "",
    ConfirmPassword: "",
  });
  const [registerError, setRegisterError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setFormValues({ ...formValues, [input.name]: input.value });
  };

  const navigate = useNavigate();

  const register = () => {
    const params = {
      name: formValues.Name,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.ConfirmPassword,
    };
    registerRequest(
      params,
      (res) => {
        if (res.data.message === "User registered successfully") {
          setRegisterError("");
          navigate("/user/login", { replace: true });
        }
        console.log(res.data);
      },
      (err) => {
        setRegisterError("Vui lòng kiểm tra lại thông tin");
      }
    );
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    const error = validate(formValues);
    if (name === "email") {
      setFormError({ ...formError, [name]: error.email });
    }
    if (name === "Name") {
      setFormError({ ...formError, [name]: error.Name });
    }
    if (name === "password") {
      setFormError({ ...formError, [name]: error.password });
    }
    if (name === "ConfirmPassword") {
      setFormError({ ...formError, [name]: error.confirmPassword });
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Vui lòng nhập email!";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Vui lòng nhập đúng email!";
    }
    if (!values.password) {
      errors.password = "Vui lòng nhập mật khẩu!";
    }
    if (!values.Name) {
      errors.Name = "Vui lòng nhập Name ";
    }
    if(!values.ConfirmPassword){
      errors.confirmPassword = 'Vui lòng xác nhận lại mật khẩu'
    }else if(formValues.password !== formValues.ConfirmPassword){
      errors.confirmPassword = "Mật khẩu không trùng khớp"

    }
    return errors;
  };
  return (
    <div className="container">
      <div className="login">
        <form>
          <ul>
            <li>
              {registerError && <p>{registerError}</p>}
              <input
                type="text"
                className="register__sdt"
                placeholder="Name"
                name="Name"
                onBlur={(e) => handleBlur(e)}
                value={formValues.Name}
                onChange={handleChange}
              />
              {formError.Name && <p>{formError.Name}</p>}
            </li>
            <li>
              <input
                type="text"
                className="register__email"
                placeholder="Email"
                name="email"
                onBlur={(e) => handleBlur(e)}
                value={formValues.email}
                onChange={handleChange}
              />
              {formError.email && <p>{formError.email}</p>}
            </li>
            <li>
              <input
                type="password"
                className="register__password"
                placeholder="Password"
                name="password"
                onBlur={(e) => handleBlur(e)}
                value={formValues.password}
                onChange={handleChange}
              />
              {formError.password && <p>{formError.password}</p>}
            </li>
            <li>
              <input
                type="password"
                className="register__hvt"
                placeholder="ConfirmPassword"
                name="ConfirmPassword"
                onBlur={(e) => handleBlur(e)}
                value={formValues.ConfirmPassword}
                onChange={handleChange}
              />
              {formError.ConfirmPassword && <p>{formError.ConfirmPassword}</p>}
            </li>
          </ul>
        </form>
        <div className="login__submit">
          <button
            disabled={
              formValues.password === "" ||
              formValues.Name === "" ||
              formValues.email === "" ||
              formValues.ConfirmPassword === ""
            }
            style={{ cursor: "pointer" }}
            className="login__submit1"
            onClick={() => register()}
          >
            Đăng Ký
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
