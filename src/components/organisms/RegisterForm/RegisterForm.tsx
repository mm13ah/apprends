import React from 'react';
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid';
import { Button, PasswordHelpText } from '@/components/atoms';
import { TextInput } from '@/components/molecules';
import { useFormik } from 'formik';

export const RegisterForm = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {},
  });
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={values.email}
        error={errors.email}
        onChange={handleChange}
        label="Email"
        icon={
          <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        }
        type="email"
        id="email"
        name="email"
        className="my-4"
      />
      <TextInput
        value={values.password}
        error={errors.password}
        onChange={handleChange}
        label="Password"
        icon={
          <LockClosedIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        }
        type="password"
        id="password"
        name="password"
        className="my-4"
        helpText={<PasswordHelpText />}
      />
      <div className="w-full flex justify-center">
        <Button
          text="Register"
          className="mt-4"
          size="large"
          icon={<UserPlusIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />}
          type="submit"
        />
      </div>
    </form>
  );
};
