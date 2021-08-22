const express = require('express');
const app = express();
const port = 8000;

//use express router //by default fetches the index
app.use('/', require('./routes'));





//making app listen

app.listen(port, function(err){
  if(err){
    console.log(`Error in running the server : ${err}`);
  }

  console.log(`Server is running on port: ${port}`);

});
