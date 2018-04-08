# rest-blog

Module 2 Assignment Lab: RESTful Blog API for edX course "Introduction to Node.js"

1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?
The design of the project does not differ from one describet in the assingment guidelines. I noticed the mistake in assignment description, but this is the second time when this happens, so I started to think that this is made on purpose for students to debug their code. The only thing that was unclear for me in the begginig was how to give access to local store to posts ant comments methods. The way I did it can be seen in the posts methods - I was sending the store variable as a parameter, so methods could access it. The way ti should be done was explained after I submitted the assignemnt, so I altered this logic for comments methods.
I also added some additional GET methods to get specific post and comments by their ID's.

2. How did you test your project to verify that it works? If you used any specific curl requests, let us know.
I tested it using CURL requests.
Few additional GET methods can be tested using these requests:
curl "http://localhost:3000/posts/0" - to get specific post
curl "http://localhost:3000/posts/0/comments/1" - to get specific post comment

3. Let us know if anything doesn't work as intended so your reviewers will know ahead of time.
Everything seems to work as it should.
