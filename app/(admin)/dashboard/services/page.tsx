"use client";

import { SetStateAction, useEffect, useState } from "react";
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
import { Input } from "@/components/ui/input";
import AddDeleteSVGs from "@/components/ui/addDeleteSvgs";
import { getAllServices } from "@/app/api/services/getAllServices";
import Spinner from "@/components/ui/Spinner";
import { updateServices } from "@/app/api/services/updateServices";

const createDefaultZodObj = (
  pulmonaryLength: number,
  allergyLength: number,
  sleepLength: number,
  pleuralFluidLength: number,
  anotherPulmonaryRehabLength: number
) => {
  let obj = {} as Record<string, z.ZodString>;
  for (let i = 1; i <= pulmonaryLength; i++) {
    obj[`pulmonary${i}`] = z.string().min(1, {
      message: `pulmonary must be at least 1 characters.`,
    });
  }
  for (let i = 1; i <= allergyLength; i++) {
    obj[`allergy${i}`] = z.string().min(1, {
      message: `allergy must be at least 1 characters.`,
    });
  }
  for (let i = 1; i <= sleepLength; i++) {
    obj[`sleep${i}`] = z.string().min(1, {
      message: `sleep must be at least 1 characters.`,
    });
  }
  for (let i = 1; i <= pleuralFluidLength; i++) {
    obj[`pleuralFluid${i}`] = z.string().min(1, {
      message: `pleuralFluid must be at least 1 characters.`,
    });
  }
  for (let i = 1; i <= anotherPulmonaryRehabLength; i++) {
    obj[`anotherPulmonaryRehab${i}`] = z.string().min(1, {
      message: `anotherPulmonaryRehab must be at least 1 characters.`,
    });
  }
  return obj;
};

