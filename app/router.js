import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('todos', function(){
    this.route('new');
    this.route('edit', {path: '/:todo_id/edit'});
    this.route('show', {path: '/:todo_id'});
  });

  //this.route('todos.new', {path: '/todos/new'});
  //this.route('todos-show', { path: '/todos/:todo_id' });
  // this.route('todos-edit', {path: '/todos/:todo_id'});
  this.route('bugs', function() {
    this.route('new');
    this.route('edit', {path: '/:bug_id'});
  });
});

export default Router;
