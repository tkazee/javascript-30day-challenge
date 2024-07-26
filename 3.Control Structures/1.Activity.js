//Task-1 : Check Number is positive or Negative or zero

const inpValue = require('readline');
const rl= inpValue.createInterface({
    input: process.stdin,
    output:process.stdout

})

const inputVal= rl.question('enter number : ',(num)=>{
    // console.log(num);
    // return num;
    // if(num>0){
        num>0? console.log(`Positive ${num}`):num==0?console.log(`Zero`):console.log(`Negative ${num}`);
    // }
    rl.close();
})


//Task-2 : Person is eligible use function method.

const readline = require('readline');

function getInput(prompt, callback){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question(prompt , (input)=>{
        // console.log(num);
        callback(input);

        rl.close();
    })
}

getInput('Enter value: ', (num)=>{
    // console.log(num);
    num>18?console.log('Vote eligible'):console.log('not eligible');
    
} )



