/*

promises is the way for js 
 -> to do non-blocking code

functions
 -> console hello world
 -> counts 0-bigint
 -> bye welcome

*/

function hello () {
    console.log ("Hello World!")
}

function countToN() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        for (let i=0; i<1000000000; i++) {}
        console.log ("Complete counting");
        resolve ("Done");
        }, 0)
    });
}


function goodbye () {
    console.log ("Goodbye for now");
}

async function main () {
    
    let y = await countToN ();
    console.log (y);

    let x = hello ();
    console.log (x);

    let z = goodbye ();
    console.log (z);
}

main ()
console.log ("Completed all work")

