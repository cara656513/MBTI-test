import { useState, useEffect } from "react";
import { updateProfile } from "../api/auth";
import Swal from "sweetalert2";
import useCurrentUser from "../components/useCurrentUser";

const Profile = () => {
  const [input, setInput] = useState("");
  const token = localStorage.getItem("accessToken");

  const { data, isLoading } = useCurrentUser();

  useEffect(() => {
    if (data?.nickname) {
      setInput(data.nickname);
    }
  }, [data?.nickname]);
  if (isLoading) {
    return <div>로딩중...</div>;
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleChangeNickname = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nickname", input);
    try {
      await updateProfile(formData, token);
      Swal.fire({
        icon: "success",
        title: "닉네임 변경에 성공하였습니다.",
        confirmButtonText: "확인",
      });
    } catch (error) {
      Swal.fire({
        icon: "warning",
        title: "닉네임 변경에 실패하였습니다.",
        confirmButtonText: "확인",
      });
      console.log(error);
    }
  };

  return (
    <div className="parent">
      <div className="compo">
        <div className="font-bold text-2xl my-8">프로필 수정</div>
        <form onSubmit={handleChangeNickname}>
          <input onChange={handleInputChange} value={input} />
          <button>수정</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
