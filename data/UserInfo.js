// This fiile will collect data about the user and use later on in the app
// Data provided here are dummy data and will change for each user
import { initializeApp } from "firebase/app";
import {
  getAuth,

} from "firebase/auth";
const UserInfo = 
   {
       name: "Koms sparrow",
       slang: "@koms_gh",
       task: "admin",
        teams: 2000,
        tokens: 9,
       avatarImage: 'https://cdnb.artstation.com/p/assets/images/images/034/457/389/large/shin-min-jeong-.jpg?1612345145',
               
   }



export default UserInfo;