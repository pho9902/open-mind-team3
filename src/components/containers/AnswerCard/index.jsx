import { createAnswer } from "@/apis/answer";

export default function AnswerCard({ questionId, getQuestionsList }) {
  function handleClickCreateButton(questionId, data) {
    createAnswer(questionId, data)
      .then((res) => getQuestionsList())
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <div>profile Image</div>
      <div>
        <div>name</div>
        <div>input</div>
        <button
          onClick={() =>
            handleClickCreateButton(questionId, {
              content: "testtest",
              isRejected: false,
            })
          }
        >
          button
        </button>
      </div>
    </div>
  );
}
