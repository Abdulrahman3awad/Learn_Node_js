const { error } = require('console');
const fs = require('fs');

function JSONUpdate(key, value, file_path) {
    fs.readFile(file_path, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file: ", err);
            return;
        }

        try {
            let dataJs = JSON.parse(data);
            let splitKey = key.split(".");
            if (splitKey.length >= 2) {
                // Check if the nested structure exists before setting the value
                if (!dataJs[splitKey[0]]) {
                    console.error(`Property '${splitKey[0]}' does not exist in the object.`);
                    return;
                }
                dataJs[splitKey[0]][splitKey[1]] = value;
            } 
            let dataJSON = JSON.stringify(dataJs); // Add indentation for better readability
            fs.writeFile(file_path, dataJSON, "utf8", (err) => {
                if (err) {
                    console.error("Error writing to the file: ", err);
                } else {
                    console.log('File successfully updated.');
                }
            });
        } catch (error) {
            console.error("Error parsing JSON data: ", error);
        }
    });
}

// Test the function
JSONUpdate("user_2.name", "Abdo", "data.json");




















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