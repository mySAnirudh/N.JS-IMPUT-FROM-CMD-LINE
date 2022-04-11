const fs =require('fs')

const input =process.argv;

if (input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}else if (input[2]=='ermove')
{
    fs.unlinkSync(input[3])
}
else{
    console.log("invalid input")
}
 // When you want to remove any file then write in terminal like this way : node ncrtfil.js add apple 'this is apple'