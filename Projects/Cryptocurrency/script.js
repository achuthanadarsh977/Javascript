

var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var dog = DocumentFragment.getElementById("dogecoin")

var settings = {
    "async":true,
    "scrossDomain":true,
    "url":" https://pro-api.coingecko.com/api/v3",
    "method":"GET",
    "header":{}
}

$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.innerHTML.usd;
});