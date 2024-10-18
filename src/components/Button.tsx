// import React from "react";
// import { FaSpinner } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// interface ButtonProps {
//   href?: string;
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   children: React.ReactNode;
//   outline?: boolean;
//   className?: string;
//   disabled?: boolean;
//   loading?: boolean;
// }

// const Button: React.FC<ButtonProps> = ({
//   href,
//   onClick,
//   children,
//   outline = false,
//   disabled = false,
//   loading = false,
//   className = "",
// }) => {
//   const router = useRouter();

//   const handlePress = (event: React.MouseEvent<HTMLButtonElement>) => {
//     if (disabled) return;
//     if (href) {
//       event.preventDefault();
//       router.push(href);
//     } else if (onClick) {
//       onClick(event);
//     }
//   };

//   const baseClassName =
//     "rounded-xl px-5 py-2.5 border  font-medium flex justify-center  items-center  focus:ring-2  focus:ring-opacity-50";

//   const extraClassName = disabled
//     ? "bg-secondary-background opacity-85"
//     : outline
//     ? "bg-transparent hover:bg-primary-blue hover:text-primary-background text-primary-blue"
//     : "bg-primary-blue text-primary-background hover:bg-transparent hover:border-primary-blue hover:text-primary-blue";

//   return (
//     <button
//       className={`${baseClassName} ${extraClassName} ${className}`}
//       onClick={handlePress}
//       disabled={disabled}
//     >
//       {loading ? <FaSpinner className="animate-spin" size={22} /> : children}
//     </button>
//   );
// };

// export default Button;

import React from "react";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface ButtonProps {
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  outline = false,
  disabled = false,
  loading = false,
  className = "",
}) => {
  const router = useRouter();

  const handlePress = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (href) {
      event.preventDefault();
      router.push(href);
    } else if (onClick) {
      onClick(event);
    }
  };

  const baseClassName =
    "rounded-xl px-5 py-2.5 border font-medium flex justify-center items-center focus:ring-2 focus:ring-opacity-50";

  // Determine extra classes based on button state
  const extraClassName = disabled
    ? "bg-secondary-background opacity-85"
    : outline
    ? "bg-transparent hover:bg-primary-blue hover:text-primary-background text-primary-blue"
    : "bg-blue-500 text-white hover:bg-blue-600"; // Adjusted for your case

  return (
    <button
      className={`${baseClassName} ${extraClassName} ${className}`}
      onClick={handlePress}
      disabled={disabled}
    >
      {loading ? <FaSpinner className="animate-spin" size={22} /> : children}
    </button>
  );
};

export default Button;
