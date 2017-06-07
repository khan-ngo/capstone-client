import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('item', function() {
    this.route('edit');
  });
  this.route('my-items');
  this.route('message');
  this.route('conversation');
  this.route('category');
  this.route('categories');
});

export default Router;
