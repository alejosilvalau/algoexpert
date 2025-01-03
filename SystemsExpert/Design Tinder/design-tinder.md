 # Design Tinder
## System Requirements
The design is going to involve the core system behind Tinder. This means allowing users to create a profile and swipe through an infinite deck of potential matches. Users can also do super-like matches, and undo their most recent left swipe.

Users won't have any limitations on the number of swipes, Super likes and undo they can do per day.

The design is not going to involve any functionality after two users match. Which includes any notification system, to let users know when they have matched. This is not the case however, when they are swiping right actively on the app. 

The system is estimated to serve 50 million users globally, evenly distributed around the globe. These users would like to have instant swipes, with latency when: 
- The user first loads the app 
- When the user has already swiped on a large amount of users

The availability of the system won't be the focus on this design.

## Design Plan
The 4 main sections that the design will focus on are:
- Storage Overview
- Profile Creation
  - Picture
  - Bio
  - Name
  - Etc.
- Deck Generation
  - Any other use on the platform which are within the distance and preferences of the person swiping
- Swiping
  - Left: Disliking or passing the user
  - Right: Like the user
  - If two users swipe right on each other, they can match
  - Once matched, the two users can chat and have an open line of communication.
- Super-Liking
  - Special type of swipe, in which you put yourself at the top of the person's deck who is swipping your profile.
  - If you are user 1 and Super-like user 2, user 2 will see user 1 at the top of his deck.
  - Plus there is a visual indicator that user 1 has **Super-Liked** user 2.
- Undoing
  - Undo the previous swipe that you did.
  - For the sake of simplicity, the design only includes undoing left swipes.
  - You cannot spam undo swipes. The user cannot undo more than 2 swipes on a row.
  - If the user swipes left, then right, it cannot undo the first left swipe anymore.
  - It just works with the left swipe that happened right before.

The **matching** and the **open line of communication** will not be covered on this design.

There are no caps on the potential matches, Super-likes, swipes for simplicity.

## Storage Overview
Except for the profile images, the data that we store like:
- Profile info
- Decks
- Swipes
- Matches

should be structured. The system will use a SQL database for that matter, which will be divided into several SQL tables.

There will be multiple regional databases to store all the data, which will be located in different hot spots such as India or East Coast U.S. Users who fetch the app, will be routed to the regional database which is closer to it's location by API servers. These API servers will redirect the traffic by a round-robin approach.

The profile images will be stored in a global blob store, and will be served through a CDN.

The system will have asynchronous replication implemented for the regional databases. But it would replicate every few minutes to hours. This is acceptable on this design, because users tend to be closer to each other in regards to geo location.


## System Diagram
![tinder-design](./design-tinder.png)