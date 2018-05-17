
let bing_web_search = $(function() {
  var params = {
      // Request parameters
      "q": "cats"
  };

  $.ajax({
      url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","e4ea1b78419c4dd39a156da1e7ff3abe");
      },
      type: "GET",
      // Request body
      data: "",
  })
  .done(function(data) {
      alert("success");
  })
  .fail(function() {
      alert("error");
  });
});

export {
  bing_web_search
};