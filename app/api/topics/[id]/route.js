import connectDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();

  await connectDB();

  // Use findByIdAndUpdate
  const updatedTopic = await Topic.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );

  if (!updatedTopic) {
    return NextResponse.json({ message: "Topic not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "Topic Updated", topic: updatedTopic },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectDB();

  const topic = await Topic.findOne({ _id: id });

  if (!topic) {
    return NextResponse.json({ message: "Topic not found" }, { status: 404 });
  }

  return NextResponse.json({ topic }, { status: 200 });
}
