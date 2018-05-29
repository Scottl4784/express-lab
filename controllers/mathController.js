const router = require('express').Router()

router.get('/:operator', function(req, res) {
if (req.params.operator === 'add') {
    req.query.num1 = parseInt(req.query.num1)
    req.query.num2 = parseInt(req.query.num2)
    res.render('math',
       { math:`${req.query.num1 + req.query.num2}`})

}
if (req.params.operator === 'subtract') {
    req.query.num1 = parseInt(req.query.num1)
    req.query.num2 = parseInt(req.query.num2)
    res.render('math',
       { math:`${req.query.num1 - req.query.num2}`})
}
if (req.params.operator === 'multiply') {
    req.query.num1 = parseInt(req.query.num1)
    req.query.num2 = parseInt(req.query.num2)
    res.render('math',
       { math:`${req.query.num1 * req.query.num2}`})
}
if (req.params.operator === 'divide') {
    req.query.num1 = parseInt(req.query.num1)
    req.query.num2 = parseInt(req.query.num2)
    res.render('math',
    { math:`${req.query.num1 / req.query.num2}`})
}
})

module.exports = router