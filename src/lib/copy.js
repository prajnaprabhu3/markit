import { toast } from "sonner";

export const Copy = async (input) => {
  try {
    await navigator.clipboard.writeText(input);
    // alert("Copied to clipboard");
    toast.success("Copied successfully");
  } catch (err) {
    console.log("Unable to copy to clipboard", err);
    // alert("Copy to clipboard failed");
    toast.error("Copy to clipboard failed");
  }
};
