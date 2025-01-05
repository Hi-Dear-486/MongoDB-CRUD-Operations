"use client";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import CustomFormField from "@/components/ui/formfield";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RADIO_OPTIONS } from "@/lib/constants";
import { formSchema } from "@/lib/schemas/registrationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUser = () => {
  const [userdata, setUserData] = useState([]);
  const { user: id } = useParams();
  const singleUser = userdata.find((user) => user._id === id);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      dob: null,
      gender: "",
    },
  });

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/register");
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      Array.isArray(result)
        ? setUserData(result)
        : console.error("API did not return an array");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to retrieve data. Please try again.");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (singleUser) {
      form.reset({
        ...singleUser,
        dob: singleUser.dob ? new Date(singleUser.dob) : null, // Convert string to Date
      });
    }
  }, [singleUser, form]);

  const onSubmit = async (data) => {
    const transformedData = {
      ...data,
      dob:
        data.dob && typeof data.dob === "string"
          ? new Date(data.dob)
          : data.dob,
    };

    try {
      // Example: Send data to an API endpoint
      const response = await fetch(`/register/${singleUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast.success("successful Update!");
      router.push("/alluser");
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 shadow-62 max-w-[420px] !w-full p-4 "
        >
          <section className="mb-12 space-y-4">
            <h1>Hi there 🖐</h1>
            <p className="text-gray-700">Best Practices for MongoDB CRUD</p>
          </section>
          <CustomFormField
            control={form.control}
            name="name"
            placeholder="name"
          />
          <CustomFormField
            control={form.control}
            name="email"
            placeholder="email"
            type="email"
          />
          <CustomFormField
            control={form.control}
            name="password"
            placeholder="password"
            type="password"
          />
          <CustomFormField
            control={form.control}
            name="phone"
            placeholder="phone number"
            type="number"
          />
          <DatePicker control={form.control} name="dob" />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row space-y-1"
                  >
                    {RADIO_OPTIONS.map(({ value, label }) => (
                      <FormItem
                        key={value}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={value} />
                        </FormControl>
                        <FormLabel className="font-normal">{label}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default EditUser;
//
