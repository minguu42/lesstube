import React, { useState } from "react";

import SearchIcon from "components/common/icons/SearchIcon";
import styles from "./styles.module.scss";

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
    <button type="submit" className={styles.button}>
      <SearchIcon color="#080a0f" />
    </button>
  </form>
);

const SearchBarContainer = (): JSX.Element => {
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    alert(keyword);
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
