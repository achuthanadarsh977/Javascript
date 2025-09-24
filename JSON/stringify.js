var j = '{"Name":"Krishna","Email": "XYZ", "CN": "12345"}';    
var data = JSON.parse(j);    
console.log("Convert string in JSON format using parse() method");    
console.log(data.Email);   
    

var j = {Name:"Krishna",    
Email: "XYZ", CN : 12345};    
var data = JSON.stringify(j);    
console.log("Convert string in JSON format using stringify()  method");    
console.log(data);   
