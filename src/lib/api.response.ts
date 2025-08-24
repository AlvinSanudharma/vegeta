import { NextResponse } from "next/server";

interface IResponse {
  message?: string;
  data?: any;
  status?: ResponseInit["status"];
}

const Response = ({ message = "success", data, status = 200 }: IResponse) => {
  return NextResponse.json(
    {
      success: true,
      message: message,
      data: data,
    },
    {
      status: status,
    }
  );
};

export default Response;
