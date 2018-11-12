var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./database');
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// index page

var output = {
    status: 'success',
    message: 'REST API is working'
}

app.get('/', function (req, res) {
    res.send('Express is running');
});

app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

app.get('/api/products/', db.getAllProducts);
app.get('/api/products/:id', db.getProductByID);
app.post('/api/products/', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);
app.get('/api/purchase_items/', db.getAllpurchase_items);
app.get('/api/purchase_items/:id', db.getpurchase_itemsByID);
app.post('/api/purchase_items/', db.insertpurchase_items);
app.put('/api/purchase_items/:id', db.updatepurchase_items);
app.delete('/api/purchase_items/:id', db.deletepurchase_items);
app.get('/api/purchases/', db.getAllpurchases);
app.get('/api/purchases/:id', db.getpurchasesByID);
app.post('/api/purchases/', db.insertpurchases);
app.put('/api/purchases/:id', db.updatepurchases);
app.delete('/api/purchases/:id', db.deletepurchases);
app.get('/api/users/', db.getAllusers);
app.get('/api/users/:id', db.getusersByID);
app.post('/api/users/', db.insertUser);
app.put('/api/users/:id', db.updateUser);
app.delete('/api/users/:id', db.deleteusers);


var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});