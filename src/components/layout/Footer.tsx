import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 text-xs text-gray-400 text-center">
          Desenvolvido com 💛 por{" "}
          <a
            href="https://jotape.me/"
            className="text-blue-500 hover:text-blue-600"
          >
            João Pedro
          </a>
        </div>
      </div>
    </footer>
  );
};
