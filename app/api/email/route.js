import connectDb from "@/lib/config/db";
import emailmodels from "@/lib/model/emailmodel";
import { NextResponse } from "next/server";

export async function POST(request){
    await connectDb();
    const FormData= await request.formData();
    const emailData={
        email:`${FormData.get('email')}`,
    }
    await emailmodels.create(emailData);
    return NextResponse.json({success:true,msg:"email subscribe successfully"});
}

export async function GET(request){
    await connectDb();
    const emails= await emailmodels.find({})
    return NextResponse.json({emails});

}


export async function DELETE(request){
    await connectDb();
    const id= await request.nextUrl.searchParams.get('id');
     await emailmodels.findByIdAndDelete(id)
     return NextResponse.json({success:true,msg:"Email deleted"})
};