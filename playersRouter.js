var express =  require('express');
const session = require('express-session');
var router = express.Router();
const path = require('path')
const DAO = require(path.join(__dirname, '..', 'daoUtil'))

router.get('/profile', (req, res)=>{

        if(req.session.isuser_valid){
            res.render('pages/profile', {username: req.session.username} )
        }else{
            res.redirect('/auth/login')
        }
})

router.get('/gallery',(req,res)=>{
        const done = (err, data) => {

        if (err) {
            res.send("Error!")
        } else {
            // res.json(data)
            let username= req.session.username
            res.render('pages/gallery', {players:data,username:username })
        }
    }
    DAO.playerDAO.selectTop100ByLikes(done)
})


router.get('/details',(req,res)=>{
        const done = (err, data) => {

        if (err) {
            res.send("Error!")
        } else {
            // res.json(data)
            let username= req.session.username

            res.render('pages/details', {player:data,username:username })
        }
    }
    let id = req.query.id
    DAO.playerDAO.selectById(id, done)

})

router.get('/search',(req,res)=>{
    const _res = res
    const done = (err, data) => {

        if (err) {
            res.send("Error!")
        } else {
            // res.json(data)
            let username= req.session.username

            res.render('pages/search', {player:data,username:username })
        }
    }
    const search_key = req.query.search_key
    if (search_key) {
        DAO.playerDAO.searchByName(search_key, done)
    }else {
        res.render('pages/search', {players: null, username: null})
        //}
        //let id = req.query.id
        //DAO.playerDAO.selectById(id, done)
    }
})

router.get("/top100", (req, res)=> {

    const done = (err, data) => {

        if (err) {
            res.send("Error!")
        } else {
            // res.json(data)
            let username= req.session.username
            res.render('pages/top100', {players:data,username:username })
        }
    }
    DAO.playerDAO.selectTop100ByLikes(done)
})




module.exports = router