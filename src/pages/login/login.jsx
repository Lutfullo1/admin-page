import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "./service/useLogin";
import { saveState } from "../../config/storage";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import loginImg from "../../assets/img/login-img.jpg";

const schema = z.object({
  email: z.string().email("Enter your email"),
  password: z.string().min(8, "eng kam 8 ta"),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolvers: zodResolver(schema) });
  const { mutate, isPending } = useLogin();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        Cookies.set("user_token", res.accessToken, { expires: 1 });
        saveState("user", res.user);
        navigate("/app", { replace: true });
      },
    });
    reset();
  };
  return (
    <div className="bg-blue-400 fixed inset-0 flex items-center justify-center">
      <div className="w-[600px] shadow-lg">
        <img src={loginImg} alt="" className="w-full rounded-l-lg shadow-xl" />
      </div>
      <form
        className="flex flex-col justify-center gap-3 w-[400px] h-[537px] p-5 bg-white shadow-lg rounded-r-lg"
        onSubmit={handleSubmit(submit)}
      >
        <p className="text-center text-[24px] font-[700]">Login</p>
        <div>
          <Input
            {...register("email", { required: true })}
            errors={errors?.email}
            label="Email"
            placeholder="email"
            defaultValue="olivier@mail.com"
            type="email"
            helperText={errors?.email ? "Enter email" : ""}
            variant="standard"
            className="w-full"
          />
        </div>
        <div>
          <Input
            {...register("password", { required: true })}
            errors={errors?.password}
            label="Password"
            placeholder="password"
            defaultValue="bestPassw0rd"
            type="password"
            helperText={errors?.password ? "Enter password" : ""}
            variant="standard"
            className="w-full"
          />
        </div>
        <Button className="w-full" variant="blue" type={submit}>
          Login
        </Button>
      </form>
    </div>
  );
};
