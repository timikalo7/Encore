"use client";
import { Card, CardHeader } from "@/components/ui/card";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";

import { useState, useTransition } from "react";
import { addDonation } from "@/actions/add-donation";
import { AddDonationSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "@/components/auth/password-input";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddDonationProps {}

const AddDonation = ({}: AddDonationProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof AddDonationSchema>>({
    resolver: zodResolver(AddDonationSchema),
    defaultValues: {
      assetNumber: "",
      donatedItem: "",
      userEmail: "",
      orgEmail: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AddDonationSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      addDonation(values).then((data: any) => {
        setError(data.error);
          setSuccess(data.success);
          form.reset();
      });
    });
  };

  return (
    <Card className="max-w-lg mx-auto p-5 sm:px-12 sm:pb-20 pt-4 mt-10">
      <CardHeader className="text-center p-0 font-rowdies font-light text-lg sm:text-3xl py-6">
        Add Donation
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="assetNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Asset Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="a0000"
                      disabled={isPending}
                      type="text"
                      className="text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="donatedItem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Donated Item</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      className="text-sm"
                      placeholder="Laptop"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">User Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      className="text-sm"
                      placeholder="johndoe@email.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="orgEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Organisation Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      className="text-sm"
                      placeholder="johndoe@email.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Create
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default AddDonation;
