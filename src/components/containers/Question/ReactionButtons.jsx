export default function ReactionButton({ question }) {
  return (
    <div>
      <button>좋아요 {question.like}</button>
      <button>싫어요 {question.dislike}</button>
    </div>
  );
}
