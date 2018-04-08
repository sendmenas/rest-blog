const express = require('express');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const routes = require('./routes');

let store = {
	posts: [
		{ 
			name: 'Top 10 ES6 Features every Web Developer must know',
			url: 'https://webapplog.com/es6',
			text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
			comments: [
				{
					text: 'Cruel…..var { house, mouse} = No type optimization at all'
				},
				{
					text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'
				},
				{
					text: '(p1,p2)=>{ … } ,i understand this ,thank you !'
				}
			]
		}
	]
}

let app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorHandler());
app.use((req, res, next) => {
	req.store = store;
	next();
});

// Methods used for posts REST actions
app.get('/posts', (req, res) => {
	routes.posts.getPosts(req, res, store);
});

app.post('/posts', (req, res) => {
	routes.posts.addPost(req, res, store);
});

app.get('/posts/:postId', (req, res) => {
	routes.posts.getPost(req, res, store);
});

app.put('/posts/:postId', (req, res) => {
	routes.posts.updatePost(req, res, store);
});

app.delete('/posts/:postId', (req, res) => {
	routes.posts.removePost(req, res, store);
});

// Methods used for comments REST actions
app.get('/posts/:postId/comments', routes.comments.getComments);
app.get('/posts/:postId/comments/:commentId', routes.comments.getComment);
app.post('/posts/:postId/comments', routes.comments.addComment);
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment);
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment);

app.listen(3000);