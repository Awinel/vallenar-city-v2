"use client";

import React from "react";

const Copyright = () => {
  return (
    <div className="self-end">
      <p className="text-center mb-1">
        &copy; Awinel {new Date().getFullYear()}. Todos los derechos reservados
      </p>
    </div>
  );
};

export default Copyright;
