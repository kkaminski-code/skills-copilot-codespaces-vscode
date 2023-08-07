// Create web server
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Comment = require('./models/comment');
var CommentController = require('./controllers/comment');
var config = require('./config/config');
var router = express.Router();

// Connect to DB
mongoose.connect(config.db);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
router.route('/comments')
    .get(CommentController.index)
    .post(CommentController.create);

router.route('/comments/:comment_id')
    .get(CommentController.show)
    .put(CommentController.update)
    .delete(CommentController.destroy);

app.use('/api', router);

// Start server
app.listen(config.port);
console.log('Server started on port ' + config.port);