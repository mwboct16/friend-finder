var friendsData = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
        var newUser = req.body;

        friendsData.push(newUser);

        var totalDifference = 0;
        var bestMatch = 0;

        for (var i = 0; i < friendsData.length; i++){

            var diff = 0;
            for (var j = 0; j < newUser.length; j++) {
                diff += Math.abs(friendsData[i].scores[j] - newUser[j]);
            }

        }
        


        

    });

}