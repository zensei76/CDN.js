const url ="https://api.cdnjs.com/libraries/"
const input = document.getElementById("get-input")
const btn = document.getElementById("get-btn")
const output = document.getElementById("output")

btn.addEventListener("click",getInput)




function getInput(){
    var data = input.value
    console.log("input recived--->"+data)
    getData(data)
}

function getData(input){
    console.log("Inside getData")
    fetch(url)
    .then((data)=>data.json())
    .then((allCDNs)=>{
        allCDNs = allCDNs.results
        //console.log(allCDNs[1].name)

        var result = allCDNs.filter((e)=>{
            return e.name == input
        })
    
        displayOutput(result)
    
 
    }).catch(console.error)
}


function displayOutput(cdn){
    cdn = cdn[0]
    console.log(cdn)
    output.innerHTML= `
    <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">${cdn.name}</h4>
    <p>Your link : ${cdn.latest} </p>
  </div>`

}