import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  owner: DS.belongsTo('person', {inverse: 'ownedTodos'}),
  // person: DS.belongsTo('person', {inverse: 'todos'}),
  image: DS.attr('string')
});
