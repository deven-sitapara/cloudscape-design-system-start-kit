import fileJsonData from "../../data/file.json";

export async function GET() {
  return Response.json({ fileJsonData });
}
