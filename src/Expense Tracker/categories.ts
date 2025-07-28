const categories = ["Entertainment", "Utilities", " Groceries"] as const;

// categories.push("eeee");
// Because we can still change the value of a const by array methodes like .pop() or .slice(), we have to write "as const" at the end of the immutable const

export default categories