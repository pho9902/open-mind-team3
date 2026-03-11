import { subjectApi } from "@/apis/subject";

export default function TestPage() {
  // 1. 피드 리스트 가져오기 테스트
  const handleGetList = async () => {
    try {
      const data = await subjectApi.getFeedList();
      console.log("✅ 피드 리스트 조회 성공:", data);
    } catch (err) {
      console.error("❌ 피드 리스트 조회 실패");
    }
  };

  // 2. 피드 생성 테스트
  const handleCreateFeed = async () => {
    const name = prompt("새로 만들 피드 이름을 입력하세요");
    if (!name) return;
    try {
      const data = await subjectApi.createFeed(name);
      console.log("✅ 피드 생성 성공:", data);
    } catch (err) {
      console.error("❌ 피드 생성 실패");
    }
  };

  // 3. 특정 피드 삭제 테스트 (임시 ID: 123)
  const handleDeleteFeed = async () => {
    const id = prompt("삭제할 피드 ID를 입력하세요");
    if (!id) return;
    try {
      await subjectApi.deleteFeed(id);
      console.log(`✅ ID ${id} 삭제 성공!`);
    } catch (err) {
      console.error("❌ 삭제 실패");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h1>🛠 API 통신 테스트 페이지</h1>
      <p>콘솔창(F12)을 열고 버튼을 눌러보세요.</p>

      <button onClick={handleGetList} style={btnStyle}>
        피드 리스트 조회 (GET)
      </button>

      <button
        onClick={handleCreateFeed}
        style={{ ...btnStyle, backgroundColor: "#4CAF50" }}
      >
        새 피드 생성 (POST)
      </button>

      <button
        onClick={handleDeleteFeed}
        style={{ ...btnStyle, backgroundColor: "#f44336" }}
      >
        피드 삭제 (DELETE)
      </button>

      <div style={{ marginTop: "20px", color: "#666" }}>
        * 팁: Network 탭에서 <strong>team: 23-3</strong>이 잘 붙어있는지 꼭
        확인하세요!
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  color: "#fff",
  backgroundColor: "#2196F3",
  border: "none",
  borderRadius: "5px",
};
