# **_dummer_**

#### (Because none of us is as dumb as all of us) -Despair.com

## 25 May 2023 - 2 June 2023

### by Brian Crowe

---

## **_Description_**

dummer is a twitter-lite clone. It is dumber than twitter, but in that sense, it's also smarter because it isn't trying to be all things. It's a simple micro-blog that looks clean-ish. It allows users to post and reply to posts after an OAuth login with their google accounts. I also implemented Materialize to style my app. This will impact my future interactions with Materialize because I tried to add it at the end (as we are instructed to get functionality correct before styling), but in this case, it should be done in conjunction with core content. I say that as templates are a copy-paste relationship. The process was akin to a kindergartener (me) drawing a picture, then being given a template to fit the picture in, then me cutting out the portions of my picture to collage (is that a verb?) it into the template with as minimal a loss to the original vision as possible. _If_ I had bothered to notice this beforehand, it would have been more of a collaboration which I believe would have resulted in a superior product.

---

## **_Relationships_**

- Users have a 1:M relationship with posts.
- Posts have a 1:M relationship with replies.
- Feed is populated as a list in reverse-timestamp order.
- User index is populated as a list in timestamp order.

---

## **_Technologies Used_**

- Node.js
- Express
- Mongoose/MongoDB
- Heroku
- Materialize

---

## **_User Stories_**

As A User (AAU)

- AAU, I should be able to make a post with a maximum of 140 characters
- AAU, only I should be able to delete my posts
- AAU, I should be able to login with Google
- AAU, I should be able to see a user's full array of posts starting with the newest post

---

## **_MVP_**

- 2 Data Entities (plus User Model)
  - Posts
  - Replies
- Use OAuth Authentication (GoogleAPI)
- Implement Basic Authorization
  - Only user can post from own account
  - Only original user can delete own post
- Have CRD Data Operations
  - Can't edit/update Twitter - Can't do it for dummer
  - Create Post
  - Read All Users Posts
  - Read User Posts
  - Post Reply to User Post
  - Delete Post
  - Delete Reply
- Be Styled
  - Materialize
  - Custom CSS When Necessary
- Deployed on Heroku

---

## **_Credits_**

- Materialize
- Heroku
- Me
- Our Wonderful Instructors and TAs
- Other Students Kind Enough to Look at My Code
- Twitter for annoying me and not being the same as it was in 2009

---

## **_Screenshots_**

Start Page/Logged Out
![Image](/screenshots/start-loggedout.png)

Logged In - posts/index
![Image](/screenshots/firstloggedin.png)

Show Post - Reply - /posts/show
![Image](/screenshots/posts-show-reply.png)

Show Dummies
![Image](/screenshots/index-users.png)

Show One Dummy's Posts
![Image](/screenshots/show-user.png)
![Image](/screenshots/show-user-other.png)
