import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const [input, setInput] = useState({});
  const { loginLocal } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(input);
      loginLocal(data.accessToken);
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "warning",
        title: "로그인에 실패하였습니다.",
        text: "아이디 또는 비밀번호를 확인해주세요.",
        confirmButtonText: "확인",
      });
      console.log(error);
    }
  };

  return (
    <div className="parent">
      <div className="compo">
        <form onSubmit={handleLogin}>
          <input
            onChange={handleInputChange}
            name="id"
            placeholder="아이디"
            required
          />
          <input
            onChange={handleInputChange}
            name="password"
            placeholder="비밀번호"
            type="password"
            required
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
