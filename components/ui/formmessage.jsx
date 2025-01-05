"use client";
import React from "react";

const FormMessage = ({ message }) => {
  return message ? <p className="text-red-500">{message}</p> : null;
};

export default FormMessage;
