/* Week 8
    javaScript file
    Author: Bob Ruzga
    Date: June 20, 2024
*/

/* Week 8 Coding Step Requirements:
    Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
        Use at least one array.
        Use at least two classes.
        Your menu should have the options to create, view, and delete elements.
*/

    // Album Class to collect album information
    class Album {
        constructor(name, band, media){
            this.name = name;
            this.band = band;
            this.media = media;
        }

        viewAlbum(){
            return `I have ${this.name} by ${this.band} on ${this.media}`;
        }
    }
    // End of Album class

    // Collection Class Array to collect my albums by Genre
    class Collection {
        constructor(genre){
            this.genre = genre;
            this.mycollection = [];
        }

        addAlbum(album){
            this.mycollection.push(album);
        }

        viewMyCollection(){
            return `My genre of ${this.genre} has ${this.mycollection.length} albums in it`;
        }

        deleteMyCollection(){
            alert("In deleteMyCollection mode w/i Collection");
        }
    }
    // End of Collection Class

    // Menu Code:
    class Menu { // what drives the application and our choices
        constructor() {
        this.collection = [];
        this.selectedCollection = null; // manage one Collection at a time
        }
        
        start() { // entry point to application
        let selection = this.showMainMenuOptions(); 
        while (selection != 0) {
        switch(selection) {

        case '1' :
        this.createCollection();
        break;
        case '2' :
        this.viewCollection();
        break;
        case '3' :
        this.deleteCollection();
        break;
        case '4' :
        this.displayCollection();
        break;
        default:
        selection = 0;
        }
        selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
        }
        
        4
        showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create a new Collection
        2) view a Collection
        3) delete a Collection
        4) display all Collections
        `);
        }
        
        showCollectionMenuOptions(collectionInfo) {
        return prompt(`
        0) back
        1) add a new Album
        2) delete a Album
        -----------------
        ${collectionInfo}
        `);
        }
        
        displayCollection() {
        let collectionString = '';
        for (let i = 0; i < this.collection.length; i++) {
        collectionString += i+ ') ' + this.collection[i].genre + '\n';
        }
        alert(collectionString);
        }
        
        createCollection() {
        let genre = prompt('Enter Genre for the Collection: ');
        this.collection.push(new Collection(genre));
        //  debug console.log(this.collection);
        }
        
        viewCollection() {
        let index = prompt("Enter the index of the Collection that you want to view:");
        if (index > -1 && index < this.collection.length) {
            this.selectedCollection = this.collection[index];
            let description = 'Genre: ' + this.selectedCollection.genre + '\n';
            description += ' ' + this.selectedCollection.viewMyCollection() + '\n ';
            
            for (let i = 0; i < this.selectedCollection.mycollection.length; i++) {
                description += i + ') ' + this.selectedCollection.mycollection[i].viewAlbum() + '\n';
            }
            let selection1 = this.showCollectionMenuOptions(description);
            switch (selection1) {
                case '1' :
                this.createAlbum();
                break;
                case '2' :
                this.deleteAlbum();
                }
            } // validate user input
        }
        
        deleteCollection() {
        let index = prompt('Enter the index of the Genre that you wish to delete: ');
        if (index > -1 && index < this.collection.length) {
        this.collection.splice(index,1);
        }
        }
        
        createAlbum() {
        let name = prompt('Enter the name of the Album: ');
        let band = prompt("Who's the band: ");
        let media = prompt("What is it on: ")
           this.selectedCollection.addAlbum(new Album(name, band, media));
        }
        
        deleteAlbum() {
        let index = prompt('Enter the index of the album that you wish to delete: ');
        if (index > -1 && index < this.selectedCollection.mycollection.length) { 
            this.selectedCollection.mycollection.splice(index,1);
        }
        }
        }
        let menu = new Menu();
        menu.start();
        
        