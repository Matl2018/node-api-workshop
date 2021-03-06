const express = require("express");
const parser = require("body-parser");
const app = express();
app.use(parser.json());

let albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0"
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
  }
];
app.get("/albums", function(req, res) {
  res.send(albumsData);
});
app.get("/album/:albumId", function(req, res) {
  console.log(req.params.albumId);

  res.send(albumsData.find(album => album.albumId === req.params.albumId));
});
app.get("/", function(req, res) {
  res.send("Hello Code yr Future");
});
app.get("/me", (req, res) => {
  res.send("Just my name");
});
app.get("/students", function(req, res) {
  res.send("There is about 12 of us today! ");
});
app.post("/postAlbum", function(req, res) {
  albumsData.push(req.body);
  res.send(albumsData);
});
app.delete("/album/:albumId", (req, res) => {
  albumsData = albumsData.filter(album => album.albumId !== req.params.albumId);
  res.send(albumsData);
});
app.delete("/album2/:albumId", (req, res) => {
  let albumIdData = albumsData.map(album => album.albumId);
  let albumIndex = albumIdData.indexOf(req.params.albumId);
  albumsData.splice(albumIndex, 1);
  res.send(albumsData);
});

app.put("/album/:albumId", (req, res) => {
  let albumToUpdate = albumsData.find(
    album => album.albumId === req.params.albumId
  );
  albumToUpdate.collectionName = req.body.collectionName;
  albumToUpdate.primaryGenreName = req.body.primaryGenreName;
  res.send(albumToUpdate);
});
app.listen(3000, () => {
  console.log("Server listening on port 3000! ready for requests ");
});
