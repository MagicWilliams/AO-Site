// Home Route
// USE THIS MODEL BELOW FOR UPDATING ANNOUNCEMENT LANDING PAGES
/*     
  Landing Page Route

    name: 'Krabz',
    action: function () {
        this.render('krabz');
        Session.set('page_name', 'Spring Speaker');
        SEO.set({ title: 'Spring Speaker - ' + Meteor.App.NAME });
    }
});

  Move Normal homepage to a different route
Router.route('/home', {
  name: 'home',
  action: function () {
    this.render('home');
    Session.set('page_name','home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

 */

Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    Session.set('page_name','home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/tease', {
  name: 'teaser',
  action: function () {
    this.render('teaser');
    Session.set('page_name','Announcing..');
    SEO.set({ title: 'Announcing... - ' + Meteor.App.NAME });
  }
});

Router.route('/news', {
  name: 'news',
  action: function () {
    this.render('news');
    Session.set('page_name','news');
    SEO.set({ title: 'News - ' + Meteor.App.NAME });
  }
});

Router.route('/about', {
  name: 'about',
  action: function () {
    this.render('about');
    Session.set('page_name','about');
    SEO.set({ title: 'About - ' + Meteor.App.NAME });
  }
});

Router.route('/contact', {
  name: 'contact',
  action: function () {
    this.render('contact');
    Session.set('page_name','contact');
    SEO.set({ title: 'Contact - ' + Meteor.App.NAME });
  }
});

Router.route('/calendar', {
  name: 'calendar',
  action: function () {
    this.render('calendar');
    Session.set('page_name','calendar');
    SEO.set({ title: 'Calendar - ' + Meteor.App.NAME });
  }
});

Router.route('/poll', {
  name: 'Poll',
  action: function () {
    this.render('poll');
    Session.set('page_name','poll');
    SEO.set({ title: 'poll - ' + Meteor.App.NAME });
  }
});

Router.route('/gallery', {
  name: 'gallery',
  action: function () {
    this.render('gallery');
    Session.set('page_name','gallery');
    SEO.set({ title: 'Gallery - ' + Meteor.App.NAME });
  }
});

Router.route('/gallery/:id', {
  name: 'gallery.album',
  action: function () {
    this.render('album', {data: {id: this.params.id}});
    SEO.set({ title: 'Album - ' + Meteor.App.NAME });
  }
});
