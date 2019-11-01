import React from 'react';

const SvgComponent = props => (
  <svg
    aria-hidden="true"
    width="24px"
    height="24px"
    style={{
      msTransform: 'rotate(360deg)',
      WebkitTransform: 'rotate(360deg)',
    }}
    viewBox="0 0 24 24"
    transform="rotate(360)"
    {...props}
  >
    <path
      d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3 1.86 0 3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3-1.86 0-3.43-1.27-3.87-3H4.06c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2z"
    />
  </svg>
)

export { SvgComponent };