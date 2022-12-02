import React from "react";
import Btn from "../atoms/button/Btn";

interface Props {
  inputValue: string,
  propsOnChange: any,
  onClickSearch: () => void,
}

function SearchForm(props: Props) {
  return (
    <div>
      <form className="searchpage_form">
        <div className="searchpage_form_wrapper">
          <input
            className="searchpage_form_input"
            type="search"
            value={props.inputValue}
            onChange={(e) => props.propsOnChange(e.target.value)}
            placeholder="検索ワードを入力"
          />
          <Btn propsOnClick={props.onClickSearch} />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;