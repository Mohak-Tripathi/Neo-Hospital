import path from'path';
import fs from"fs";

var directories = path.join("__dirname"+"./data.json");
function deleteData(value){
    var x = new Promise((resolve,reject)=>{
            fs.writeFile('data.json',JSON.stringify(value),function(err){
              if(err) throw err;
              else{
                 resolve(true);
                }
            })
    })
    .then((d)=>{
        return d;
    })
    .catch((err)=>{
        return err;
    })
      return x
}




export default deleteData