const Home = () => {
  const handleClickTest = () => {
    alert("먼저 로그인 해 주세요!");
  };
  return (
    <div className="parent">
      <div className="compo">
        어서오세요! 환영합니다.
        <button onClick={handleClickTest}>내 성격 알아보러 가기</button>
      </div>
    </div>
  );
};

export default Home;
