import React, { PropsWithChildren } from "react";
import Icon from "./Icon";
import { CgClose } from "react-icons/cg";

interface DrawerProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  // Prevent click events from propagating to the overlay
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-[200] ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 right-0 bg-white w-[90vw] md:w-[50vw] h-screen overflow-y-auto shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Icon
              icon={<CgClose />}
              size={20}
              className="cursor-pointer text-muted"
              onClick={onClose}
            />
            <div className="text-2xl font-semibold">{title}</div>
          </div>
          <div onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
