import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },

    reset () {
      this.set('credentials', {});
    },

    // ok () {
    //   this.$('.modal').modal('hide');
    //   this.sendAction('ok');
    // },
    //
    // show: Ember.on('didInsertElement', function() {
    //     Ember.on('hidden.bs.modal', function() {
    //       this.sendAction('close');
    //     }.bind(this), this.$('.modal').modal());
    // }

  },
});
