import React from "react";
import cx from "classnames";

export const StarButton = ({ isStarred, onClick }) => {
  const testId = isStarred ? "unstar-link" : "starred-link";
  const iconTestId = isStarred ? "star-fill" : undefined;

  return (
    <span className="btn-star" data-testid={testId} onClick={onClick}>
      <i
        data-testid={iconTestId}
        className={cx("bi", {
          "bi-star-fill": isStarred,
          "bi-star": !isStarred,
        })}
      />
    </span>
  );
};
