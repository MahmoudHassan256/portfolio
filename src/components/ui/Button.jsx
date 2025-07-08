export const Button = ({ 
  variant = "default", 
  size = "default", 
  className = "", 
  children, 
  onClick,
  ...props 
}) => {
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
  };
  
  const sizes = {
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
    icon: "p-2 w-10 h-10",
  };
  
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};