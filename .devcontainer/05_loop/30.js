// filter most uselful -> works only on arrays



const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num>4)   // scope open kiye to return keyword krna pagea {}->scope

// console.log(newNums)


const library = {
    books: [
        { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { id: 2, title: "1984", author: "George Orwell", year: 1949 },
        { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
        { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
        { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
        { id: 7, title: "Moby-Dick", author: "Herman Melville", year: 1851 },
        { id: 8, title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
        { id: 9, title: "The Odyssey", author: "Homer", year: "8th century BC" },
        { id: 10, title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866 }
    ]
};

const userBooks = library.books.filter((bk) => bk.year >= 1866 && bk.id>5);
// console.log(userBooks);
 //  map

const nums = [1,2,3,4,5,6,7,8]

const newN = nums.map( (num) => num * 10)
                 .map( (num) => num+1)
                 .filter( (num) => num>=40)
// console.log(newN)


// reduce
const a = [1, 2, 3]
const my = a.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
},0)
console.log(my)      // may usefull to add all elements in array 