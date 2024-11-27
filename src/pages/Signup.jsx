import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import Swal from "sweetalert2";

const Signup = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(input);
      Swal.fire({
        icon: "success",
        title: "회원 가입에 성공하였습니다.",
        confirmButtonText: "확인",
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "warning",
        title: "회원 가입에 실패하였습니다.",
        confirmButtonText: "확인",
      });
      console.log(error);
    }
  };

  return (
    <div className="parent">
      <div className="compo">
        <form onSubmit={handleRegister}>
          <input
            name="id"
            onChange={handleInputChange}
            placeholder="아이디"
            required
          />
          <input
            name="password"
            onChange={handleInputChange}
            placeholder="비밀번호"
            type="password"
            required
          />
          <input
            name="nickname"
            onChange={handleInputChange}
            placeholder="닉네임"
            required
          />
          <button>회원가입</button>
        </form>
        <div>
          이미 회원이신가요?
          <Link to="/login" className="link">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
