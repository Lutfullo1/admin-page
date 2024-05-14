import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  title: z.string().min(15, "Введите название"),
  img: z.string().min(0, "Введите изображение"),
});

export const CategoryForm = ({ submit, initialValue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolvers: zodResolver(schema) });
  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="w-[600px]">
        <div>
          <Input
            {...register("title", {
              required: true,
              setValueAs: (value) => value.trim(),
            })}
            errors={errors?.title}
            label="Название"
            defaultValue={initialValue?.title}
            type="text"
            className="w-[400px]"
            helperText={errors?.title ? "Введите название" : ""}
          />
        </div>
        <div>
          <Input
            {...register("img", {
              required: true,
              setValueAs: (value) => value.trim(),
            })}
            label="Фотографии"
            type="text"
            defaultValue={initialValue?.img}
            className="w-[400px]"
            helperText={errors?.img ? "Введите название" : ""}
          />
        </div>
        <Button className="mt-4" variant="blue" type={submit}>
          Сохранять
        </Button>
      </form>
    </div>
  );
};
