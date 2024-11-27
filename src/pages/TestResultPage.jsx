import axios from "axios";
import { useEffect, useState } from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { getUserProfile } from "../api/auth";

const TestResultPage = () => {
  const [results, setResults] = useState([]);
  const [userInfo, setUserInfo] = useState("");

  const fetchPost = async () => {
    const { data } = await axios.get("http://localhost:4000/testResults");
    setResults(data);
  };

  useEffect(() => {
    //results에 테스트 결과들을 담기
    fetchPost();

    //userInfo에 로그인한 유저 정보를 담기
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      const data = await getUserProfile(token);
      setUserInfo(data);
    };
    fetchUser();
  }, []);

  //삭제 버튼 눌렀을때
  const onClickDeleteButtonHandler = (resultId) => {
    axios.delete(`http://localhost:4000/testResults/${resultId}`);
    fetchPost();
  };

  //비공개 버튼 눌렀을때
  const onClickVisibleButtonHandler = (resultId, visibility) => {
    axios.patch(`http://localhost:4000/testResults/${resultId}`, {
      visibility: !visibility,
    });
    fetchPost();
  };

  const filteredResult = results.filter(
    (result) => result.userId === userInfo.id || result.visibility === true
  );

  return (
    <div className="grid justify-center text-center gap-4">
      <div className="font-bold text-2xl my-8">모든 결과 보기</div>
      {filteredResult.map((data) => {
        return (
          <div className="compo" key={data.id}>
            <div className="flex justify-between mx-6 ">
              <div>{data.nickname}</div>
              <div>{data.time}</div>
            </div>
            <div className="font-bold text-2xl">{data.mbti}</div>
            {mbtiDescriptions[data.mbti]}

            {userInfo.id === data.userId ? (
              <div>
                <button
                  onClick={() =>
                    onClickVisibleButtonHandler(data.id, data.visibility)
                  }
                >
                  {data.visibility ? "비공개" : "공개"}
                </button>
                <button onClick={() => onClickDeleteButtonHandler(data.id)}>
                  삭제
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TestResultPage;
