module.exports = function (context) {
	console.log('request-bla');
	const request_url = context.request.getUrl();
	const request_method =  context.request.getMethod();
	const request_content_type = context.request.getHeader("Content-Type");

	var jsonfile = require('jsonfile')

	var file = '/Users/trmollet/perso/dev/data.json'

	var obj = {
		request: {
			url: request_url,
    		method: request_method,
    		headers: {
      			"Content-Type": {
        			equalTo: request_content_type
      			}
    		},
    		bodyPatterns: [
      			{
        		equalToJson: "je sais pas comment avoir le body :'("
      			}
    		]
  		}
  	}


	console.log(obj);


	jsonfile.writeFile(file, obj,  {spaces: 2}, function (err) {
  		console.error(err)
	});
}