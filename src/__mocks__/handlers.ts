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
              title: "テストタイトル1",
              description: "テスト説明1",
              thumbnails: {
                medium: {
                  url: "https://i.ytimg.com/vi/n1KYjg2SwbA/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
              },
              channelTitle: "テストチャンネル1",
            },
            statistics: {
              viewCount: "100",
            },
          },
          {
            kind: "youtube#video",
            id: "naKYj4a3wb1",
            snippet: {
              publishedAt: "2021-09-30T00:00:00Z",
              title: "テストタイトル2",
              description: "テスト説明2",
              thumbnails: {
                medium: {
                  url: "https://i.ytimg.com/vi/n1KYjg2SwbA/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
              },
              channelTitle: "テストチャンネル2",
            },
            statistics: {
              viewCount: "123456789",
            },
          },
        ],
      })
    );
  }),
  rest.get("https://www.googleapis.com/youtube/v3/search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        kind: "youtube#videoListResponse",
        items: [
          {
            kind: "youtube#video",
            id: {
              videoId: "n1K1jg2Swa4",
            },
            snippet: {
              publishedAt: "2021-01-01T00:00:00Z",
              title: "テストタイトル3",
              description: "テスト説明3",
              thumbnails: {
                medium: {
                  url: "https://i.ytimg.com/vi/n1KYjg2SwbA/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
              },
              channelTitle: "テストチャンネル3",
            },
          },
          {
            kind: "youtube#video",
            id: {
              videoId: "naKYj4a3wb1",
            },
            snippet: {
              publishedAt: "2021-12-31T12:34:56Z",
              title: "テストタイトル4",
              description: "テスト説明4",
              thumbnails: {
                medium: {
                  url: "https://i.ytimg.com/vi/n1KYjg2SwbA/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
              },
              channelTitle: "テストチャンネル4",
            },
          },
        ],
      })
    );
  }),
];
