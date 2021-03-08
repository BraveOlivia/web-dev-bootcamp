var favoriteBooks = [];

// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName){
	if (!bookName.includes("Great")) {
		favoriteBooks.push(bookName);
	}
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks(){
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	// console.log('Favorite Books: '+favoriteBooks.length);
	for (let book of favoriteBooks){
		console.log(book);
	}
}


addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();

var oli ="olivia";
if(!oli){
	console.log("reach here");
}

