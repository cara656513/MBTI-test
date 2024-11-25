import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/auth";

const Signup = () => {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>Signup</div>
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
      <button onClick={() => register(input)}>회원가입</button>
      <div>
        이미 회원이신가요? <Link to="/login">로그인</Link>
      </div>
    </>
  );
};

export default Signup;
