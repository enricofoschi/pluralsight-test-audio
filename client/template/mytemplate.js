/* Attaching events to my sample template */
Template.MyTemplate.events({

	/* Click event on main button */
	'click .btn-primary': function() {

		/* Calling the server side pay method */
		$('.blocker').stop(true, false).fadeIn(500);
		Meteor.call('pay', function (errors, result) {
			if(result) {
				$('.blocker').stop(true, false).fadeOut(250);
				alert("Paid");
				// Here you move on to the next page.
			}
		});
	}
});