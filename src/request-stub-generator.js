module.exports = function (context) {

  const stub_generator = context.request.getEnvironmentVariable('stub_generator');

  if(!stub_generator || !stub_generator.file_path){
    return;
  }
  generate_request_stub(context.request, stub_generator.file_path);
}

function generate_request_stub(request, file_path) {

  const request_url = request.getUrl();
  const request_method = request.getMethod();
  const request_content_type = request.getHeader("Content-Type");
  const request_body = request.getBodyText();

  var jsonfile = require('jsonfile');

  var file = file_path + '/stub-request.json';

  var stub =  {
    url: request_url,
    method: request_method,
    headers: {
      "Content-Type": {
        equalTo: request_content_type
      }
    },
    bodyPatterns: [
      {
        equalToJson: request_body
      }
    ]
  };

  console.log(stub);

  jsonfile.writeFile(file, stub,  {spaces: 2}, function (err) {
    console.error(err);
 });
}