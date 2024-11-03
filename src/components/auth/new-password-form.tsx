"use client";
import FormSuccess from "../form-success";

import { SetStateAction, useState, useTransition } from "react";
import { newPassword } from "@/actions/new-password";
import { NewPasswordSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useSearchParams } from "next/navigation";
import FormError from "../form-error";
import { Card, CardHeader } from "../ui/card";
import PasswordInput from "./password-input";
import Link from "next/link";

const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <Card className="max-w-sm mx-auto px-12 pb-20 pt-4 mt-10">
      <CardHeader className="text-center p-0 font-rowdies font-light text-3xl py-6">
        Reset Password
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          {!success && (
            <Button type="submit" className="w-full" disabled={isPending}>
              Reset password
            </Button>
          )}
          {success && (
            <Button size="sm" variant="outline" asChild className="w-full">
              <Link href="/auth/login">Login</Link>
            </Button>
          )}
        </form>
      </Form>
    </Card>
  );
};

export default NewPasswordForm;
