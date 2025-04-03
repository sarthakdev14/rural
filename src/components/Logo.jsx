import { FaHeartbeat } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <FaHeartbeat className="text-3xl text-white dark:text-white" />
      <span className="text-2xl font-bold text-white dark:text-white">
        RuralCare
      </span>
    </div>
  );
}

export default Logo;
