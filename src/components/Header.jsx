import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logoutLocal } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logoutLocal();
      navigate("/");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="w-28"
          src="https://i.namu.wiki/i/YA4wj6ErRrLYcSIoUdJke5cCNQRvudiIp2TujsaHzLHFZwPezE2MqBbZwALYkzT-sedVSdIX_oC8BlgZvITH6BLCnVZdnTBS_hgi4BDgNFxpTQ7icT7Do4Z9VLUU3IxANOt4mhoSsfap5tsCJSbtOA.webp"
        />
      </Link>
      {isAuthenticated ? (
        <div>
          <Link to="/profile" className="link">
            마이페이지
          </Link>
          <Link to="/test-page" className="link">
            테스트
          </Link>
          <Link to="/test-result" className="link">
            결과보기
          </Link>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <Link to="/login" className="link">
            로그인
          </Link>
          <Link to="/signup" className="link">
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
