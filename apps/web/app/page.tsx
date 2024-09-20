"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";
import { Button } from "@/components/tailwind/ui/button";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  // Handle the button click to navigate to the dynamic route
  const handleNavigate = () => {
    if (inputValue.trim() !== "") {
      router.push(`/${inputValue}`); // Navigate to the dynamic route
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter page name"
          className="border px-3 py-2 rounded-lg"
        />
        <Button
          onClick={handleNavigate}
        >
          Go
        </Button>
      </div>
      <TailwindAdvancedEditor />
    </div>
  );
}
