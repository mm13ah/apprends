import React from 'react';

export const PasswordHelpText = () => (
  <div className="text-gray-800 mt-2">
    <p>Password must contain:</p>
    <ul className="list-disc ml-5">
      <li>8 characters or more</li>
      <li>1 uppercase character</li>
      <li>1 lowercase character</li>
      <li>1 numeric character</li>
      <li>1 special character</li>
    </ul>
  </div>
);
