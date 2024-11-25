import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logoutLocal } = useContext(AuthContext);

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logoutLocal();
      Navigate("/");
    }
  };
  return (
    <div className="flex justify-around bg-rose-200">
      <Link to="/">홈</Link>
      {isAuthenticated ? (
        <>
          <Link to="/profile">마이페이지</Link>
          <Link to="/test-page">테스트</Link>
          <Link to="/test-result">결과보기</Link>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </>
      )}
    </div>
  );
};

export default Header;
