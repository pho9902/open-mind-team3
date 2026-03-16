import { STORAGE } from "@/constants";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const feedId = localStorage.getItem(STORAGE.FEED_ID);

  const isInvalid =
    !feedId ||
    feedId === "undefined" ||
    feedId === "null" ||
    isNaN(Number(feedId));

  if (isInvalid) {
    if (feedId) localStorage.removeItem(STORAGE.FEED_ID);
    return <Outlet />;
  }

  return <Navigate to={`/post/${feedId}/answer`} replace />;
};
