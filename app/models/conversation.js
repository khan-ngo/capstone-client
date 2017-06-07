import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  owner: DS.attr('number'),
  respondent: DS.attr('number'),
  messages: DS.hasMany('message')
});
