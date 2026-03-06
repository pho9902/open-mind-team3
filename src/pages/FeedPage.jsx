import FeedHeader from "@/components/containers/Question/FeedHeader/FeedHeader";
import FeedProfile from "@/components/containers/Question/FeedHeader/FeedProfile";
import QuestionList from "@/components/containers/Question/QuestionList";

export default function FeedPage() {
  return (
    <div>
      <FeedHeader />
      <FeedProfile />
      <QuestionList />
    </div>
  );
}
