import React from "react";
import { IconArrows } from "../IconArrows";
import "./style.scss";

interface Props {
  hasIcon: boolean;
  hasLabel: boolean;
  textLabel: string;
  secondaryButton: "disabled" | "clicked" | "hover" | "default";
  withIcon: boolean;
  className: any;
}

export const SecondaryButton = ({
  hasIcon = true,
  hasLabel = true,
  textLabel = "Book Appointment",
  secondaryButton,
  withIcon,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`secondary-button with-icon-${withIcon} ${secondaryButton} ${className}`}
    >
      {hasLabel && <div className="book-appointment">{textLabel}</div>}

      {withIcon && (
        <>
          <>
            {hasIcon && (
              <>
                <>
                  {secondaryButton === "default" && (
                    <div className="frame">
                      <IconArrows
                        className="icon-arrows-instance"
                        iconArrows="https://c.animaapp.com/dzwd38J3/img/icon-arrows-5.svg"
                      />
                    </div>
                  )}

                  {["clicked", "disabled", "hover"].includes(
                    secondaryButton,
                  ) && (
                    <IconArrows
                      className="instance-node"
                      iconArrows={
                        secondaryButton === "hover"
                          ? "https://c.animaapp.com/dzwd38J3/img/icon-arrows-7.svg"
                          : secondaryButton === "disabled"
                            ? "https://c.animaapp.com/dzwd38J3/img/icon-arrows-8.svg"
                            : "https://c.animaapp.com/dzwd38J3/img/icon-arrows-6.svg"
                      }
                    />
                  )}
                </>
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};
