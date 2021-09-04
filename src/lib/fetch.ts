const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export const fetchData = async (
  path = "/",
  parameters = ""
): Promise<unknown> => {
  if (YOUTUBE_API_KEY === undefined) {
    return;
  }
  if (parameters !== "") {
    parameters = "&" + parameters;
  }

  const response = await window.fetch(
    YOUTUBE_API_URL + path + `?key=${YOUTUBE_API_KEY}` + parameters
  );
  return response.json();
};
