module.exports = function (context) {


  const stub_generator = context.response.getEnvironmentVariable('stub_generator');

  if(!stub_generator){
    return;
  }
  if(stub_generator.active === true){
    generate_response_stub(context.response, stub_generator.file_path);
  } 
}

function generate_response_stub(response,file_path) {

  const response_status = response.getStatusCode();

  var jsonfile = require('jsonfile');

  var stub_request = file_path + '/stub-request.json';

  var file = file_path + '/stub.json';



  var stub_response = {
    status: response_status
  };

  jsonfile.readFile(stub_request, function(err, obj){
   console.log(obj);
  });

  console.log(stub);

  jsonfile.writeFile(file, stub,  {spaces: 2}, function (err) {
    console.error(err);
  });
}