// const items = ['book', 'table', 'chair', 'kite'];

// const users =[
//     {name: 'bard' },
//     {name: 'john' },
//     {name: 'cole' }
// ]

// for (const item of items ){
//     console.log(item);
// }


// for (const user of users){
//     console.log(user.name)
// }



// for in loop 

// const colorObj = {
//     col1 : 'red',
//     col2  :   'blue',
//     col3  :   'green'
    
// }


// for (const key in colorObj){
//     console.log(key, colorObj[key])
// }




// forEach 

// const socials = ['twitter', 'linkedin', 'facebook', 'instagram'];

// socials.forEach(function(item){
//     console.log(item)

// })


// filter .......

// const numbers = [1,2,3,4,5,6,6,7,7,8,9,9];

// const evenNumbers = numbers.filter(function(number){
//     return number % 2 ===0;
// })

// console.log(evenNumbers);

//  numbers.forEach(function(number){
//     return number % 2 === 0;
// })

// console.log(evenNumbers);


// Map...

// Reduce
// const numbers = [1,2,3,4,5,6,6,7,7,8,9,9];


// const sum = numbers.reduce(function(previousValue, currentValue){
//     return previousValue +currentValue ;
// }, 0)
// console.log(sum)


const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];


  const youngPeople = people.filter((person)=>
     person.age <= 25 )
     .map((person)=>({
        name:`${person.firstName} ${person.lastName}`,
        email:person.email
     }))
// console.log(youngPeople);


const numbers = [2, -30, 50, 20, -12, -9, 7];

const posituveSum = numbers
.filter((number)=>number > 0)
.reduce((acc, curr)=> acc + curr, 0)

console.log(posituveSum)