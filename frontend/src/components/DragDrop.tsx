import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["XLSX", "JSON"];
interface ChildProps {
  onValueChange: (newValue: any) => void;
}

function DragDrop({ onValueChange }: ChildProps) {
  const [jsonData, setJsonData] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  useEffect(() => { if(file) {
    let fileType = file.name.slice(file.name.indexOf(".") + 1);
    if (fileType !== 'json'){
      onValueChange(null)
      console.log("service don't work")
    }
    else{
      if (file) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          try {
           
                const parsedData = JSON.parse(e.target?.result as string);
                setJsonData(parsedData);
              }
            
           catch (error) {
            console.error('Error parsing JSON:', error);
            setJsonData(null);
          }};
          reader.readAsText(file);
        onValueChange(jsonData)
      }
    console.log(file.name.slice(file.name.indexOf(".") + 1));
    }
  }}, [file]);
  const handleChange = (file: any) => {

    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;