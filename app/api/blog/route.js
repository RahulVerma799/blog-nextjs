import connectDb from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile } from 'fs/promises';
import blogModel from "@/lib/model/blogModel";
import fs from 'fs'

export async function GET(request){

    await connectDb(); 
    const blogId=request.nextUrl.searchParams.get('id');
    if(blogId){
        const blog=await blogModel.findById(blogId);
        return NextResponse.json(blog);
    }
    
    const blogs=await blogModel.find({});
    return NextResponse.json({blogs})
}


export async function POST(req){

    const formData=await req.formData();
    const timeStamp=Date.now(); 
    connectDb();

    const image=formData.get('image');
    const imageByByte=await image.arrayBuffer();
    const buffer=Buffer.from(imageByByte);
    const path=`./public/${timeStamp}_${image.name}`

    await writeFile(path,buffer);

    const imgUrl=`/${timeStamp}_${image.name}`

        const blogData={
            title:`${formData.get('title')}`,
            description:`${formData.get('description')}`,
            category:`${formData.get('category')}`,
            author:`${formData.get('author')}`,
            image:`${imgUrl}`,
            authorImg:`${formData.get('authorImg')}`,
        }

        await blogModel.create(blogData);
        console.log("blog saved");
        
    return NextResponse.json({success:true,msg:'blog Added'});

}

export async function DELETE(req) {
    await connectDb(); 
    const id= await req.nextUrl.searchParams.get('id');
    const blog= await blogModel.findById(id)
    fs.unlink(`./public${blog.image}`,()=>{})
    await blogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:'blog deleted'})
}