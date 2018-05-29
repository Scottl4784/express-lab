const router = require('express').Router()

router.get('/:name', (req, res) => {
    res.render('greeting', {
        greet: `hello ${req.params.name}`
    })
})




module.exports = router