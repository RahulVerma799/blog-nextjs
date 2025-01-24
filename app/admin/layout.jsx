import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponent/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Layout({children}){
    return(
        <div>
            <div className="flex">
                <ToastContainer theme="dark"/>
                <Sidebar/>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center w-full py-2 max-h-[] px-12 border-b border-black">
                    <h3 className="font-medium">Admin panel </h3>
                    <Image src={assets.profile_icon} width={40} alt=""/>
                    </div>
                    {children}
                </div>
            </div>
          
        </div>
    )

}