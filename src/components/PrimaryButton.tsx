import React from 'react';
import './PrimaryButton.scss';

export interface PrimaryButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`primary-button primary-button--${variant} primary-button--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
