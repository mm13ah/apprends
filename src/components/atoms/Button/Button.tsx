import React from 'react';

type Props = {
  text: string;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactElement;
  type?: 'button' | 'submit' | 'reset';
  'data-testid'?: string;
} & Omit<React.HTMLProps<HTMLButtonElement>, 'size'>;

export const Button = ({
  text,
  size = 'medium',
  icon,
  className,
  type,
  ...props
}: Props) => {
  let sizeStyles = 'px-3.5 py-2.5 gap-x-2';
  switch (size) {
    case 'small':
      sizeStyles = 'px-2.5 py-1.5 gap-x-1.5';
      break;
    case 'large':
      sizeStyles = 'px-3.5 py-2.5 gap-x-2';
      break;
    case 'medium':
    default:
      sizeStyles = 'px-3 py-2 gap-x-1.5';
      break;
  }
  const buttonStyles = `${sizeStyles}
  inline-flex items-center rounded-md bg-indigo-600 text-sm font-semibold text-white
  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
  focus-visible:outline-offset-2 focus-visible:outline-indigo-600`;

  return (
    <button
      type={type ?? 'button'}
      className={`${buttonStyles} ${className || ''}`}
      {...props}
    >
      {text}
      {icon}
    </button>
  );
};
