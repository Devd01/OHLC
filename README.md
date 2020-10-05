# OHLC
//Brief Description about the project
This project has two routes 1.Hitorical Data 2. OHLC live Data.
1.Historical Data component is using api provided by Kaboom.
2.OHLC live Data component is using Soket-io-cient to establish a web socket connection.
OHLC component is using Subscribe method provided by web socket api to get data at regular interval.
The OHLC component can be loaded offline, it is using local storage to get the data in offline mode.

//Installation Guide
1.Clone the repository using git clone "url"
2.Run npm i or npm install in the cloned folder.
3.run npm start to start the devlopment server.
4.TO create a production package run npm run build.
