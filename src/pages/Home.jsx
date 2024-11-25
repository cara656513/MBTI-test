const Home = () => {
  const handleClickTest = () => {
    alert("먼저 로그인 해 주세요!");
  };
  return (
    <div>
      Home
      <button onClick={handleClickTest}>내 성격 알아보러 가기</button>
    </div>
  );
};

export default Home;
