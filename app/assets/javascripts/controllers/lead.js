App.LeadController = Ember.ObjectController.extend({

  isEditing: false,

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

    delete: function() {
      var self = this,
          model = this.get('model');

      model.destroyRecord().then(function() {
        self.transitionToRoute('leads');
      });
    }
  },

  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving')
  }.property('isDirty', 'isSaving')

});