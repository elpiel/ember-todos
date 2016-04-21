import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  gender: DS.attr('string'),
  // todos: DS.hasMany('todo', { inverse: 'person'}),
  ownedTodos: DS.hasMany('todo', {inverse: 'owner'})
});
