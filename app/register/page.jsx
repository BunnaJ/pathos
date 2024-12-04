"use client";

import { database, account } from "../utils/appwrite";
import { ID, Query } from "appwrite";
import Register from "../../templates/register";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Check if user already exists in the database
      const existingUsers = await database.listDocuments("pathosID", "formsID", [
        Query.equal("email", formData.email),
      ]);

      if (existingUsers.total > 0) {
        const userDetails = existingUsers.documents[0]
        toast.error(`User with this ${userDetails.email } already exists.`);
       router.push("/experience");

        console.log(existingUsers)
        setIsLoading(false);
        return;
      }

      // Create a new document (register user in the database)
      const document = await database.createDocument(
        "pathosID",
        "formsID",
        ID.unique(),
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        }
      );

      console.log("Document created:", document);

      // Log in the user immediately after registration
      await account.createSession(formData.email, formData.password);

      // Debugging session creation
      const currentUser = await account.get();
      console.log("Current User:", currentUser);

      if (currentUser) {
        toast.success("Registration successful!");
        router.push("/experience");
      }
    } catch (error) {
      console.error("Error during registration or navigation:", error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Register
        handleDataSubmit={handleSubmit}
        isLoadingData={isLoading}
        handleChangeData={handleChange}
        formDataHandle={formData}
      />
    </>
  );
}
