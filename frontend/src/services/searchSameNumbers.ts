import IElement from "../interfaces/IElement";
import ISameNuberElements from "../interfaces/ISameNuberElements";

function searchSameNumbers(data: Array<IElement> | null) : Array<ISameNuberElements> {
    let result: Array<ISameNuberElements> = [];
    if(data) {
    data.forEach((element, index) => {
        let newElem = {
            number: element.number,
            elements: [element]
        }
        for (let i = index + 1; i < data.length; i++) {
            if(element.number === data[i].number) {
                newElem.elements.push(data[i]);
            }
        }
        if(newElem.elements.length > 1) {
            result.push(newElem);
        }
          })
       
        return result;
    }
    else {
        return [];
    }
  
}
   

export default searchSameNumbers;