
const { error } = require('console');
const fs = require('fs');

function JSONUpdat(key, value, file_path) {
    fs.readFile(file_path, "utf8" ,(err, data)=>{
        if(err){
             console.error("error reading file: ", err);
             return
            }
        let dataJs = JSON.parse(data)
        dataJs.forEach(obj => {
            if (key in obj){
                obj[key] = value
            } 
            else{
                obj[key] = value
            }
        });
        let dataJSON = JSON.stringify(dataJs)
        fs.writeFile(file_path, dataJSON, "utf8", (err)=>{
            if (err) {console.error("error writing on the file: ", err)}
            console.log('File successfully updated.');
        })
    })
}

// JSONUpdat("new_key", "Hi", "data.json")
JSONUpdat("name", "Abdo", "data.json")





















// Define the file path
// const filePath = 'example.txt';

// // Read the file asynchronously
// fs.readFile(filePath, 'utf8', (err, data) => { // this built-in method in node js using for reading a file
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
  
//   // Log the content of the file
//   console.log('File content:', data);
// });
// let content = "welcome mr zanaty in my file"
// fs.writeFile(filePath, content, "utf8", (err)=>{ // this built-in method in node js using for writing to a file
//     if (err) {
//         console.error("Error writing to file: ", err);
//         return
//     }
//     console.log('File successfully written.');
// })
// let dataFile = "data.json"
// fs.readFile(dataFile, "utf-8", (err,data)=>{
//     if(err){
//         console.error('Error reading file:', err)
//     }
//     let x = JSON.parse(data)
//     x.push(
//         {
//         "id": 4,
//         "name": "Charx",
//         "age": 25,
//         "email": "charx@example.com",
//         "address": "789 Oak St, Anothertown, TX",
//         "phone": "888-9012"
//       }
//       )
//       let y = JSON.stringify(x)
//     fs.writeFile(dataFile, y , "utf8",(err)=>{
//         if (err) {
//           console.error('Error writing to file:', err);
//           return;
//         }
        
//         console.log('File successfully updated.');
//     })
// })


// fs.unlink("deleted.html", (err)=>{ // this built-in method in node js using for delete a file
//     if (err) {
//         console.error('Error deleting file:', err)
//         return;
//     }
//     console.log('File successfully deleted.');
// })
// fs.stat(dataFile, (err, stat)=>{ //this built-in method in node js using in get  information about a file such as size and type etc
//     if (err) {
//         console.error('Error stat file:', err)
//         return;
//     }
//     console.log('File successfully get stat.');
//     console.log(stat.size);

// })