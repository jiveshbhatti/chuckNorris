var express = require('express');
var router = express.Router();
const axios = require('axios')
/* GET home page. */


router.get('/', function(req, res, next) {
 

    res.render('index',{  });
  });

  

//////
router.post('/',  function showAPI(req,res){
  console.log(req.body)
     console.log(req.body.category)
     const category = req.body.category
  // const options = {
  //   method: 'GET',
  //   url: 'https://api.chucknorris.io/jokes/random',
  //   headers: {
  //   }
  // };

  axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
  .then((response) => {
    console.log(response.data.value);
    const jokeBody = response.data.value
    res.render('joke', {jokeBody})
  });

  // axios.request(options, function(err, response, body) {
    
  //     let jokeBody = body
  //     console.log(jokeBody, 'this is the joke')
  //     res.render('index', {jokeBody})
  });


  



module.exports = router;
