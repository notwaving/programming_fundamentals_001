// function addVAT(price) {
//     //return price + (0.2 * price);
//     return price * 1.2;
// }

addVAT = (price) => price * 1.2;

// function getFullName (firstName, surname) {
//     return firstName + ' ' + surname ;
// }

getFullName = (firstName, lastName) => firstName + ' ' + lastName;

// function makeHalfPrice (price) {
//     return price / 2
// }

makeHalfPrice = (price) => price / 2;

function countBooks(arr) {
    return arr.length;
}

// change this to a ternary operator
function isInStock (book) {
    if (book.quantity > 0) {
        return true;
    } else {
       return false;
    }        
}

function getTotalOrderPrice(price, quantity) {
    return (price * quantity) * 1.2;
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};

/* Lots of formatting issues with this code, cut and pasted from Windows to Mac. 
Must remember to format as code snippet in future! */