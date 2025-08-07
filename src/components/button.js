import React from "react";

export default function Button({ text, primary }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold ${primary
          ? "bg-orange-500 text-white hover:bg-orange-600"
          : "bg-white text-green-900 hover:bg-gray-200"
        }`}
    >
      {text}
    </button>
  );
}
