"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/tailwind/ui/button";
import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor2";

interface Props {
  params: {
    id: string;  // Pass this id to the editor
  };
}

export default function Page({ params }: Props) {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  // Handle the button click to navigate to the dynamic route
  const handleNavigate = () => {
    if (inputValue.trim() !== "") {
      router.push(`/${inputValue}`); // Navigate to the dynamic route based on the input
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
      {/* Add the input box and button */}
      <div className="flex gap-2 mb-4">
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

      {/* Pass the `id` parameter as prop to the editor */}
      <TailwindAdvancedEditor paramId={params.id} />
    </div>
  );
}
