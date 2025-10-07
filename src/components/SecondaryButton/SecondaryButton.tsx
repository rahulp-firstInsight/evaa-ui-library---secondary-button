import React from "react";
import { IconArrows } from "../IconArrows";
import "./SecondaryButton.scss";

interface SecondaryButtonProps {
  hasIcon?: boolean;
  hasLabel?: boolean;
  textLabel?: string;
  secondaryButton: "disabled" | "clicked" | "hover" | "default";
  withIcon?: boolean;
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  hasIcon = true,
  hasLabel = true,
  textLabel = "Book Appointment",
  secondaryButton,
  withIcon = false,
  className = "",
}) => {
  return (
    <div
      className={`secondary-button with-icon-${withIcon} ${secondaryButton} ${className}`}
    >
      {hasLabel && <div className="book-appointment">{textLabel}</div>}

      {withIcon && hasIcon && (
        <>
          {secondaryButton === "default" && (
            <div className="frame">
              <IconArrows
                className="icon-arrows-instance"
                iconArrows="https://c.animaapp.com/MbncmwNc/img/icon-arrows-5.svg"
              />
            </div>
          )}

          {["clicked", "disabled", "hover"].includes(secondaryButton) && (
            <IconArrows
              className="instance-node"
              iconArrows={
                secondaryButton === "hover"
                  ? "https://c.animaapp.com/MbncmwNc/img/icon-arrows-7.svg"
                  : secondaryButton === "disabled"
                    ? "https://c.animaapp.com/MbncmwNc/img/icon-arrows-8.svg"
                    : "https://c.animaapp.com/MbncmwNc/img/icon-arrows-6.svg"
              }
            />
          )}
        </>
      )}
    </div>
  );
};

export default SecondaryButton;
