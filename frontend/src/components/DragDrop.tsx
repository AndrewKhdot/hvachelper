import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["XLSX"];
interface ChildProps {
  onValueChange: (newValue: any) => void;
}

function DragDrop({ onValueChange }: ChildProps) {
  const [file, setFile] = useState<any>(null);
  useEffect(() => {onValueChange(file)});
  useEffect(() => {setTimeout(()=> {console.log(file), 5000}) });
  const handleChange = (file: any) => {
    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;