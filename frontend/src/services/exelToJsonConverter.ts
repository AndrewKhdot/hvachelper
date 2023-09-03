const XLSX = require('xlsx');
let jsonData :any;
let jsonString : any;
let workbook : any;

function exelToJsonConverter(file: any) {
    if(true) {
        console.log('is not exist')
    }
    else {
    workbook = XLSX.read(file, { type: 'buffer' });
    console.log(workbook)
    let sheet =  workbook.Sheets['Sheet1'];
    console.log(sheet)
    jsonData = XLSX.utils.sheet_to_json(sheet);
    jsonString = JSON.stringify(jsonData, null, 2);
    console.log(jsonString);
    return jsonString  
    }
}
   

export default exelToJsonConverter;