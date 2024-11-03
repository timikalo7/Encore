"use client";
import FormError from "../form-error";
import FormSuccess from "../form-success";

import { useState, useTransition } from "react";
import { changepassword } from "@/actions/change-password";
import { ChangePasswordSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import PasswordInput from "../auth/password-input";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import Link from "next/link";
import { Card, CardHeader } from "../ui/card";

const ChangePassword = () => {
  const SearchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ChangePasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      changepassword(values)
        .then((data) => {
          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.error) {
            form.reset();
            setError(data.error);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <div className="mt-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-10">
            <>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Change password</FormLabel>
                    <div className="flex items-center">
                      <FormControl className="">
                        <PasswordInput
                          className="rounded-r-none outline-none w-20 sm:w-40 bg-transparent hide-password-toggle ...other-classes"
                          {...field}
                          disabled={isPending}
                          isChangePassword={true}
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        variant="outline"
                        className="rounded-l-none"
                        disabled={isPending}
                      >
                        Change
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          </div>

          <div className="inline-block w-56 sm:w-[20rem]">
            <FormError message={error} />
            <FormSuccess message={success} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ChangePassword;

// 2:41:40
