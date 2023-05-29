# **_Dumber_**

#### (Because none of us is as dumb as all of us) -Despair.com

## 25 May 2023

### by Brian Crowe

---

## **_Description_**

I rewrote this this morning because I was originally going to do some sort of smart kitchen app. i.e. food in fridge's expiration date, warnings to get rid of it before trash day (compensating for holidays), creating a shopping list based on previous receipts (may have been a little ambitious). But I really want twitter back to what it was in 2009/10/11. I remember being able to get just the headline news/sports/opinions of those I wanted to follow, in the order they posted them. They could only use 140 characters, so they had to be succinct. It forced them to be creative. I recognize I'm never getting that back, so I wanted to build what I want.

---

## **_Relationships_**

_Known_

- Users have a 1:M relationship with posts
- Users have a 1:M relationship (hopefully) with followers (also users)
- Feed has a M:M relationship with posts (based on followers) --> Maybe one feed filtered by followers would be easier?
- Tweets may eventually be able to chain in a post, where the chain would have to follow, but also branch

---

## **_Technologies Used_**

- Node.js
- Express
- Mongoose/MongoDB
- Heroku

---

## **_User Stories_**

As A User (AAU)

- AAU, I should be able to make a post with a maximum of 140 characters
- AAU, I should be able to delete my posts
- AAU, I should be able to login with Google
- AAU, I should be able to see a user's full array of posts starting with the newest post
- AAU, I should see a full array of posts made by people/bots I follow (main feed)

---

## **_MVP_**

- 2 Data Entities (plus User Model)
  - Posts
  - Replies
- Use OAuth Authentication (GoogleAPI)
  - Seems similar to what we did for OAuth in Lesson 5/25
- Implement Basic Authorization
  - Only user can post from own account
  - Only original user can delete own post
- Have CRD Data Operations
  - Can't edit/update Twitter - Can't do it for dumber
  - Create Post
  - Read User Posts
  - Read All Followed Users Posts
  - Delete Post
- Be Styled
  - Materialize
  - Custom CSS When Necessary
- Deployed on Heroku
