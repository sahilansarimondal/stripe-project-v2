// pages/success.tsx
"use client";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect } from "react";

const SuccessPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token") as string;
    // Here you can handle any logic related to a successful operation
    console.log("Success!");

    // Example: Redirecting to another page after some delay
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">
        Payment Success {searchParams.get("token")}
      </h1>
    </div>
  );
};

export default SuccessPage;
