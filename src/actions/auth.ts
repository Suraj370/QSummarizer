'use server';
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { APIError } from "better-auth/api";
import { prisma } from "@/lib/prisma";


interface State {
    errorMessage?: string | null;
  }

export async function signIn(prevState: State, formData: FormData) {
    const rawFormData = {
      email: formData.get("email") as string,
      password: formData.get("pwd") as string,
    };
  
    const { email, password } = rawFormData;
  
    try {
      await auth.api.signInEmail({
        body: {
          email,
          password,
        },
      });
      console.log("Signed in");
    } catch (error) {

      if (error instanceof APIError) {
        console.log(error.message, error.status)

        switch (error.status) {
          case "UNAUTHORIZED":
            return { errorMessage: "Incorrect email/password" };
          case "BAD_REQUEST":
            return { errorMessage: "Invalid email." };
          default:
            return { errorMessage: "Something went wrong." };
        }
      }
      console.error("sign in with email has not worked", error);
      throw error;
    }
    redirect("/workspace");
  }

  
  export async function signUp(prevState: State, formData: FormData) {
    const rawFormData = {
      email: formData.get("email") as string,
      password: formData.get("pwd") as string,
      firstName: formData.get("firstname"),
      lastName: formData.get("lastname"),
    };
  
    const { email, password, firstName, lastName } = rawFormData;
  
    try {
      await auth.api.signUpEmail({
        body: {
          name: `${firstName} ${lastName}`,
          email,
          password,
        },
      });
    } catch (error) {
      if (error instanceof APIError) {
        switch (error.status) {
            
            
          case "UNPROCESSABLE_ENTITY":
            return { errorMessage: "User already exists." };
          case "BAD_REQUEST":
            return { errorMessage: "Invalid email." };
          default:
            return { errorMessage: "Something went wrong." };
        }
      }
      console.error("sign up with email and password has not worked", error);
    }
    redirect("/workspace");
  }


export  async function searchAccount(email: string){
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
    return !!user;
  }