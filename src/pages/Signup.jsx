import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/auth";

const Signup = () => {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="parent">
      <div className="compo">
        <form onSubmit={() => register(input)}>
          <input name="id" onChange={handleInputChange} placeholder="아이디" />
          <input
            name="password"
            onChange={handleInputChange}
            placeholder="비밀번호"
          />
          <input
            name="nickname"
            onChange={handleInputChange}
            placeholder="닉네임"
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
