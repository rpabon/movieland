import React from "react";
import cx from "classnames";

export const WatchLaterButton = ({ isWatchLater, onClick }) => {
  const testId = isWatchLater ? "remove-watch-later" : "watch-later";

  return (
    <button
      type="button"
      data-testid={testId}
      className={cx("btn btn-light btn-watch-later", { blue: isWatchLater })}
      onClick={onClick}
    >
      {isWatchLater ? <i className="bi bi-check"></i> : "Watch Later"}
    </button>
  );
};
