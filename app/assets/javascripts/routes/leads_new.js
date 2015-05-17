App.LeadsNewRoute = Ember.Route.extend({

  setupController: function(controller) {
    controller.setProperties({
      'showError' : false,
      'fields' : {}
    });
  }

});
