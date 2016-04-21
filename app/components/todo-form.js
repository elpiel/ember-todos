import Ember from 'ember';

export default Ember.Component.extend({
  store: this.store,
  actions: {
    saveTodo(todo){
      todo.save().then(() => {
        console.log(`It's saved!`);
      });
    }
  }
});
