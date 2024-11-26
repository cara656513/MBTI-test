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
    <div className="dp-flex">
      {results.map((data) => {
        return (
          <div className="compo" key={data.id}>
            {data.time}에 {data.mbti}검사결과 나옴
            {mbtiDescriptions[data.mbti]}
          </div>
        );
      })}
    </div>
  );
};

export default TestResultPage;
