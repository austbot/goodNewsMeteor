Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  controller: 'StoriesController'
});

Router.route('/story/:slug', {
  name: 'story',
  controller: 'StoriesController'
});
