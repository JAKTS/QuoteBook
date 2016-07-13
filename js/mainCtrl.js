angular.module("quoteBook")
       .controller("mainCtrl",function($scope, quoteServ){
$scope.quotes = quoteServ.getData();
$scope.deleteMe = function(textToDelete){
  quoteServ.removeData(textToDelete);
};

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  };
  if(quoteServ.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
};


       });
