"use client";

import { useState, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import AddDeleteSVGs from "@/components/ui/addDeleteSvgs";
import { ChamberType } from "@/utils/types";
import { getAllChambers } from "@/app/api/chambers/getAllChambers";
import { updateChambers } from "@/app/api/chambers/updateChambers";
import Spinner from "@/components/ui/Spinner";

const createDefaultZodObj = (length: number) => {
  let obj = {} as Record<string, z.ZodString>;
  for (let i = 1; i <= length; i++) {
    obj[`chamberName${i}`] = z.string().min(5, {
      message: `chamberName${i} must be at least 5 characters.`,
    });
    obj[`address${i}`] = z.string().min(5, {
      message: `address${i} must be at least 5 characters.`,
    });
    obj[`mobile${i}`] = z.string().min(5, {
      message: `mobile${i} must be at least 5 characters.`,
    });
    obj[`timings${i}`] = z.string().min(5, {
      message: `timings${i} must be at least 5 characters.`,
    });
  }
  return obj;
};

export default function ChambersDashboard() {
  const [screenLoading, setScreenLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [chambersArray, setChambersArray] = useState<ChamberType[]>([
    {
      chamberName: "",
      address: "",
      mobile: "",
      timings: "",
    },
  ]);

  const form = useForm({
    resolver: zodResolver(z.object(createDefaultZodObj(chambersArray.length))),
    defaultValues: chambersArray.reduce((acc, chamber, index) => {
      acc[`chamberName${index + 1}`] = chamber.chamberName;
      acc[`address${index + 1}`] = chamber.address;
      acc[`mobile${index + 1}`] = chamber.mobile;
      acc[`timings${index + 1}`] = chamber.timings;
      return acc;
    }, {} as Record<string, string>),
  });

  useEffect(() => {
    fetchServices();
  }, [refresh]);

  async function fetchServices() {
    setScreenLoading(true);
    const response = await getAllChambers();
    if (response?.data.length > 0) {
      setChambersArray(response.data);
      form.reset(
        response.data.reduce((acc, chamber, index) => {
          acc[`chamberName${index + 1}`] = chamber.chamberName;
          acc[`address${index + 1}`] = chamber.address;
          acc[`mobile${index + 1}`] = chamber.mobile;
          acc[`timings${index + 1}`] = chamber.timings;
          return acc;
        }, {} as Record<string, string>)
      );
    }
    setScreenLoading(false);
  }

  async function onSubmit(data: Record<string, string>) {
    setButtonLoading(true);
    const newChambersArray = chambersArray.map((_, index) => ({
      chamberName: data[`chamberName${index + 1}`],
      address: data[`address${index + 1}`],
      mobile: data[`mobile${index + 1}`],
      timings: data[`timings${index + 1}`],
    }));
    console.log("newChambersArray", newChambersArray);
    if (chambersArray.length === 0) {
      alert("Please add at least one chamber");
      setButtonLoading(false);
      setRefresh(true);
      return;
    }
    await updateChambers(newChambersArray);
    setButtonLoading(false);
    setRefresh(true);
  }

  const addChamber = () => {
    const currentValues = form.getValues();
    setChambersArray([
      ...chambersArray,
      {
        chamberName: "",
        address: "",
        mobile: "",
        timings: "",
      },
    ]);
    form.reset({
      ...currentValues,
      [`chamberName${chambersArray.length + 1}`]: "",
      [`address${chambersArray.length + 1}`]: "",
      [`mobile${chambersArray.length + 1}`]: "",
      [`timings${chambersArray.length + 1}`]: "",
    });
  };

  const deleteChamber = (index: number) => {
    const currentValues = form.getValues();
    const newChambersArray = chambersArray.filter((_, i) => i !== index);
    setChambersArray(newChambersArray);
    const newFormValues = newChambersArray.reduce((acc, _, newIndex) => {
      acc[`chamberName${newIndex + 1}`] =
        currentValues[
          `chamberName${newIndex + 1 + (newIndex >= index ? 1 : 0)}`
        ];
      acc[`address${newIndex + 1}`] =
        currentValues[`address${newIndex + 1 + (newIndex >= index ? 1 : 0)}`];
      acc[`mobile${newIndex + 1}`] =
        currentValues[`mobile${newIndex + 1 + (newIndex >= index ? 1 : 0)}`];
      acc[`timings${newIndex + 1}`] =
        currentValues[`timings${newIndex + 1 + (newIndex >= index ? 1 : 0)}`];
      return acc;
    }, {} as Record<string, string>);
    form.reset(newFormValues);
  };

  if (screenLoading) return <Spinner className="w-full h-full" />;
  else
    return (
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full space-y-6 px-10"
          >
            <h1 className="text-[30px] text-green-500">Chambers</h1>
            {chambersArray.map((chamber, index) => (
              <div
                key={index}
                className="flex xs:flex-col gap-y-2 justify-center items-start w-full"
              >
                <div className="flex justify-between items-center w-full">
                  <h2 className="xs:w-[70%] md:w-[80%]">Chamber {index + 1}</h2>
                  <AddDeleteSVGs
                    onClickAdd={addChamber}
                    onClickDelete={() => deleteChamber(index)}
                    array={chambersArray}
                    index={index}
                  />
                </div>
                <br />
                <div className="flex xs:flex-col md:flex-row justify-between xs:items-start md:items-center w-full">
                  <FormLabel className="xs:w-full md:w-1/6">
                    Chamber Name
                  </FormLabel>
                  <div className="flex flex-col justify-center xs:w-full md:w-5/6 gap-4">
                    <FormField
                      control={form.control}
                      name={`chamberName${index + 1}`}
                      defaultValue={chamber.chamberName}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="chamber name"
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
                <div className="flex xs:flex-col md:flex-row justify-between xs:items-start md:items-center w-full">
                  <FormLabel className="xs:w-full md:w-1/6">Address</FormLabel>
                  <div className="flex flex-col justify-center xs:w-full md:w-5/6 gap-4">
                    <FormField
                      control={form.control}
                      name={`address${index + 1}`}
                      defaultValue={chamber.address}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="address"
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
                <div className="flex xs:flex-col md:flex-row justify-between xs:items-start md:items-center w-full">
                  <FormLabel className="xs:w-full md:w-1/6">
                    Mobile No
                  </FormLabel>
                  <div className="flex flex-col justify-center xs:w-full md:w-5/6 gap-4">
                    <FormField
                      control={form.control}
                      name={`mobile${index + 1}`}
                      defaultValue={chamber.mobile}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="mobile no"
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
                <div className="flex xs:flex-col md:flex-row justify-between xs:items-start md:items-center w-full">
                  <FormLabel className="xs:w-full md:w-1/6">Timings</FormLabel>
                  <div className="flex flex-col justify-center xs:w-full md:w-5/6 gap-4">
                    <FormField
                      control={form.control}
                      name={`timings${index + 1}`}
                      defaultValue={chamber.timings}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="timings"
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
              </div>
            ))}
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
