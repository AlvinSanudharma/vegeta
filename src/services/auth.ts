import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    register: builder.mutation<any, any>({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
