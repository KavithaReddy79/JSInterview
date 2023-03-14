const players1 = require(`./players.json`);
var assert = require('chai').assert;

let wktKeeper = 0, forerignPlayers = 0;
players1.player.forEach(element =>{

	if(element.role == 'Wicket-keeper'){
		wktKeeper++;
	}

	if(element.country != 'India'){
		forerignPlayers++;
	}
});

function validateWktKeeper(wktK){
	console.log("Validating the Wkt Keeper value as ", wktK);
	assert.equal(wktK, 1);
	
}

function validateForiegnPlayers(Player){
	console.log("Validating the forerignPlayers value as ", Player);
	assert.equal(Player, 4);
}


validateForiegnPlayers(forerignPlayers);
validateWktKeeper(wktKeeper);
