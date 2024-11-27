import { useState, useEffect } from "react";
import { updateProfile, getUserProfile } from "../api/auth";

const Profile = () => {
  const [input, setInput] = useState("");
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    /* 현재 로그인한 유저 정보 가져오기 */
    const fetchUser = async (token) => {
      const data = await getUserProfile(token);
      const { nickname } = data;
      setInput(nickname);
    };
    fetchUser(token);
  }, [token]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleChangeNickname = () => {
    const formData = new FormData();
    formData.append("nickname", input);

    const updateNickname = () => {
      updateProfile(formData, token);
    };
    updateNickname();
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
