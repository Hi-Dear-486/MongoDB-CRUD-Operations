"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormMessage from "./formmessage";

const CustomFormField = ({ control, name, placeholder, type = "text" }) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <FormItem>
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                className="max-w-[320px]"
              />
            </FormControl>
            {error && <FormMessage message={error.message} />}
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustomFormField;
