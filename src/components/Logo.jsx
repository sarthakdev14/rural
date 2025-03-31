import { FaHeartbeat } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <FaHeartbeat className="text-3xl text-blue-600 dark:text-blue-400" />
      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        RuralCare
      </span>
    </div>
  );
}

export default Logo;
