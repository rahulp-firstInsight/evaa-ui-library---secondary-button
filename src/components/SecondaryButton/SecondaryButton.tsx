import React from "react";
import "./SecondaryButton.scss";

interface SecondaryButtonProps {
  label?: string;
  variant?: "default" | "hover" | "clicked" | "disabled";
  withIcon?: boolean;
  onClick?: () => void;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label = "Book Appointment",
  variant = "default",
  withIcon = false,
  onClick,
}) => {
  const getIconSrc = () => {
    switch (variant) {
      case "hover":
        return "https://c.animaapp.com/vtIwxNoi/img/icon-arrows-7.svg";
      case "disabled":
        return "https://c.animaapp.com/vtIwxNoi/img/icon-arrows-8.svg";
      case "clicked":
        return "https://c.animaapp.com/vtIwxNoi/img/icon-arrows-6.svg";
      default:
        return "https://c.animaapp.com/vtIwxNoi/img/icon-arrows-5.svg";
    }
  };

  return (
    <button
      className={`secondary-button secondary-button--${variant} ${withIcon ? "secondary-button--with-icon" : ""}`}
      onClick={onClick}
      disabled={variant === "disabled"}
    >
      <span className="secondary-button__label">{label}</span>
      {withIcon && (
        <span className="secondary-button__icon">
          <img
            src={getIconSrc()}
            alt="Arrow icon"
            className="secondary-button__icon-image"
          />
        </span>
      )}
    </button>
  );
};
