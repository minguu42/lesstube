import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import SearchIcon from "components/common/icons/SearchIcon";
import styles from "./styles.module.scss";
import {
  isSearchListResponse,
  newVideosFromSearch,
  videosState,
} from "models/video";
import { fetchData } from "lib/fetch";

type Props = {
  keyword: string;
  handleKeywordChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: (e: React.SyntheticEvent) => void;
};

export const SearchBar = ({
  keyword,
  handleKeywordChange,
  handleSubmit,
}: Props): JSX.Element => (
  <form onSubmit={handleSubmit} className={styles.container}>
    <input
      type="text"
      title="検索キーワード"
      placeholder="検索"
      value={keyword}
      onChange={handleKeywordChange}
      required
      className={styles.input}
    />
    <button type="submit" aria-label="検索" className={styles.button}>
      <SearchIcon color="#080a0f" />
    </button>
  </form>
);

const SearchBarContainer = (): JSX.Element => {
  const [keyword, setKeyword] = useState("");
  const setVideos = useSetRecoilState(videosState);

  const handleKeywordChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("Submit");

    fetchData(
      "/search",
      `part=snippet&maxResults=12&q=${keyword}&regionCode=JP&type=video`
    )
      .then((data) => {
        console.log(data);
        if (isSearchListResponse(data)) {
          console.log("2");
          setVideos(newVideosFromSearch(data));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SearchBar
      keyword={keyword}
      handleKeywordChange={handleKeywordChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchBarContainer;
