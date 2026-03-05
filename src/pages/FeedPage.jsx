import FeedHeader from "@/components/common/FeedHeader/FeedHeader";
import FeedProfile from "@/components/common/FeedHeader/FeedProfile";
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
