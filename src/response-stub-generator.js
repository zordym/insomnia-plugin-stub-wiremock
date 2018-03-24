module.exports = function (context) {


  const stub_generator = context.response.getEnvironmentVariable('stub_generator');

  if(!stub_generator){
    return;
  }
  if(stub_generator.active === true){
    //generate_response_stub(context.response);
  } 
}

function generate_response_stub(response) {

  const response_status = response.getStatusCode();

  var jsonfile = require('jsonfile');

  var file = '/Users/trmollet/perso/dev/stub-response.json';

  var stub = {
    status: response_status
  };

  console.log(stub);

  jsonfile.writeFile(file, stub,  {spaces: 2}, function (err) {
    console.error(err);
  });
}