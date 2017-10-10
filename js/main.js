

    $('.next').click(
      function(){
        $(this).closest(".question").removeClass("active");
        $(this).closest(".question").next().addClass("active");
      }
    );

    //Begin results
    $('.done').click(
      function(){

        var q4 = $('input:radio[name="destination"]:checked').attr("value"); //Gets value of both checked answers
        var q5 = $('input:radio[name="price"]:checked').attr("value");

        var combinations = ["4a5a","4a5b","4a5c","4b5a","4b5b","4b5c","4c5a","4c5b","4c5c","4d5a","4d5b","4d5c"]; // All possible combindations for
        var destinations = ["budget_beaches","affordable_beaches","luxury_beaches","budget_mountains","affordable_mountains","luxury_mountains","budget_cityscapes","affordable_cityscapes","luxury_cityscapes","budget_open_spaces","affordable_open_spaces","luxury_open_spaces"];

        var answer = q4+q5; //Combine Answers into 1 combination

        $(document).ready(function(){
          for(i=0; i<combinations.length; i++){ //Loop through each combination in array
            if(answer == combinations[i]){
              results(destinations[i]); //Give corresponding destination result
            }
          }
        });


      }
    );
    function results(name){
      alert("For demo purposes, here is the link to your result: http://lastminutetravel.com/" + name + ".aspx");
      // alert(name);
    }
