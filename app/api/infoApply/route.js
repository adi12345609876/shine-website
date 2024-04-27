import connectMongoDb from "@/libs/mongodb";
import infoApplyModel from "@/models/infoApply";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, name, pnumber } = await request.json();
  await connectMongoDb();
  await infoApplyModel.create({ email, name, pnumber });
  return NextResponse.json(
    { message: "Created info for applicant" },
    { status: 201 }
  );
}
