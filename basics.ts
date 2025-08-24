let username: string = "Jane Doe";
let age: number = 30;

function greet(user: string, number: number): string{
    return `hello, ${user}, ${number}`;
}

console.log(greet(username, age))