module.exports = {
	getComments(req, res) {
		res.status(200).send(req.store.posts[req.params.postId].comments);
	},
	getComment(req, res) {
		res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId]);
	},
	addComment(req, res) {
		req.store.posts[req.params.postId].comments.push(req.body);
		res.status(201).send(req.body);
	},
	updateComment(req, res) {
		console.log("POST ID: " + req.params.postId + " AND COMMENT ID " + req.params.commentId);
		req.store.posts[req.params.postId].comments[req.params.commentId] = req.body;
		res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId]);
	},
	removeComment(req, res) {
		console.log("POST ID: " + req.params.postId + " AND COMMENT ID " + req.params.commentId);
		req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1);
		res.status(204).send(req.store.posts);
	}
}