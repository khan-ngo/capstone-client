
# ERD / Wireframe
![unnamed](https://cloud.githubusercontent.com/assets/26236941/26801224/30ef4684-4a0a-11e7-9de7-6d412525ca8e.jpg)
![unnamed-1](https://cloud.githubusercontent.com/assets/26236941/26801228/32952800-4a0a-11e7-9571-d9f8a56bee43.jpg)


# User Stories
	• As a user, I want to be able to sign up, sign in, sign out, and change password.
	• As a user, I want to be able to post an item to share.
	• As a user, I want to respond to an existing post.
	• As a user, I want a update and delete my posts.


# Authentication in Ember

This training will involve a lot of following code and and exploring the
Chrome Inspector and utilizing Ember Inspector.  It is recommended that you
comment code or take notes.

## Prerequisites

-   [Ember Resources](https://github.com/ga-wdi-boston/ember-resources)

## Objectives

By the end of this, developers should be able to:

-   Implement token authentication in an Ember application.
-   Enforce authentication in protected routes.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install` and `bower install`.
1.  Start any API based on a recent version of the [Rails API
    Template](https://github.com/ga-wdi-boston/rails-api-template) or the
    [Express API
    Template](https://github.com/ga-wdi-boston/express-api-template).
1.  Start the front-end server with `ember server`.

## From end to end

Watch as I sign up for a new account on our demo app.

*Other than the flash messages on the page, did anything change?  What about in
the Chrome Developer Tools?*

Take some time and sign in on your own, and check to see if anything in the
Chrome Dev Tools has changed.

Now that we have added a key tool to our personal developer toolkit lets look
at how it's implemented.

## Follow Along

Let's walk through file by file to see what's happening.  I will ask
developers to guide me through the files while correcting any misunderstandings.

First let's start down the template and component trail, then we'll work our way
up with actions.

*Remember: Data down, actions up.*

While going up the Ember hierarchy we may need to stop a some point to discuss
services.

## Additional Resources

-   [Implementing Authentication with Ember Services - Ember
    Igniter](http://emberigniter.com/implementing-authentication-with-ember-services/)
-   [jpadilla/ember-simple-auth-token: Ember Simple Auth extension that is
    compatible with token-based authentication like
    JWT.](https://github.com/jpadilla/ember-simple-auth-token)
-   [simplabs/ember-simple-auth: A library for implementing
    authentication/authorization in Ember.js
    applications.](https://github.com/simplabs/ember-simple-auth)
-   [Create your first Ember 2.0 app: From authentication to calling an
    API](https://auth0.com/blog/2015/08/11/create-your-first-ember-2-dot-0-app-from-authentication-to-calling-an-api/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
