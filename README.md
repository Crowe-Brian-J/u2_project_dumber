**_Dumber_**

## 25 May 2023

### by Brian Crowe
(Because none of us is as dumb as all of us)
---

## **_Description_**

I rewrote this this morning because I was originally going to do some sort of smart kitchen app. i.e. food in fridge's expiration date, warnings to get rid of it before trash day (compensating for holidays), creating a shopping list based on previous receipts (may have been a little ambitious). But I really want twitter back to what it was in 2009/10/11. I remember being able to get just the headline news/sports/opinions of those I wanted to follow, in the order they posted them. They could only use 140 characters, so they had to be succinct. It forced them to be creative. I recognize I'm never getting that back, so I wanted to build what I want.

---

## **_Relationships_**

_Known_
Users have a 1:M relationship with posts
Users have a 1:M relationship (hopefully) with followers (also users)
Feed has a M:M relationship with posts (based on followers) --> Maybe one feed filtered by followers would be easier?
Tweets may eventually be able to chain in a post, where the chain would have to follow, but also branch
