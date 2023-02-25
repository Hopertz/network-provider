// This are network providers inital numbers 
// const VODA= ["074", "076", "075"]
// const AIRTEL = ["078", "068", "069"]
// const TIGO = ["071", "065","067"]
// const ZANTEL= ["077"]
// const HALOTEL = ["062","061"]
// const Ttcl = ["073"]


function slicePhoneNumber(str){
    // remove any white spaces in a number
    str = str.replace(/\s/g, '');

    return str.slice(-9,str.length).slice(0,2)
}

function checkNetworkProvider(str){
    let networKProvider = "unknown"
    
     switch (str) {
         case "74":
         case "76":
         case "75":
           networKProvider = "VodacomTZ"
         break
         case "71":
         case "65":
         case "67":
            networKProvider ="TigoTZ"
         break
         case "78":
         case "68":
         case "69":
            networKProvider = "AirtelTZ"
         break
         case "77":
             networKProvider ="ZantelTZ"
         break
         case "73":
             networKProvider ="TtclTZ"
         break
         case "62":
         case "61":
             networKProvider ="HalotelTZ"
         break
       }
       
    return networKProvider
     
}

export { slicePhoneNumber, checkNetworkProvider }
