import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // this.store.push({
    //   data: [{
    //     id: '1',
    //     type: 'point',
    //     attributes: {
    //       x: 2,
    //       y: null
    //     }
    //   }]
    // });
    return this.store.findRecord('point', 1).then(function(record) {
      return(record)
    }, function(err) { console.log(err) });
  }
});