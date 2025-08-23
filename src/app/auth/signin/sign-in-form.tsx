"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hover } from "@/lib/hover";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type UserAuthForm = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAuthForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: UserAuthForm) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col w-[100%]" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[100%] text-3xl font-semibold tracking-widest mb-2 text-center">
        Masuk akun anda
      </div>
      <div className="w-[100%] relative">
        <Input
          className="w-[100%] p-4 rounded-sm"
          type="text"
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>
      <div className="w-[100%] relative mt-4">
        <Input
          className="w-[100%] p-4 rounded-sm"
          type={showPassword ? "text" : "password"}
          placeholder="Kata Sandi"
          suffix="Eye"
          onPressSuffix={() => setShowPassword(!showPassword)}
          {...register("password")}
          error={errors.password?.message}
        />
      </div>

      <Button
        className={cn("w-[320px] bg-leaf mt-6 mx-auto", hover.shadow)}
        type="submit"
      >
        Masuk
      </Button>
    </form>
  );
}

export default SignInForm;
