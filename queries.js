/* Fill out these functions using Mongoose queries*/

mongoose = require('mongoose');
Schema = mongoose.Schema;
Listing = require('./ListingSchema.js');
config = require('./config');


mongoose.connect(config.db.uri);

var findLibraryWest = function() {
    Listing.findOne({'name': 'Library West'}, 'code name coordinates address', function (err, listingData) {
        if (err) throw err;
        console.log(listingData)
    });
    /*
      Find the document that contains data corresponding to Library West,
      then log it to the console.
     */
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This corresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    Listing.findOneAndRemove({'code': 'CABL'}, 'code name coordinates address', function (err, listingData) {
        if (err) throw err;
        console.log("\nDeleted: \n\n", listingData)
    });

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
    Listing.findOneAndUpdate({'code': 'PHL'}, {'address': '102 Phelps Lab, Gainesville, FL 32611'}, function (err, listingData) {
        if (err) throw err;
        console.log("\nUpdated: \n\n", listingData)
    });
};
var retrieveAllListings = function() {
    Listing.find(function (err, listingData) {
        if (err) throw err;
        console.log("\nAll Listings: \n\n", listingData)
    })
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
