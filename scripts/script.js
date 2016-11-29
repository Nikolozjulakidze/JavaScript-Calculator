$(document).ready(function(){
                  
  var input = '';
  var action;
  var nums = '';
  var history = '';
  var answer = 0;
  var calculated = [];
  var prevAction = '';
  var log = '';
  var firstNumber;
  var lastNumber;
  var bool = false;
  var checkbool = false;
  
  $('button').click(function(){
    
    input = $(this).attr("value");       //assign button value to input
    
    
    if(isNaN(input)){             //if it is not a number
      action = input;
      
      if(action === "ac"){      //reset AC
       nums = '';
       input = '';
       bool = false;
       answer = 0;
       history = '';
       log = '';
       checkbool = false;
       $("#answer").html("0");
       $("#historyIn").html("0");
        
       }
      else if(action === "ce"){     //reset CE
         input = '';                //TODO delete last history entry.
         nums = '';
         bool = false;
         answer = 0;
         checkbool = false;
         $("#answer").html("0");
       } else if (action === "."){    //decimal point;
         nums += action;              //TODO round to nearest.
         history += action;
         $("#answer").html(nums);
         $("#historyIn").html(history);
         
       }else if (action === "+" || action === "-" || action === "/" || action === "*"){       //action
                                                                                        //nums = "";
         prevAction = action;
         if(checkbool === false){
           if(bool === true){
         nums += action;
         history += action;
         $("#answer").html(nums);
         $("#historyIn").html(history);
             checkbool = true;
             }
         }
         
      
       } else if(action === "="){               //equals final step
                 answer = function calculate(){    //calculate function
                   
                if(prevAction === "*"){             //if multiply
                 
                                                            
                  calculated = log.split("*");
                  answer = calculated[0] * calculated[1];
                  
                   
                }else if(prevAction === "/"){                     //if divide
                                                        
                         calculated = log.split("/");               
                         answer = calculated[0] / calculated[1];
                         
                  
                         }else if (prevAction === "+"){             //if plus
                                                            
                           calculated = log.split("+");           

                           firstNumber = Number(calculated[0]);   //converts strings into numbers
                           lastNumber = Number(calculated[1]);
                           answer = firstNumber + lastNumber;
                           
                           
                         }else if (prevAction === "-"){             //if minus                                                             
                           calculated = log.split("-");
                           answer = calculated[0] - calculated[1];
                           
                         }
                return Number(answer);                                      //TODO chaining after answer.
                bool = true;
                
              };    //end function;
                                            
                 $("#answer").html(answer);
                  console.log(answer);
                 
                  }                //end action ifs.
                           
    }else{                  //add to inputbox
   
      bool = true;
      nums += input;                
      history += input;             
      log = history;
      $("#answer").html(nums);
      $("#historyIn").html(history);
    }                       //end if
              
  });                       //end click
  
                  })    //end document.ready