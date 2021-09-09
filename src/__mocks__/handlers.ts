import { rest } from "msw";

export const handlers = [
  rest.get("https://www.googleapis.com/youtube/v3/videos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        kind: "youtube#videoListResponse",
        items: [
          {
            kind: "youtube#video",
            id: "n1K1jg2Swa4",
            snippet: {
              publishedAt: "2021-09-01T00:00:00Z",
              title: "モック動画タイトル1",
              description: "モック動画説明1",
              thumbnails: {
                medium: {
                  url: "https://i.ytimg.com/vi/n1KYjg2SwbA/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
              },
              channelTitle: "モックチャンネル1",
            },
            statistics: {
              viewCount: "1000000",
            },
          },
          {
            kind: "youtube#video",
            id: "naKYj4a3wb1",
            snippet: {
              publishedAt: "2021-09-31T12:34:56Z",
              title: "モック動画タイトル2",
              description: "モック動画説明2",
              thumbnails: {
                medium: {
                  url: "https://i.ytimg.com/vi/n1KYjg2SwbA/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
              },
              channelTitle: "モックチャンネル2",
            },
            statistics: {
              viewCount: "1000",
            },
          },
        ],
      })
    );
  }),
];
