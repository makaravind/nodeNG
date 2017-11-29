const express = require('express');
const async = require('async');
const github = require('github');
let gh = new github({
    version: '3.0.0'
});
const router = express.Router();

router.get("/github", (req, res, next) => {
    async.waterfall([getGithubUsername, getGitHubRepos], function (err, result) {
        if(err) {
            res.send('error', err);
            return;
        }
        res.send(result);
    });

    function getGithubUsername(callback) {
        // TODO: get from db
        callback(null, 'one');
    }

    function getGitHubRepos(username, callback) {
        gh.repos.getForUser({username: 'makaravind'}, function (err, res) {
            if(err) {
                callback(err, null);
                return;
            }
            console.log(res);
            callback(null, res.data[1]);
        });
    }

});

router.get('/serverpage', (req, res, next) => {
    setTimeout(() => {
        res.render('server_page', { title: 'Server side rendering working...' });
    }, 5000);
});

module.exports = router;