import React from "react";
import Navbar from "../_components/Navbar";

interface otherPageWrapperProps {
  children: React.ReactNode;
}

const OtherPageWrapper: React.FC<otherPageWrapperProps> = ({
  children,
}: {
  children: any;
}) => {
  return (
    <div className="size-full relative">
      <div className="w-full h-screen bg-banner text-white">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default OtherPageWrapper;
