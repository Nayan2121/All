/******SWitch Case******/ 

// {
//     let text;
//     let receipe = prompt("Choose Product:");
//     switch(receipe){
//         case "Tea":
//         text = "It is one of the most popular hot beverages in world and especially in India. A cup of milk tea (chai) in morning gives refreshing feel and put you on track of long hard day. It can be prepared with milk or milk powder and various types of plain or flavored tea powders. This recipe prepares Indian tea using milk, sugar, tea powder and water."
//         break;
//         case "coffe":
//             text = "Creamy, cozy, and deliciously frothy, my 4-ingredient recipe for cafe-style Hot Coffee is the perfect way to give yourself a little pick-me-up. Best of all, you don’t need any special equipment to make your cuppa taste as good as if a barista had done it for you, and it’ll be ready in less than 15 minutes!"
//             break;
//         default:
//             text = "Wrong Choice!!!";
//     } 
//     console.log(text);
// } 

/******* IF ELSE *******/

{
    let tea = "tea";
    let coffee = "coffee";
    let recipe = prompt("Select Recipe:");
    let store = recipe;
    let result = store.match(/([A-Z])\w+/gi);
    if (result == tea) {
        console.log("It is one of the most popular hot beverages in world and especially in India. A cup of milk tea (chai) in morning gives refreshing feel and put you on track of long hard day. It can be prepared with milk or milk powder and various types of plain or flavored tea powders. This recipe prepares Indian tea using milk, sugar, tea powder and water.");
    }
    else if (result == coffee) {
        console.log("Creamy, cozy, and deliciously frothy, my 4-ingredient recipe for cafe-style Hot Coffee is the perfect way to give yourself a little pick-me-up. Best of all, you don't need any special equipment to make your cuppa taste as good as if a barista had done it for you, and it'll be ready in less than 15 minutes!");
    }
    else {
        console.log("Wrong Choice!!!");
    }
}

/******* Ternary ******/

{
    let tea = "tea";
    let coffee = "coffee";
    let result = prompt("Select Your Choice:");

    let receipe = (result)

}