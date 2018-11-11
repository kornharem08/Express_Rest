const pgp = require('pg-promise')();
var db = pgp('postgres://yqiuxqgvnmgbzn:ffd692f86d45ffceb269a06492f38f9cb5f8d6c0666b529b2d46770158cb939d@ec2-54-243-147-162.compute-1.amazonaws.com:5432/d28265d8skcf5j?ssl=true');


function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getProductByID(req, res) {
    db.any('select * from products where product_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve All product'
                })

        });
}
function insertProduct(req, res) {
    db.any('insert into products(product_id, title, price, created_at, tags)' +
        'values(${product_id}, ${title}, ${price}, ${created_at}, ${tags})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updateProduct(req, res) {
    db.any('update products set title = ${title} ,price=  ${price}  where product_id =' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteProduct(req, res) {

    db.any('delete from products where product_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}


function getAllpurchase_items(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getpurchase_itemsByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase_items id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve All product'
                })

        });
}
function insertpurchase_items(req, res) {
    db.any('insert into purchase_items(id, purchase_id, product_id, price, quantity, state)' +
        'values(${id}, ${purchase_id}, ${product_id}, ${price}, ${quantity}, ${state})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updatepurchase_items(req, res) {
    db.any('update purchase_items set price = ${price} ,quantity=  ${quantity},state=  ${state} where id =' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletepurchase_items(req, res) {

    db.any('delete from purchase_items where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}
function getAllpurchases(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getpurchasesByID(req, res) {
    db.any('select * from purchases where purchase_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase_id id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve All purchase_id'
                })

        });
}
function insertpurchases(req, res) {
    db.any('insert into purchases(purchase_id, created_at, name, address, state, zipcode, user_id)' +
        'values(${purchase_id}, ${created_at}, ${name}, ${address}, ${state}, ${zipcode}, ${user_id})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updatepurchases(req, res) {
    db.any('update purchases set purchase_id = ${purchase_id},created_at = ${created_at},name =  ${name},address = ${address} ,state =  ${state},zipcode =  ${zipcode}  where purchase_id =' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletepurchases(req, res) {

    db.any('delete from purchases where purchase_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}




module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    getAllpurchase_items,
    getpurchase_itemsByID,
    insertpurchase_items,
    updatepurchase_items,
    deletepurchase_items,
    getAllpurchases,
    getpurchasesByID,
    insertpurchases,
    updatepurchases,
    deletepurchases
};