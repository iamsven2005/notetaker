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

  const handleNavigate = () => {
    if (inputValue.trim() !== "") {
      router.push(`/${inputValue}`);
    }
  };
// Inside TailwindAdvancedEditor2

const exportNotes = () => {
  const jsonContent = window.localStorage.getItem(`novel-content-${params.id}`);
  const markdownContent = window.localStorage.getItem(`markdown-${params.id}`);

  if (!jsonContent && !markdownContent) {
    alert("No content to export!");
    return;
  }

  const exportData = markdownContent || jsonContent;
  const blob = new Blob([exportData], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `notes-export-${params.id}-${Date.now()}.md`; // or .json for JSON content
  link.click();
};

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter page name"
          className="border px-3 py-2 rounded-lg"
        />
        <Button onClick={handleNavigate}>Go</Button>
        <Button onClick={() => exportNotes()}>Export Notes</Button>

      </div>

      <TailwindAdvancedEditor paramId={params.id} />

    </div>
  );
}

