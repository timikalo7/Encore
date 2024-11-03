"use client";
import { useState, useTransition } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { MarkerSchema } from "@/schemas";
import { useMutation } from "@tanstack/react-query";
import * as z from "zod";

import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
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
import { Card, CardHeader } from "@/components/ui/card";
import { addMarker } from "@/actions/add-marker";
import Link from "next/link";

interface AddMarkerProps {}

// interface MarkerFormValues {
//   primaryPartner: string;
//   secondaryPartner: string;
//   receivingOrgName: string;
//   receivingOrgIdNumber: string;
//   typeOfOrganisation: string;
//   receivingOrgAddress: string;
//   receivingOrgContactName: string;
//   receivingOrgContactEmail: string;
//   receivingOrgPhoneNumber: string;
//   lng: number;
//   lat: number;
//   userEmail: string;
// }

const AddMarker = ({}: AddMarkerProps) => {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<z.infer<typeof MarkerSchema>>({
    resolver: zodResolver(MarkerSchema),
    defaultValues: {
      primaryPartner: "",
      secondaryPartner: "",
      receivingOrgName: "",
      receivingOrgIdNumber: "",
      typeOfOrganization: "",
      receivingOrgAddress: "",
      receivingOrgContactName: "",
      receivingOrgContactEmail: "",
      receivingOrgPhoneNumber: "",
      lng: 0,
      lat: 0,
      userEmail: "",
    },
  });

  const onSubmit = (values: z.infer<typeof MarkerSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      addMarker(values).then((data: any) => {
        setError(data.error);
        setSuccess(data.success);
        form.reset();
      });
    });
  };



  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 form={form} />;
      case 2:
        return <Step2 form={form} />;
      case 3:
        return <Step3 form={form} />;
      default:
        return null;
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-5 sm:px-12 sm:pb-20 pt-4 mt-10">
      <CardHeader className="text-center p-0 font-rowdies font-light text-lg xs:text-2xl sm:text-3xl py-6">
        Add Marker
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {renderStep()}
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="flex justify-center gap-3 sm:gap-10">
            {currentStep > 1 && (
              <Button
                className="w-[10rem]"
                type="button"
                onClick={prevStep}
                disabled={isPending}
              >
                Previous
              </Button>
            )}
            {currentStep < 3 ? (
              <Button
                className="w-[10rem]"
                type="button"
                onClick={nextStep}
                disabled={isPending}
              >
                Next
              </Button>
            ) : (
              <Button className="w-[10rem]" type="submit" disabled={isPending}>
                Submit
              </Button>
            )}
          </div>
          <div className="flex items-center justify-center gap-3">
            {currentStep === 1 ? (
              <div className="h-4 w-4 bg-primary rounded-full flex justify-center items-center" />
            ) : (
              <div className="h-4 w-4 bg-gray-200 rounded-full" />
            )}
            {currentStep === 2 ? (
              <div className="h-4 w-4 bg-primary rounded-full flex justify-center items-center" />
            ) : (
              <div className="h-4 w-4 bg-gray-200 rounded-full" />
            )}
            {currentStep === 3 ? (
              <div className="h-4 w-4 bg-primary rounded-full flex justify-center items-center" />
            ) : (
              <div className="h-4 w-4 bg-gray-200 rounded-full" />
            )}
          </div>
        </form>
      </Form>
    </Card>
  );
};

const Step1 = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof MarkerSchema>>;
}) => (
  <>
    <FormField
      control={form.control}
      name="primaryPartner"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">
            Primary Partner
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Primary Partner"
              type="text"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="secondaryPartner"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">
            Secondary Partner
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Secondary Partner"
              type="text"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);

const Step2 = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof MarkerSchema>>;
}) => (
  <>
    <FormField
      control={form.control}
      name="receivingOrgName"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">
            Receiving Organisation Name
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Name"
              type="text"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="receivingOrgIdNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">
            Receiving Organisation Id Number
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Id Number"
              type="text"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="typeOfOrganization"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">
            Type Of Organisation
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Type Of Organisation"
              type="text"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="receivingOrgAddress"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">
            Receiving Organisation Address
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Address"
              type="text"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="receivingOrgContactName"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">
            Receiving Organisation Contact Name
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Contact Name"
              type="text"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="receivingOrgContactEmail"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">
            Receiving Organisation Contact Email
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Contact Email"
              type="text"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="receivingOrgPhoneNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">
            Receiving Organisation Phone Number
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Phone Number"
              type="text"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);

const Step3 = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof MarkerSchema>>;
}) => (
  <>
    <FormField
      control={form.control}
      name="lng"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">Longitude</FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Longitude"
              type="number"
              onChange={(event) => field.onChange(+event.target.value)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="lat"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">Latitude</FormLabel>
          <FormControl>
            <Input
              {...field}
              className="text-sm"
              placeholder="Latitude"
              type="number "
              onChange={(event) => field.onChange(+event.target.value)}
            />
          </FormControl>
          <FormMessage />
          <Link
            className="text-xs text-primary hover:opacity-90 hover:underline"
            href="https://www.google.co.uk/maps"
          >
            Google Maps
          </Link>
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
              className="text-sm"
              placeholder="email.com@email.com"
              type="email"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);

export default AddMarker;
