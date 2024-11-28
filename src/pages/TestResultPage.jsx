import { mbtiDescriptions } from "../utils/mbtiCalculator";
import jsonResultsApi from "../api/dbjson";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useCurrentUser from "../components/useCurrentUser";

const TestResultPage = () => {
  const queryClient = useQueryClient();
  //유저 정보 가져오기
  const { data: userInfo, isLoading: userIsLoading } = useCurrentUser();

  //결과들 다 가져오기
  const fetchPost = async () => {
    const { data } = await jsonResultsApi.get();
    return data;
  };

  const { data: results, isLoading } = useQuery({
    queryKey: ["results"],
    queryFn: fetchPost,
  });

  //삭제 버튼 눌렀을때
  const deleteResult = async (resultId) => {
    await jsonResultsApi.delete(`/${resultId}`);
  };

  const { mutate } = useMutation({
    mutationFn: deleteResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["results"]);
    },
  });

  //비공개 버튼 눌렀을때
  const visiblizeResult = async (resultId) => {
    const { data: result } = await jsonResultsApi.get(`/${resultId}`);
    await jsonResultsApi.patch(`/${resultId}`, {
      visibility: !result.visibility,
    });
  };

  const { mutate: visibleMutate } = useMutation({
    mutationFn: visiblizeResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["results"]);
    },
  });

  //유저,테스트결과 isloading if문
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (userIsLoading) {
    return <div>Loading...</div>;
  }

  //결과 필터
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
                <button onClick={() => visibleMutate(data.id)}>
                  {data.visibility ? "비공개" : "공개"}
                </button>
                <button onClick={() => mutate(data.id)}>삭제</button>
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
