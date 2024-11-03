"use client";
import { Card, CardHeader } from "@/components/ui/card";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";

import { useState, useTransition } from "react";
import { createAccount } from "@/actions/create-account";
import { CreateAccountSchema } from "@/schemas";
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

interface CreateAccountProps {}

const CreateAccount = ({}: CreateAccountProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CreateAccountSchema>>({
    resolver: zodResolver(CreateAccountSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      role: "USER",
    },
  });

  const onSubmit = (values: z.infer<typeof CreateAccountSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      createAccount(values).then((data: any) => {
        setError(data.error);
        setSuccess(data.success);
        form.reset();
      });
    });
  };

  return (
    <Card className="max-w-lg mx-auto p-5 sm:px-12 sm:pb-20 pt-4 mt-10">
      <CardHeader className="text-center p-0 font-rowdies font-light text-lg sm:text-3xl py-6">
        Create an Account
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      disabled={isPending}
                      className="text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="john.doe@example.com"
                      type="email"
                      className="text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Password</FormLabel>
                  <FormControl>
                    {/* <Input
                      {...field}
                      placeholder="******"
                      type="password"
                      disabled={isPending}
                    /> */}
                    <PasswordInput {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            className="text-sm"
                            placeholder="Select a role"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem className="text-sm" value="USER">
                          USER
                        </SelectItem>
                        <SelectItem className="text-sm" value="ADMIN">
                          ADMIN
                        </SelectItem>
                      </SelectContent>
                    </Select>
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

export default CreateAccount;
