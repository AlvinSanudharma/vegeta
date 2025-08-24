import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Get all users",
      data: [
        {
          id: 1,
          name: "Alvin",
        },
      ],
    },
    {
      status: 200,
    }
  );
}

async function POST() {
  return NextResponse.json(
    {
      success: true,
      message: "New user created",
      data: [
        {
          id: 2,
          name: "Sanudharma",
        },
      ],
    },
    {
      status: 200,
    }
  );
}
