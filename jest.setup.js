import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";

import { server } from "./src/__mocks__/server";

process.env.NEXT_PUBLIC_YOUTUBE_API_KEY =
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
