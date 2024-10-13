import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary-background py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-secondary-text">
        <p>
          &copy; 2024{" "}
          <span className="text-xs font-medium text-primary-blue">
            TecQue
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
