/* Attaching events to my sample template */
Template.MyTemplate.events({

	/* Click event on main button */
	'click .btn-primary': function() {

		/* Calling the server side pay method */
		Meteor.call('pay', function (errors, result) {
			if(result) {
				alert("Paid");
				// Here you move on to the next page.
			}
		});
	}
});