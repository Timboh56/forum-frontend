import DS from 'ember-data';

var User = DS.Model.extend({
  notifications: DS.hasMany('notification'),
  questions: DS.hasMany('question', { async: false }),
  answers: DS.hasMany('answer', { async: false }),
  userBadges: DS.hasMany('user-badge', { async: false }),
  receivedMessages: DS.hasMany('message', { inverse: 'receiver' }),
  sentMessages: DS.hasMany('message', { inverse: 'sender' }),
  comments: DS.hasMany('comment'),
  votes: DS.hasMany('vote'),
  bookmarks: DS.hasMany('bookmark'),
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
  timezone: DS.attr('date'),
  createdAt: DS.attr('date'),
  questionsCountString: DS.attr('string'),
  answersCountString: DS.attr('string'),
  avatar: function() {
    return 'https://mentormint.com/assets/img/get-image.php?name=Tim_Hui&size=thumb';
  }.property('avatar')

});

export default User;
