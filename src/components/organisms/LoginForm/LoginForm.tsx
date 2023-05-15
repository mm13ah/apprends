import React from 'react';
import {
  EnvelopeIcon,
  LockClosedIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/20/solid';
import { Button } from '@/components/atoms';
import { TextInput } from '@/components/molecules';
import { useFormik } from 'formik';
import { useLoginMutation } from '@/graphql/generated';
import { useRouter } from 'next/router';

export const LoginForm = () => {
  const router = useRouter();
  const { mutate: login } = useLoginMutation({
    onSuccess: (data) => {
      if (data.login.access_token && data.login.refresh_token) {
        localStorage.setItem('access_token', data.login.access_token);
        localStorage.setItem('refresh_token', data.login.refresh_token);
        router.push('/users');
      }
    },
    onError: (error) => console.log(error),
  });
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (loginData) => login({ loginData }),
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
      />
      <div className="w-full flex justify-center">
        <Button
          text="Log In"
          className="mt-4"
          size="large"
          icon={
            <ArrowRightCircleIcon
              className="-mr-0.5 h-5 w-5"
              aria-hidden="true"
            />
          }
          type="submit"
        />
      </div>
    </form>
  );
};
