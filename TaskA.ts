let makeNovel = function(writerName: string, novelTitle: string, them?: number) {
    let novel: {[key: string]: string | number} = {};
    novel["writer"] = writerName;
    novel["title"] = novelTitle;
    novel["them"] = them !== undefined ? them : "Unknown";
    return novel;
}

// Function calls with at least three different albums
let novel1 = makeNovel("Ibne Safi", "142", 120);
let novel2 = makeNovel("Mazher Kaleem M.A", "750");
let novel3 = makeNovel("Safdar Shaheen", "Imran Series", 350);

// Printing the albums
console.log(JSON.stringify(novel1));
console.log(JSON.stringify(novel2));
console.log(JSON.stringify(novel3));