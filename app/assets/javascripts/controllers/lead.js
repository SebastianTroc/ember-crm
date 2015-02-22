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
    }
  },

  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving')
  }.property('isDirty', 'isSaving')

});