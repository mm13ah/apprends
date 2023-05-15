import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactElement;
  helpText?: string | React.ReactElement;
  'data-testid'?: string;
}

export const TextInput = ({
  label,
  error,
  icon,
  helpText,
  className,
  value,
  type,
  id,
  name,
  disabled,
  ...props
}: Props) => {
  const errorStyles =
    'text-red-500 ring-red-300 placeholder:text-red-300 focus:ring-red-500';
  const defaultStyles =
    'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600';
  const inputStyles = `${icon ? 'pl-10' : ''}
    ${error ? errorStyles : defaultStyles}
    block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2
    focus:ring-inset sm:text-sm sm:leading-6 disabled:cursor-not-allowed
    disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200`;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`block text-sm font-medium leading-6 ${
          error ? 'text-red-500' : `text-gray-${disabled ? '400' : '900'}`
        }`}
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
        <input
          value={value}
          type={type}
          name={name}
          id={id}
          className={inputStyles}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {error}
        </p>
      )}
      {!error &&
        helpText &&
        (typeof helpText === 'string' ? (
          <p className="mt-2 text-sm text-gray-500" id={`${id}-description`}>
            {helpText}
          </p>
        ) : (
          helpText
        ))}
    </div>
  );
};
