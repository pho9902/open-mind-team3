import instance from "./instance";

export async function instanceTest() {
  return await instance.get("subjects/");
}
