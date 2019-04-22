import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    mouseDown: function() {
      var store = this.get('store');
      store.findRecord('point', 1).then(function(record) {
        console.log('This is from the component: ' + record)
      }, function(err) { console.log(err) });
      console.log('Mouse down');
    },
    mouseUp: function() {
      console.log('Mouse up');
    },
    mouseMove: function() {
      var store = this.get('store');
      store.findRecord('point', 1).then(function(record) {
        console.log('This is from the component: ' + record)
      }, function(err) { console.log(err) });
      console.log('Mouse moving');
    }
  }
});