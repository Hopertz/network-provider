import express from "express";
import cors from "cors";
import morgan from "morgan";
import { slicePhoneNumber,checkNetworkProvider } from "./utils/utils.js";


const config = {
    port : 9000
}
const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));

app.get('/api/:phonenumber', function (req, res) {
    let phoneNumber  =  req.params.phonenumber
    let slicedPhoneNumber = slicePhoneNumber(phoneNumber)
    let networKProvider = checkNetworkProvider(slicedPhoneNumber)
    res.send(networKProvider)

  })

export const start = async () => {
    try {
    
      app.listen(config.port, () => {
        console.log(`REST API on http://localhost:${config.port}/api`);
      });
    } catch (e) {
      console.log(e);
    }
  };