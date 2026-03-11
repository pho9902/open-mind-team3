import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const feedId = localStorage.getItem("feedId");

  const isInvalid =
    !feedId ||
    feedId === "undefined" ||
    feedId === "null" ||
    isNaN(Number(feedId));

  if (isInvalid) {
    if (feedId) localStorage.removeItem("feedId");
    return <Outlet />;
  }

  return <Navigate to={`/post/${feedId}/answer`} replace />;
};
