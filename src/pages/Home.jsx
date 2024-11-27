import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClickTest = () => {
    isAuthenticated
      ? navigate("/test-page")
      : Swal.fire({
          icon: "info",
          title: "로그인 후 이용 가능합니다.",
          text: "로그인 하시겠습니까?",
          showCancelButton: true,
          confirmButtonText: "예",
          cancelButtonText: "아니오",
          confirmButtonColor: "rgb(255, 164, 164)",
          cancelButtonColor: "rgb(255, 164, 164)",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
  };

  return (
    <div className="parent">
      <div className="compo">
        <img src="https://i.pinimg.com/originals/d7/f2/eb/d7f2eb9371a2ec79a68ebd3577a73f00.gif" />
        <button onClick={handleClickTest}>내 성격 알아보러 가기</button>
      </div>
    </div>
  );
};

export default Home;
