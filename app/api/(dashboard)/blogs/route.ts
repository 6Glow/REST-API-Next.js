import connect from "@/lib/db";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
import User from "@/lib/models/user";
import Category from "@/lib/models/category";
import Blog from "@/lib/models/blog";

export const GET = async(request: Request) => {
  try{

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const categoryId = searchParams.get('categoryId');

    if(!userId || !Types.ObjectId.isValid(userId)){
      return new NextResponse(
        JSON.stringify({ message: "Invalid of missing userId" }), {
          status: 400,
        }
      )
    }

    if(!categoryId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid of missing categoryId" }), {
          status: 400
        }
      )
    }

    await connect();

    const user = await User.findById(userId);
    if(!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), { 
        status: 404
      }
    )
  }

  const category = await Category.findById(categoryId);
  if(!categoryId){
    return new NextResponse(
      JSON.stringify({ message: "Category not found" }), {
        status: 404
      }
    )
  }

  const filter: any ={
    user: new Types.ObjectId(userId),
    category: new Types.ObjectId(categoryId),
  };

  const blogs = await Blog.find(filter);
  return new NextResponse(JSON.stringify({ blogs }), {
    status: 200
  });

  }catch(error: any){
    return new NextResponse("Error in fetching blogs " + error.message, {
      status: 500
    });
  }
};