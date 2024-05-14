import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  title: z
    .string()
    .min(
      3,
      "Размер файла в поле :attribute должен быть больше или равен :value Килобайт(а)"
    ),
  password: z.string().min(8, "eng kam 8 ta"),
});

export const ProductForm = ({ submit, initialValue, category }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolvers: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(submit)} className="w-[1100px]">
      <div className="border rounded-md p-4 mb-4">
        <div>
          <select
            {...register("category", {
              required: true,
              setValueAs: (value) => value.trim(),
            })}
            className="w-[300px] border px-2 py-1 rounded-md mb-3 outline-none text-[12px]"
            placeholder="Title"
            type="text"
            defaultValue={initialValue?.category}
          >
            {category.map((item) => (
              <option key={item.id} value={`${item.id},${item.title}`}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Input
            className="w-[250px]"
            {...register("title", {
              required: true,
              setValueAs: (value) => value.trim(),
            })}
            label="Название"
            type="text"
            variant="standart"
            helperText={
              errors?.title
                ? "Размер файла в поле :attribute должен быть больше или равен :value Килобайт(а)"
                : ""
            }
            defaultValue={initialValue?.title}
          />
        </div>
        <div className="flex items-center gap-4 mb-4 mt-4 ">
          <div>
            <Input
              className="w-[250px]"
              {...register("brand", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Бренд"
              type="text"
              variant="standart"
              defaultValue={initialValue?.brand}
              helperText={
                errors?.brand
                  ? "Размер файла в поле :attribute должен быть больше или равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
          <div>
            <Input
              className="w-[250px]"
              {...register("manufacturingCode", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Артикул производителя"
              type="text"
              variant="standart"
              defaultValue={initialValue?.manufacturingCode}
              helperText={
                errors?.manufacturingCode
                  ? "Размер файла в поле :attribute должен быть больше или равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
        </div>
        <div>
          <Input
            className="w-[250px]"
            {...register("country", {
              required: true,
              setValueAs: (value) => value.trim(),
            })}
            label="Страна производства"
            type="text"
            variant="standart"
            defaultValue={initialValue?.country}
            helperText={
              errors?.country
                ? "Размер файла в поле :attribute должен быть больше или равен :value Килобайт(а)"
                : ""
            }
          />
        </div>
        <div>
          <label className="block text-[12px] mt-4">Описание</label>
          <textarea
            {...register("des", {
              required: true,
              setValueAs: (value) => value.trim(),
            })}
            errors={errors?.des}
            className="w-[700px] h-[110px] border px-2 py-1 bg-gray-100 rounded-md mt-3 mb-3 outline-none text-[12px]"
            label="Описание"
            type="text"
            defaultValue={initialValue?.des}
            helperText={
              errors?.des
                ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                : ""
            }
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Input
              className="w-[250px]"
              {...register("code", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Вес с упаковкой, грамм"
              type="text"
              variant="standart"
              defaultValue={initialValue?.code}
              helperText={
                errors?.code
                  ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
          <div>
            <Input
              className="w-[250px]"
              {...register("packingLength", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Длина упаковки, мм"
              type="text"
              variant="standart"
              defaultValue={initialValue?.packingLength}
              helperText={
                errors?.packingLength
                  ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
          <div>
            <Input
              className="w-[250px]"
              {...register("packingWidth", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Ширина упаковки, мм"
              type="text"
              variant="standart"
              defaultValue={initialValue?.packingWidth}
              helperText={
                errors?.packingWidth
                  ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
          <div>
            <Input
              className="w-[250px]"
              {...register("packingHeight", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Высота упаковки, мм"
              type="text"
              variant="standart"
              defaultValue={initialValue?.packingHeight}
              helperText={
                errors?.packingHeight
                  ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
        </div>
      </div>
      <div className="border rounded-md p-4 mb-4">
        <div>
          <Input
            className="w-[250px]"
            {...register("img", {
              required: true,
              setValueAs: (value) => value.trim(),
            })}
            label="Фотографии"
            type="text"
            variant="standart"
            defaultValue={initialValue?.img}
            helperText={
              errors?.img
                ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                : ""
            }
          />
        </div>
        <div>
          <Input
            className="w-[250px]"
            {...register("color", {
              required: true,
              setValueAs: (value) => value.trim(),
            })}
            label="Цвет"
            type="text"
            variant="standart"
            defaultValue={initialValue?.color}
          />
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Input
              className="w-[250px]"
              {...register("vendorCode", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Артикул"
              type="text"
              variant="standart"
              defaultValue={initialValue?.vendorCode}
              helperText={
                errors?.vendorCode
                  ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
          <div>
            <Input
              className="w-[250px]"
              {...register("barcode", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Штрихкод"
              type="text"
              variant="standart"
              defaultValue={initialValue?.barcode}
              helperText={
                errors?.barcode
                  ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Input
              className="w-[250px]"
              {...register("price", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Цена"
              type="text"
              variant="standart"
              defaultValue={initialValue?.price}
              helperText={
                errors?.price
                  ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
          <div>
            <Input
              className="w-[250px]"
              {...register("discountPrice", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Цена со скидкой"
              type="text"
              variant="standart"
              defaultValue={initialValue?.discountPrice}
              helperText={
                errors?.discountPrice
                  ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
          <div>
            <Input
              className="w-[250px]"
              {...register("priceOzonPremium", {
                required: true,
                setValueAs: (value) => value.trim(),
              })}
              label="Цена Ozon Premium"
              type="text"
              variant="standart"
              defaultValue={initialValue?.priceOzonPremium}
              helperText={
                errors?.priceOzonPremium
                  ? "Размер файла в поле :attribute должен быть большеили равен :value Килобайт(а)"
                  : ""
              }
            />
          </div>
        </div>
      </div>
      <Button
        className="px-4 ml-[auto] mr-[auto] block"
        variant={"blue"}
        type={submit}
      >
        Сохранять
      </Button>
    </form>
  );
};
