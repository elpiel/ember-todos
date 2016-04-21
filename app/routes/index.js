import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    var models = this.store.findAll('todo');
    console.log(models);
    return models;
  }
});
