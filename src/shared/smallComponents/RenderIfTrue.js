import React from 'react';

export default function({condition = true, children}) {
  if (condition) return children;

  return null;
}
