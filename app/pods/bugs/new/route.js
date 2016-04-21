import Ember from 'ember';

export default Ember.Route.extend({
  store: this.store,
  model(){
    return this.store.createRecord('bug');
  },
  actions: {
    create: bug => {
      bug.save().then(() => {
        console.log('saved');
      });
    }
  }
});
