

var userName = document.getElementById("Name")
var userEmail = document.getElementById("Email")
var userpassword = document.getElementById("password")

var massege = document.getElementById("massege")

var dataList 

if(localStorage.getItem("dataList") != null){

    dataList = JSON.parse(localStorage.getItem("dataList")) 
    // console.log(localStorage.getItem("dataList"))
    // console.log(dataList)
}
else {

    dataList= []

}

console.log(dataList)

function signUp(){


    var x = false
   

  


      for (var i = 0 ; i <dataList.length ; i++){


        if (userEmail.value == dataList[i].Email){

            document.getElementById("exists").style.display = "block"
            document.getElementById("required").style.display = "none"
            massege.style.display = "none"
            
            x = true 
               
        }

    }

      if(userEmail.value ==  "" && userpassword.value == ""){

        document.getElementById("required").style.display = "block"
        document.getElementById("exists").style.display = "none"
        massege.style.display = "none"

        x = true

      }

        console.log(x)

      if (x == false && validEmail()){


        var userData = {

            Name : userName.value ,
            Email : userEmail.value ,
            password : userpassword.value
        
         }
        
        
            dataList.push(userData)
            localStorage.setItem("dataList",JSON.stringify(dataList))
        
        
            massege.style.display = "block"
            document.getElementById("required").style.display = "none"
            document.getElementById("exists").style.display = "none"


      }
      



  //   console.log(exists())
 //  if(exists() == false ){
    




 //     }
    
}





function validEmail(){
  var valedtest =false
  var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

  if (regex.test(userEmail.value)){
      document.getElementById("alertname").style.display="none"
      console.log("tmam") 
      valedtest =true
  }
  else{
      document.getElementById("alertname").style.display ="block"
      console.log("mohstmam")  

      valedtest= false
  }

   return valedtest

}















 // console.log(dataList)

//  function exists(){


//    

//         if (userEmail.value == dataList[i].Email){

//             document.getElementById("exists").style.display = "block"

//             return true
//         }
//         if (userEmail.value ==  "" && userpassword.value == ""){

//             document.getElementById("required").style.display = "block"
                    
//             return true

//         }
//         else{

//             return false
//         }
        


//     }
//         return false 

// }

