import { saveAs } from "file-saver";
import { toast } from "sonner";

export const saveFile = async (input) => {
  try {
    const blob = new Blob([input], { type: "text/markdown" });
    saveAs(blob, "markit.md");
    toast.success("File save successfull");
  } catch (err) {
    console.log("Could not save file", err);
    toast.error("Saving file failed");
  }
};
