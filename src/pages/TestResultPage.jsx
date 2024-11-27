import axios from "axios";
import { useEffect, useState } from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get("http://localhost:4000/testResults");
      setResults(data);
    };
    fetchPost();
  }, []);

  return (
    <div className="grid justify-center text-center gap-4">
      <div className="font-bold text-2xl my-8">모든 결과 보기</div>
      {results.map((data) => {
        return (
          <div className="compo" key={data.id}>
            <div className="flex justify-between mx-6 ">
              <div>{data.nickname}</div>
              <div>{data.time}</div>
            </div>
            <div className="font-bold text-2xl">{data.mbti}</div>
            {mbtiDescriptions[data.mbti]}
          </div>
        );
      })}
    </div>
  );
};

export default TestResultPage;
