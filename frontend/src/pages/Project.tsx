import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import DragDrop from "../components/DragDrop";

interface IElement {
  number: string;
  name: string;
  squer: number;
  level: string;
}

function Project() {
    const XLSX = require('xlsx');
  /*   const fs = require('fs'); */
    let finalObject = {Sheet1:{}};
    let jsonData :any;
    let jsonString : any;
    const [file, setFile] = useState<any>(null);
    const [result, setResult] = useState<Array<IElement>>([]);
    const handleValueChange = (newValue: any) => {
        setFile(newValue);
      };
      useEffect(() => {if(file)
        {console.log(file)}}, [file]);
   /*  useEffect(() => { if(file) 
         {
          jsonData = XLSX.utils.sheet_to_json('Sheet1');
          jsonString = JSON.stringify(jsonData, null, 2);
        }});
    useEffect(() => {if(file)
          {console.log(file)}});
    useEffect(() => {if(file)
       {console.log(jsonString)}});
     */
    return ( 
        <>Project
          { file ? <>Uploaded</> : <DragDrop onValueChange = {handleValueChange} />}
        </>
     );
}

export default Project;