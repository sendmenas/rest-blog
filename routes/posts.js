module.exports = {
	getPosts(req, res, store) {
		res.status(200).send(store.posts);
	},
	getPost(req, res, store) {
		console.log("POST ID " + req.params.postId);
		res.status(200).send(store.posts[req.params.postId]);
	},
	addPost(req, res, store) {
		store.posts.push(req.body);
		res.status(201).send(req.body);
	},
	updatePost(req, res, store) {
		console.log("POST ID " + req.params.postId);
		store.posts[req.params.postId] = req.body;
		res.status(200).send(store.posts[req.params.postId]);
	},
	removePost(req, res, store) {
		console.log("POST ID " + req.params.postId);
		store.posts.splice(req.params.postId, 1);
		res.status(204).send(store.posts);
	}
}