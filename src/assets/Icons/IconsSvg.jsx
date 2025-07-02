import React from 'react';

export function ArrowUpTrayIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}

export function DownloadIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v11.25m0 0l3-3m-3 3l-3-3M4.5 19.5h15"
      />
    </svg>
  );
}


export function ChatIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M21 15.397a1.96 1.96 0 0 1-.586 1.395c-.375.37-.884.578-1.414.578H7l-4 3.945V5.535c0-.524.21-1.026.586-1.396.375-.37.884-.577 1.414-.577h14c.53 0 1.04.208 1.414.577.375.37.586.872.586 1.395z"
      ></path>
    </svg>
  );
}


export function BellIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="23"
      fill="none"
      viewBox="0 0 19 23"
    >
      <path
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.5 17.206c5.64 0 8.248-.714 8.5-3.577 0-2.862-1.819-2.678-1.819-6.19 0-2.743-2.636-5.864-6.681-5.864S2.819 4.696 2.819 7.44c0 3.512-1.819 3.328-1.819 6.19.253 2.874 2.862 3.577 8.5 3.577"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.889 20.174c-1.364 1.494-3.492 1.512-4.87 0"
      ></path>
    </svg>
  );
}




export function DoubleRightArrow({ className = 'h-6 w-6', ...props }) {
  return (
     <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="7"
    fill="none"
    viewBox="0 0 9 7"
  >
    <path
      fill="#676767"
      d="M.344.944h1.728l2.76 2.724-2.76 2.724H.344l2.772-2.724zm3.838 0H5.91l2.76 2.724-2.76 2.724H4.182l2.772-2.724z"
    ></path>
  </svg>

  );
}