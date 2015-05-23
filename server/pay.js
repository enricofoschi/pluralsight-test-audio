/* Metheor Payment Methods */
Meteor.methods({
	/* Simplified method - just for training purposes */
	pay: function() {

		/* Complex and potentially expensive payment logic - currently mocked */
		Meteor._sleepForMs(5000);

		return true;
	}
});