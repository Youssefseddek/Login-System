
var userEmail = document.getElementById("Email")
var userpassword = document.getElementById("password")
var dataList

var welcomeName =""


   dataList = JSON.parse(localStorage.getItem("dataList")) 
// console.log(userEmail.value)
console.log(dataList)

// if(userEmail.value ==  dataList[0].Name){console.log("gdrsgdfgd")}

function login (){

    for (var i = 0 ; i < dataList.length ; i++){

        if(userEmail.value ==  dataList[i].Email && userpassword.value == dataList[i].password){

            console.log(dataList[i].Name)
            welcomeName = dataList[i].Name
            console.log(welcomeName)

            document.querySelector(".home").style.display = "block"
            document.querySelector(".login").style.display = "none"
            
            var username = document.getElementById("username")

            username.innerHTML =  `welcome ${welcomeName} `

           
        }
        else if (userEmail.value ==  "" && userpassword.value == ""){

            document.getElementById("required").style.display = "block"
                    


        }
        else{

            document.getElementById("incorrect").style.display = "block"

            console.log("false")
        }

    }



   

  
}













// console.log(document.querySelector("a"))

// console.log(dataList[0].Email)
// console.log(dataList[0].password)
// console.log(localStorage.key(3))















// ----------------------- home -----------------------



// console.log(welcomeName)
// console.log(username.innerHTML)