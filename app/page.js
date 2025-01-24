'use client'

import BlogItem from "@/Components/BlogItem";
import Bloglist from "@/Components/Bloglist";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { ToastContainer } from "react-toastify";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <ToastContainer theme="light"/>
      <Header/>
     
      <Bloglist/>
      <Footer/>
    </div>
    </>
  );
}
