/**
* Author: Justin Juang & Christian Decareau
* Date: 12/1/2021
**/

$("#activate").click(callAjax);

function callAjax(){

  console.log("Start");

      $.ajax({
          //assigns ourUrl as the call in question
          url: "https://xkcd.com/614/info.0.json",
          //a GET request
          type: "GET",
          //data type is left empty since the request is an html
          dataType:"json",

            success: function(data){
              console.log("Success: ", data);
              var comicObj = data;

              var titleText = comicObj.title
              $(".textBox").html(titleText);

              var imgUrl = comicObj.img;
              var imgTag = "<img src=" + imgUrl + ">;";

              var imgAlt = comicObj.alt;
              console.log(imgUrl, imgTag);
              $("#photoFrame").html(imgTag);
              $("#altText").html(imgAlt);

            },

            error: function(jqXHR, textStatus, errorThrown){
              console.log("Error:", textStatus, errorThrown);
            }
})

}
