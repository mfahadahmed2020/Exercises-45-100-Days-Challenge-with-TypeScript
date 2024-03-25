let makeAlbum = function(artistName: string, albumTitle: string, tracks?: number) {
    let album: {[key: string]: string | number} = {};
    album["artist"] = artistName;
    album["title"] = albumTitle;
    album["tracks"] = tracks !== undefined ? tracks : "Unknown";
    return album;
}

// Function calls with at least three different albums
let album1 = makeAlbum("Adele", "21", 12);
let album2 = makeAlbum("Taylor Swift", "1989");
let album3 = makeAlbum("Ed Sheeran", "Divide", 16);

// Printing the albums
console.log(JSON.stringify(album1));
console.log(JSON.stringify(album2));
console.log(JSON.stringify(album3));