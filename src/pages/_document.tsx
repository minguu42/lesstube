import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          {/* 開発中に検索エンジンにインデックスされるのを防ぐ */}
          <meta name="robots" content="noindex,nofollow" />

          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/icon32.png" sizes="32x32" type="image/png" />
          <link
            rel="icon"
            href="/icon192.png"
            sizes="192x192"
            type="image/png"
          />
          <link rel="apple-touch-icon-precomposed" href="/icon180.png" />
          {/*<meta name="msapplication-TileImage" content="画像 URL" />*/}
          {/*<meta name="msapplication-TileColor" content="カラーコード（例：#F89174）" />*/}

          {/*<meta property="og:url" content="ページ URL" />*/}
          {/*<meta property="og:title" content="タイトル" />*/}
          {/*<meta property="og:type" content="website" />*/}
          {/*<meta property="og:description" content="概要"/>*/}
          {/*<meta property="og:image" content="/ogp_image.png" />*/}
          {/*<meta property="og:site_name" content="サイト名" />*/}
          {/*<meta property="og:locale" content="ja_JP" />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
