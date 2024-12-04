import Experience from "@/templates/experience";
import React from "react";
import { account } from "@/app/utils/appwrite";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function page() {
  const checkUser = async () => {
    try {
      const user = await account.get();
      console.log("User authenticated:", user);
      if (user) {
        redirect("/experience");
      }
    } catch (error) {
      console.log(error);
    }
  };
  await checkUser();
  
  return (
    <>
      <ToastContainer />
      <Experience />
    </>
  );
}

export default page;
