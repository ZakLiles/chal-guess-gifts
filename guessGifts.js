const guessGifts = (wishlist, presents) => {
    return wishlist.filter(wish => {
        return presents.some(present => {
            return wish.size === present.size && wish.clatters === present.clatters && wish.weight === present.weight
        })
    }).map(guess => guess.name);
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(wishlist,presents))