const guessGifts = (wishlist, presents) => {
    return wishlist.filter(gift => {
        return presents.some(present => {
            return gift.size === present.size && gift.clatters === present.clatters && gift.weight === present.weight
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