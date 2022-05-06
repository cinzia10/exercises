// //// CICLI E LOOP

// const list = [23, 13, 34, 56, 99, 101]
// const newList = [];

// //// STAMPARE IL NUMERO 56
// // for (const element of list) {
// //     if (element === 56) {
// //         newList.push(element)
// //     }
// // }

// //// STAMPARE I NUMERI SUCCESSIVI AL 56
// // for (const element of list) {
// //     if (element > 56){
// //         newList.push(element)
// //     }
// // }


// //// STAMPARE TUTTI I NUMERI TRANNE IL 56
// // for (const number of list) {
// //     if (number !== 56) {
// //         newList.push(number)
// //     }
// // }


// //// STAMPARE SOLO I NUMERI DISPARI
// // for (const number of list) {
// //     if (number%2!==0){
// //         newList.push(number)
// //     }
// // } 


// console.log(newList)






// ///// CONDIZIONALI
// const message = prompt('Inserire uno dei seguenti', 'puoi inserire a, b, c, d');

//     if (message === 'a') {
//         alert(1);
//     } else if (message === 'b'){
//         alert(2);
//     } else if (message === 'c'){
//         alert(3);
//     } else if (message === 'd'){
//         alert(4);
//     }

// switch (message) {
//     case 'a':
//         alert(1);
//         break;
//     case 'b':
//         alert(2)
//         break;
//     case 'c':
//         alert(3)
//         break;
//     case 'd':
//         alert(4)
//         break;
// }




if (isVettoriale) {
    const risultato = numero
    console.log("risultato: " + risultato);
} else {
    console.log("operazione non ammessa")
}

function getResult(){
    const operation = document.getElementById("operation").value;
    const number = document.getElementById("number").value;
    switch(operation){
        case "quadrato":
            document.write(number);
        break

        case "Red":
            document.write("Just like wine!");
        break
        default:
            document.write("Suit yourself then...");

        }
    }
