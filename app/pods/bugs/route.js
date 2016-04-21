import Ember from 'ember';

export default Ember.Route.extend({
  store: this.store,
  model(){
    return this.store.findAll('bug');
  }
});
