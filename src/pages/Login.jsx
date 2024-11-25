import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({});
  const { loginLocal } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (input) => {
    // const data = login(input);
    const response = await axios.post(
      `https://moneyfulpublicpolicy.co.kr/login`,
      input
    );
    const data = response.data;
    if (data.success) {
      loginLocal(data.accessToken);
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
      <div>Login</div>
      <input onChange={handleInputChange} name="id" placeholder="아이디" />
      <input
        onChange={handleInputChange}
        name="password"
        placeholder="비밀번호"
      />
      <button
        onClick={() => {
          handleLogin(input);
        }}
      >
        로그인
      </button>
      <div>
        계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </div>
    </>
  );
};

export default Login;
