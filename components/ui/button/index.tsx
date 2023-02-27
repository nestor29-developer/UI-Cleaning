import { MouseEventHandler } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export const Button = ({
  description,
  className,
  type,
  handleClick,
  icon,
  iconPosition,
}: {
  description: string;
  className?: string;
  type: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: any;
  iconPosition?: string;
}) => {
  const Icon = () => {
    return (
      <motion.div
        animate={{ x: 6 }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <ArrowSmallRightIcon
          className="ml-1 h-6 w-6 flex-shrink-0"
          aria-hidden="true"
        />
      </motion.div>
    );
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${
          type === "primary" ? "bg-[#5f2698] hover:opacity-90" : ""
        } cursor-pointer shadow-sm] ${className} transition-none`}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center"
        >
          {description}
          {icon && iconPosition === "right" && <Icon />}
        </motion.div>
      </button>
    </>
  );
};
