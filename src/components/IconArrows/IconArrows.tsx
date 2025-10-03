import React from "react";
import "./style.scss";

interface Props {
  className: any;
  iconArrows: string;
}

export const IconArrows = ({
  className,
  iconArrows = "https://c.animaapp.com/dzwd38J3/img/icon-arrows-4.svg",
}: Props): JSX.Element => {
  return (
    <img
      className={`icon-arrows ${className}`}
      alt="Icon arrows"
      src={iconArrows}
    />
  );
};
