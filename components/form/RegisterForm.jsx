"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/schemas/registrationSchema";
import { toast } from "react-toastify";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import CustomFormField from "../ui/formfield";
import { DatePicker } from "../ui/datepicker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RADIO_OPTIONS } from "@/lib/constants";

const Registeration = () => {
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

  const { reset } = form;

  // Define the onSubmit function
  const onSubmit = async (data) => {
    try {
      // Example: Send data to an API endpoint
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      toast.success("Registration successful!");
      reset();
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
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
  );
};

export default Registeration;
