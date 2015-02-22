App.LeadController = Ember.ObjectController.extend({

  actions: {
    saveChanges: function() {
      var model = this.get('model');

      if (model.get('isDirty')) {
        model.save();
      }
    }
  },

  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving')
  }.property('isDirty', 'isSaving')

});