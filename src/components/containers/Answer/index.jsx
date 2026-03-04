import { useEffect } from "react";
import { instanceTest } from "../../../apis/answer";

export default function Answer() {
  useEffect(() => {
    instanceTest()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return <div>answer</div>;
}
