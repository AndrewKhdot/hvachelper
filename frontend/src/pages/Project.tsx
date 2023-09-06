import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import DragDrop from "../components/DragDrop";
import IElement from "../interfaces/IElement";
import searchSameNumbers from "../services/searchSameNumbers";
import RoomElement from "../components/RoomElement";
import ISameNuberElements from "../interfaces/ISameNuberElements";




function Project() {
    const XLSX = require('xlsx');
    const [dataUploaded, setDataUloaded] = useState<boolean>(false);
    const [essuesResolved, setEssuesResolved] = useState<Array<ISameNuberElements>>([]);
    const [file, setFile] = useState<any>(null);
    const [result, setResult] = useState<Array<IElement> | null>(null);
    const handleValueChange = (newValue: any) => {
        setFile(newValue);
      };
      useEffect(() => {if(file)
        {console.log(Object.keys(file[0]));
        setResult([])}}, [file]);
      useEffect(() => {if(file && result === null)
        {const keys = Object.keys(file[0]);
          let newResult: any = [];
          file.forEach((element: { [x: string]: any; }) => {
            let dataElem = {
              number : '',
              name: '',
              squer: 0,
              level: ''
            };
            for (let index = 0; index < keys.length; index++) {
              switch (index) {
                case 0:
                  dataElem.number = element[keys[index]];
                  break;
                case 1:
                  dataElem.name = element[keys[index]];
                  break;
                case 2:
                  dataElem.squer = element[keys[index]];
                    break;
                case 3:
                  dataElem.level = element[keys[index]];
                  break;
              
                default:
                  break;
              }              
            };
            
            newResult.push(dataElem);
            
          });
          setResult(newResult);
          setDataUloaded(true);
        }}, [file]);
        useEffect(() => {if(file)
          {  let newEssuesResolved = [];
            if(result?.length !==0 && result !== null) {
              newEssuesResolved = searchSameNumbers(result);
              console.log(newEssuesResolved);
              setEssuesResolved(newEssuesResolved);
            }
            console.log(essuesResolved)}}, [result]);

    return ( 
        <>Project
          { file ? <>Uploaded</> : <DragDrop onValueChange = {handleValueChange} />}
          { essuesResolved.length > 0  ? essuesResolved.map((element) => 
              <div>
                <div>{element.number}</div>
                <div>{element.elements.map(elem => <RoomElement room ={elem} />)}</div>
                </div>) : null}
        </>
     );
}

export default Project;