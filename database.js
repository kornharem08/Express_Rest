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
    db.any('select * from products where id =' + req.params.id)
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
    db.none('insert into products(product_id, title, price, created_at, tags)' +
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
        db.none('update products set title = ${title} ,price=  ${price}  where product_id =' + req.params.id, req.body)
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






module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct
};