export default function ServicesDashboard() {
  const [screenLoading, setScreenLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [pulmonaryArray, setPulmonaryArray] = useState<
    Record<string, string>[]
  >([
    {
      pulmonary1: "",
    },
  ]);
  const [allergyArray, setAllergyArray] = useState<Record<string, string>[]>([
    {
      allergy1: "",
    },
  ]);
  const [sleepArray, setSleepArray] = useState<Record<string, string>[]>([
    {
      sleep1: "",
    },
  ]);
  const [pleuralArray, setPleuralArray] = useState<Record<string, string>[]>([
    {
      pleuralFluid1: "",
    },
  ]);
  const [anotherPulmonaryRehabArray, setanotherPulmonaryRehabArray] = useState<
    Record<string, string>[]
  >([
    {
      anotherPulmonaryRehab1: "",
    },
  ]);

  let defaultZodObj = createDefaultZodObj(
    pulmonaryArray.length,
    allergyArray.length,
    sleepArray.length,
    pleuralArray.length,
    anotherPulmonaryRehabArray.length
  );
  const FormSchema = z.object(defaultZodObj);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ...Object.fromEntries(
        pulmonaryArray.map((pulmonary, index) => [
          `pulmonary${index + 1}`,
          pulmonary[`pulmonary${index + 1}`] || "",
        ])
      ),
      ...Object.fromEntries(
        allergyArray.map((allergy, index) => [
          `allergy${index + 1}`,
          allergy[`allergy${index + 1}`] || "",
        ])
      ),
      ...Object.fromEntries(
        sleepArray.map((sleep, index) => [
          `sleep${index + 1}`,
          sleep[`sleep${index + 1}`] || "",
        ])
      ),
      ...Object.fromEntries(
        pleuralArray.map((pleuralFluid, index) => [
          `pleuralFluid${index + 1}`,
          pleuralFluid[`pleuralFluid${index + 1}`] || "",
        ])
      ),
      ...Object.fromEntries(
        anotherPulmonaryRehabArray.map((anotherPulmonaryRehab, index) => [
          `anotherPulmonaryRehab${index + 1}`,
          anotherPulmonaryRehab[`anotherPulmonaryRehab${index + 1}`] || "",
        ])
      ),
    },
  });

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    setScreenLoading(true);
    const response = await getAllServices();
    console.log(response?.data);
    if (response.data && response.data.length > 0) {
      const services = response.data;
      const pulmonary = services.find(
        (service) => service.name === "pulmonary"
      );
      const allergy = services.find((service) => service.name === "allergy");
      const sleep = services.find((service) => service.name === "sleep");
      const pleuralFluid = services.find(
        (service) => service.name === "pleuralFluid"
      );
      const anotherPulmonaryRehab = services.find(
        (service) => service.name === "anotherPulmonaryRehab"
      );
      if (pulmonary) {
        setPulmonaryArray(
          pulmonary.points.map((point, index) => ({
            [`pulmonary${index + 1}`]: point,
          }))
        );
        form.reset({
          ...form.getValues(),
          ...Object.fromEntries(
            pulmonary.points.map((point, index) => [
              `pulmonary${index + 1}`,
              point,
            ])
          ),
        });
      }
      if (allergy) {
        setAllergyArray(
          allergy.points.map((point, index) => ({
            [`allergy${index + 1}`]: point,
          }))
        );
        form.reset({
          ...form.getValues(),
          ...Object.fromEntries(
            allergy.points.map((point, index) => [`allergy${index + 1}`, point])
          ),
        });
      }
      if (sleep) {
        setSleepArray(
          sleep.points.map((point, index) => ({
            [`sleep${index + 1}`]: point,
          }))
        );
        form.reset({
          ...form.getValues(),
          ...Object.fromEntries(
            sleep.points.map((point, index) => [`sleep${index + 1}`, point])
          ),
        });
      }
      if (pleuralFluid) {
        setPleuralArray(
          pleuralFluid.points.map((point, index) => ({
            [`pleuralFluid${index + 1}`]: point,
          }))
        );
        form.reset({
          ...form.getValues(),
          ...Object.fromEntries(
            pleuralFluid.points.map((point, index) => [
              `pleuralFluid${index + 1}`,
              point,
            ])
          ),
        });
      }
      if (anotherPulmonaryRehab) {
        setanotherPulmonaryRehabArray(
          anotherPulmonaryRehab.points.map((point, index) => ({
            [`anotherPulmonaryRehab${index + 1}`]: point,
          }))
        );
        form.reset({
          ...form.getValues(),
          ...Object.fromEntries(
            anotherPulmonaryRehab.points.map((point, index) => [
              `anotherPulmonaryRehab${index + 1}`,
              point,
            ])
          ),
        });
      }
    }
    setScreenLoading(false);
  };

  const onAddingField = (
    array: Record<string, string>[],
    fieldName: string,
    setArray: React.Dispatch<SetStateAction<Record<string, string>[]>>
  ) => {
    setArray([...array, { [`${fieldName}${array.length + 1}`]: "" }]);
    const currentValues = form.getValues();
    form.reset({
      ...currentValues,
      [`${fieldName}${array.length + 1}`]: "",
    });
  };

  const onDeletingField = (
    array: Record<string, string>[],
    fieldName: string,
    index: number,
    setArray: React.Dispatch<SetStateAction<Record<string, string>[]>>
  ) => {
    setArray(array.filter((_, i) => i !== index));
    const currentValues = form.getValues();
    const newValues = array.reduce((acc, _, newIndex) => {
      acc[`${fieldName}${newIndex + 1}`] =
        currentValues[
          `${fieldName}${newIndex + 1 + (newIndex >= index ? 1 : 0)}`
        ];
      return acc;
    }, {} as Record<string, string>);

    delete currentValues[`${fieldName}${array.length}`];
    delete newValues[`${fieldName}${array.length}`];

    console.log("newForm", { ...currentValues, ...newValues });
    form.reset({ ...currentValues, ...newValues });
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setButtonLoading(true);
    //pulmonaryData
    const pulmonaryKeys = Object.keys(data).filter((key) =>
      key.includes("pulmonary")
    );
    const pulmonaryObj = {
      name: "pulmonary",
      points: pulmonaryKeys.map((key) => data[key]),
    };
    //allergyData
    const allergyKeys = Object.keys(data).filter((key) =>
      key.includes("allergy")
    );
    const allergyObj = {
      name: "allergy",
      points: allergyKeys.map((key) => data[key]),
    };
    //sleepData
    const sleepKeys = Object.keys(data).filter((key) => key.includes("sleep"));
    const sleepObj = {
      name: "sleep",
      points: sleepKeys.map((key) => data[key]),
    };
    //pleuralFluidData
    const pleuralFluidKeys = Object.keys(data).filter((key) =>
      key.includes("pleuralFluid")
    );
    const pleuralFluidObj = {
      name: "pleuralFluid",
      points: pleuralFluidKeys.map((key) => data[key]),
    };
    //anotherPulmonaryRehabData
    const anotherPulmonaryRehabKeys = Object.keys(data).filter((key) =>
      key.includes("anotherPulmonaryRehab")
    );
    const anotherPulmonaryRehabObj = {
      name: "anotherPulmonaryRehab",
      points: anotherPulmonaryRehabKeys.map((key) => data[key]),
    };

    if (
      pulmonaryArray.length === 0 ||
      allergyArray.length === 0 ||
      sleepArray.length === 0 ||
      pleuralArray.length === 0 ||
      anotherPulmonaryRehabArray.length === 0
    ) {
      alert("At least one field is required in each section.");
      setButtonLoading(false);
      setRefresh(true);
      return;
    }

    const services = [
      pulmonaryObj,
      allergyObj,
      sleepObj,
      pleuralFluidObj,
      anotherPulmonaryRehabObj,
    ];
    console.log(services);
    await updateServices(services);
    setButtonLoading(false);
    setRefresh(true);
  }

  // console.log(defaultZodObj);

  if (screenLoading) return <Spinner className="w-full h-full" />;
  else
    return (
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full space-y-6 px-10"
          >
            <h1 className="text-[30px] text-green-500">Services</h1>
            <div className="flex xs:flex-col md:flex-row gap-y-2 justify-center items-start w-full">
              <FormLabel className="w-1/4">Pulmonary Function Tests</FormLabel>
              <div className="flex flex-col justify-center items-center w-3/4 gap-y-2">
                {pulmonaryArray.map((pulmonary, index) => (
                  <div
                    className="flex justify-center items-center w-full gap-4"
                    key={`pulmonary-${index}`}
                  >
                    <div className="xs:w-[80%] md:w-[90%]">
                      <FormField
                        control={form.control}
                        name={`pulmonary${index + 1}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="pulmonary testing"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <AddDeleteSVGs
                      onClickAdd={() => {
                        onAddingField(
                          pulmonaryArray,
                          "pulmonary",
                          setPulmonaryArray
                        );
                      }}
                      onClickDelete={() => {
                        onDeletingField(
                          pulmonaryArray,
                          "pulmonary",
                          index,
                          setPulmonaryArray
                        );
                      }}
                      array={pulmonaryArray}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row gap-y-2 justify-center items-start w-full">
              <FormLabel className="w-1/4">Allergy Testing</FormLabel>
              <div className="flex flex-col justify-center items-center w-3/4 gap-y-2">
                {allergyArray.map((allergy, index) => (
                  <div
                    className="flex justify-center items-center w-full gap-4"
                    key={`allergy-${index}`}
                  >
                    <div className="xs:w-[80%] md:w-[90%]">
                      <FormField
                        control={form.control}
                        name={`allergy${index + 1}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="allergy testing" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <AddDeleteSVGs
                      onClickAdd={() =>
                        onAddingField(allergyArray, "allergy", setAllergyArray)
                      }
                      onClickDelete={() => {
                        onDeletingField(
                          allergyArray,
                          "allergy",
                          index,
                          setAllergyArray
                        );
                      }}
                      array={allergyArray}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row gap-y-2 justify-center items-start w-full">
              <FormLabel className="w-1/4">Sleep Study</FormLabel>
              <div className="flex flex-col justify-center items-center w-3/4 gap-y-2">
                {sleepArray.map((sleep, index) => (
                  <div
                    className="flex justify-center items-center w-full gap-4"
                    key={`sleep-${index}`}
                  >
                    <div className="xs:w-[80%] md:w-[90%]">
                      <FormField
                        control={form.control}
                        name={`sleep${index + 1}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="sleep study" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <AddDeleteSVGs
                      onClickAdd={() => {
                        onAddingField(sleepArray, "sleep", setSleepArray);
                      }}
                      onClickDelete={() => {
                        onDeletingField(
                          sleepArray,
                          "sleep",
                          index,
                          setSleepArray
                        );
                      }}
                      array={sleepArray}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row gap-y-2 justify-center items-start w-full">
              <FormLabel className="w-1/4">Pleural Fluid Tapping</FormLabel>
              <div className="flex flex-col justify-center items-center w-3/4 gap-y-2">
                {pleuralArray.map((pleuralFluid, index) => (
                  <div
                    className="flex justify-center items-center w-full gap-4"
                    key={`pleuralFluid-${index}`}
                  >
                    <div className="xs:w-[80%] md:w-[90%]">
                      <FormField
                        control={form.control}
                        name={`pleuralFluid${index + 1}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="pleural fluid tapping"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <AddDeleteSVGs
                      onClickAdd={() => {
                        onAddingField(
                          pleuralArray,
                          "pleuralFluid",
                          setPleuralArray
                        );
                      }}
                      onClickDelete={() => {
                        onDeletingField(
                          pleuralArray,
                          "pleuralFluid",
                          index,
                          setPleuralArray
                        );
                      }}
                      array={pleuralArray}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row gap-y-2 justify-center items-start w-full">
              <FormLabel className="w-1/4">Pulmonary Rehabilitation</FormLabel>
              <div className="flex flex-col justify-center items-center w-3/4 gap-y-2">
                {anotherPulmonaryRehabArray.map(
                  (anotherPulmonaryRehab, index) => (
                    <div
                      className="flex justify-center items-center w-full gap-4"
                      key={`anotherPulmonaryRehab-${index}`}
                    >
                      <div className="xs:w-[80%] md:w-[90%]">
                        <FormField
                          control={form.control}
                          name={`anotherPulmonaryRehab${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="pulmonary rehabilitation"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <AddDeleteSVGs
                        onClickAdd={() => {
                          onAddingField(
                            anotherPulmonaryRehabArray,
                            "anotherPulmonaryRehab",
                            setanotherPulmonaryRehabArray
                          );
                        }}
                        onClickDelete={() => {
                          onDeletingField(
                            anotherPulmonaryRehabArray,
                            "anotherPulmonaryRehab",
                            index,
                            setanotherPulmonaryRehabArray
                          );
                        }}
                        array={anotherPulmonaryRehabArray}
                        index={index}
                      />
                    </div>
                  )
                )}
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
