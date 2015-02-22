App.LeadEditController = Ember.ObjectController.extend({

  actions: {
    saveChanges: function() {
      var self = this,
          model = this.get('model');

      if (model.get('isDirty')) {
        model.save().then(function() {
          self.transitionToRoute('lead');
        })
      }
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute('lead');
    }
  },

  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving')
  }.property('isDirty', 'isSaving')

});