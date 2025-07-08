export const Badge = ({ variant = "default", className = "", children }) => {
  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};