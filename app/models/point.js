import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  x: DS.attr(),
  y: DS.attr()
});
