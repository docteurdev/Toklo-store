import bcrypt from "bcrypt";

import { pool } from "../db";

export async function POST(request) {
  const { userName, email, permissionEmail, password } = await request.json();
  try {
    const queryResult = await new Promise((resolve, reject) => {
      pool.query(
        'SELECT * FROM users where users.permissionEmail = "permissionEmail@gmail.com"',
        function (err, results) {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });

    if(queryResult.length){

      const hash = bcrypt.hashSync(password, 10);
      const newUser = await new Promise((resolve, reject) => {
        pool.query(
          "INSERT INTO  users (userName, email, permissionEmail, password) VALUES (?, ?, ?, ?)",
          [userName, email, permissionEmail, hash],
          function (error, results) {
            if(error){
              reject(error)
            }else{
              resolve(results)
            }
          }
        );
      });
  
      // console.log("µµµµµµµµµµµµµµµµµµµµ", { userName, email, permissionEmail, password });
  
      return new Response(JSON.stringify({message: "you're been registered successfully login now !", status: 200}));
    }

  } catch (error) {
    console.error(error);
    return new Response({message: "Error occurred", error, status: 500 });
  }
}
