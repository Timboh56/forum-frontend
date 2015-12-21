import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  id_facebook: DS.attr('string'),
  id_linkedin: DS.attr('string'),
  name_user: DS.attr('string'),
  name_first: DS.attr('string'),
  name_last: DS.attr('string'),
  email: DS.attr('string'),
  gender: DS.attr('string'),
  country: DS.attr('string'),
  bio_headline: DS.attr('string'),
  bio_description: DS.attr('string'),
  bio_tags: DS.attr('string'),
  date_birth: DS.attr('date'),
  date_registered: DS.attr('date'),
  date_signedin: DS.attr('date'),
  status: DS.attr('integer'),
  landing_page: DS.attr('string'),
  timezone: DS.attr('date')
});


User.reopenClass({
  FIXTURES: [
    { email: "trek@blahblah.com", username: "TrekGlowaski", name_first: 'Trek', name_last: 'Glowacki' },
    { email: "tomdale@blah.com", username: "Tom Dale", name_first: 'Tom' , name_last: 'Dale' }
  ]
});

export default User;