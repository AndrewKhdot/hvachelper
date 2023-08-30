import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import DragDrop from "../components/DragDrop";

function Project() {
    const XLSX = require('xlsx');
  /*   const fs = require('fs'); */
    let finalObject = {a:{}};
    let data: any;
    let a: any;
    const [file, setFile] = useState<any>(null);
    const handleValueChange = (newValue: any) => {
        setFile(newValue);
      };
    useEffect(() => { if(file) 
         {data = XLSX.read(file, { type: 'buffer' }); data.SheetNames.forEach((sheetName: any )=> {
            let rowObject = XLSX.utils.sheet_to_json(data.Sheets[sheetName]);
            finalObject.a = rowObject;
          });}});
    useEffect(() => {if(file) {console.log(finalObject)}});
    
    return ( 
        <>Project
          { file ? <>Uploaded</> : <DragDrop onValueChange = {handleValueChange} />}
        </>
     );
}

export default Project;