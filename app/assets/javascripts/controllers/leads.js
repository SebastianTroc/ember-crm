App.LeadsController = Ember.ArrayController.extend({
  sortProperties: ['firstName', "lastName"],

  leads: function() {
    var isSearching = this.get('searchPhrase');

    return isSearching ? this.get('filteredLeads') : this;
  }.property('searchPhrase', 'filteredLeads'),

  filteredLeads: function() {
    var searchPhrase = this.get('searchPhrase').toLowerCase();

    return this.filter(function(lead) {
      return lead.get('fullName').toLowerCase().indexOf(searchPhrase) !== -1
    });
  }.property('searchPhrase', 'this.@each.fullName')

});