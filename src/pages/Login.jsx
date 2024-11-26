import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [input, setInput] = useState({});
  const { loginLocal } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await login(input);
    if (data.success) {
      loginLocal(data.accessToken);
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="parent">
      <div className="compo">
        <form onSubmit={handleLogin}>
          <input onChange={handleInputChange} name="id" placeholder="아이디" />
          <input
            onChange={handleInputChange}
            name="password"
            placeholder="비밀번호"
            type="password"
          />
          <button type="submit">로그인</button>
        </form>
        <div>
          계정이 없으신가요?
          <Link to="/signup" className="link">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
