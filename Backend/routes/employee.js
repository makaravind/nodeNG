var express = require('express');
var router = express.Router();

router.get('/all', (req, res, next) => {
    // TODO:replace with DB access
    var data = [
        {
            name: 'Dr. Strange',
            id: 1,
            githubUsername: ''
        },
        {
            name: 'Thor',
            id: 2,
            githubUsername: ''
        }
    ];
    res.send(data);
});

router.post('/profile/upload', (req, res) => {
    // console.log('this is file name', req.file);
    var file = req.files.sampleFile;
    // TODO:upload to DB
    // file.mv('./serverSample.html', (err) => {
        res.send('uploaded');
    // });
});

module.exports = router;