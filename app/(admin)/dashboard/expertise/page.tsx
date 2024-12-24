"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { getAllExpertise } from "@/app/api/expertise/getAllExpertise";
import { updateExpertise } from "@/app/api/expertise/updateExpertise";
import Spinner from "@/components/ui/Spinner";

const FormSchema = z.object({
  pulmonary1: z.string().min(10, {
    message: "pulmonary1 must be at least 10 characters.",
  }),
  pulmonary2: z.string().min(10, {
    message: "pulmonary2 must be at least 10 characters.",
  }),
  allergy1: z.string().min(10, {
    message: "allergy1 must be at least 10 characters.",
  }),
  allergy2: z.string().min(10, {
    message: "allergy2 must be at least 10 characters.",
  }),
  sleepApnea1: z.string().min(10, {
    message: "SleepApnea1 must be at least 10 characters.",
  }),
  sleepApnea2: z.string().min(10, {
    message: "SleepApnea2 must be at least 10 characters.",
  }),
});

export default function ExpertiseDashboard() {
  const [screenLoading, setScreenLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    setScreenLoading(true);
    const response = await getAllExpertise();
    console.log("response", response);
    if (response.data && response.data.length > 0) {
      response.data.map((item) => {
        if (item.name === "Pulmonary") {
          form.setValue("pulmonary1", item.para1);
          form.setValue("pulmonary2", item.para2);
        } else if (item.name === "Allergy") {
          form.setValue("allergy1", item.para1);
          form.setValue("allergy2", item.para2);
        } else {
          form.setValue("sleepApnea1", item.para1);
          form.setValue("sleepApnea2", item.para2);
        }
      });
    }
    setScreenLoading(false);
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setButtonLoading(true);
    console.log("data", data);
    const expertiseData = [
      {
        name: "Pulmonary",
        para1: data.pulmonary1,
        para2: data.pulmonary2,
      },
      {
        name: "Allergy",
        para1: data.allergy1,
        para2: data.allergy2,
      },
      {
        name: "Sleep Apnea",
        para1: data.sleepApnea1,
        para2: data.sleepApnea2,
      },
    ];
    console.log("expertiseData", expertiseData);
    await updateExpertise(expertiseData);
    setButtonLoading(false);
    setRefresh(true);
  }

  if (screenLoading) return <Spinner className="w-full h-full" />;
  else
    return (
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full space-y-6 px-10"
          >
            <h1 className="text-[30px] text-green-500">Expertise</h1>
            <div className="flex xs:flex-col md:flex-row gap-y-2 justify-center items-start w-full">
              <FormLabel className="w-1/4">Pulmonary</FormLabel>
              <div className="flex flex-col justify-center w-3/4 gap-4">
                <FormField
                  control={form.control}
                  name="pulmonary1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Here goes the first paragraph expertise for pulmonary"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pulmonary2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Here goes the second paragraph expertise for pulmonary"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row gap-y-2 justify-center items-start w-full">
              <FormLabel className="w-1/4">Allergy</FormLabel>
              <div className="flex flex-col justify-center w-3/4 gap-4">
                <FormField
                  control={form.control}
                  name="allergy1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Here goes the first paragraph expertise for allergy"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="allergy2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Here goes the second paragraph expertise for allergy"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row gap-y-2 justify-center items-start w-full">
              <FormLabel className="w-1/4">Sleep Apnea</FormLabel>
              <div className="flex flex-col justify-center w-3/4 gap-4">
                <FormField
                  control={form.control}
                  name="sleepApnea1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Here goes the first paragraph expertise for sleep apnea"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sleepApnea2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Here goes the second paragraph expertise for sleep apnea"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-700 active:bg-green-900"
            >
              {buttonLoading ? <Spinner className="w-full h-full" /> : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    );
}
