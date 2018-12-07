const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./config/path.json');
const settings = low(adapter)
// respond with "hello world" when a GET request is made to the homepage
// parse various different custom JSON types as JSON
app.use(upload.array());
app.use('/', express.static('dist'));
app.post('/settings', function (req, res) {

    settings.get('plugins').value().forEach(plugin => {
        settings.get('plugins')
            .find({ name: plugin.name })
            .assign({ activated: Boolean(req.body[plugin.name]) || false })
            .write();
    });

    settings.set('vendorCss', []).write();
    settings.set('vendorJs', []).write()

    settings.get('plugins').value().forEach(plugin => {
        if (plugin.activated) {
            settings.get(plugin.type).push(plugin.url).write();

        } else {
            settings.get(plugin.type).unset(plugin.url).write();
        }
    });

    res.send();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

