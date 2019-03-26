import axios from "axios";

export default {
  localFetch () {
    // const info = window.localStorage.getItem('userInfo')
    // return info ? JSON.parse(info) : null
    return JSON.parse(window.localStorage.getItem('userInfo') || '[]')
  },
  
  localSave (content) {
    window.localStorage.setItem('userInfo', JSON.stringify(content))
  },
  
  fetchRequest (state) {
    axios
      .post("/user/userinterface", {
        
      })
  },
  
  saveRequest (state) {
    axios
      .post("/user/userinterface", {

      })
  }
}