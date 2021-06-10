import CONS from "../global-variable";
import Fnc from './Fnc'
import Alert from './alert'
import axios from "axios";
// import { ConfirmModal } from '../component/confirm-modal'
// import { Route, Link, withRouter } from "react-router-dom";
const ReuseNormal = {
 start_module(){
  console.log("start_module");
 },
 async base64_input(element){
    return new Promise( async function(resolve, reject) {
    let base64
    if(element.target.files.length===1){
      await Fnc.getBase64(element.target.files[0]).then(value => {
        base64 = "data:image/png;base64,"+value
      });  
    }
    else if(element.target.files.length>1){}
    resolve(base64)
    // console.log(base64);
    // return base64
   });  
 },
  SetState(myreact, keyname, event) {
    var typefile = event.target.getAttribute("type");
    if (typefile === "file"){
      Fnc.getBase64(event.target.files[0]).then(value => {
        myreact.setState({ [keyname]: value });
      });
    }
    else {
      var value = event.target.value;
    }

    myreact.setState({[keyname]: value },()=>{

    });
  },
  SetStateObject(myreact,keyname,sub_key,value,cellback=()=>{}){
    myreact.setState(state => ({
    [keyname]: {                   
        ...state.data_create,    
        [sub_key]:value       
    }
  }),cellback())},

  set_state_object(myreact,keyname,sub_key,value,cellback=()=>{}){
    myreact.setState(state => ({
    [keyname]: {                   
        ...state[keyname],    
        [sub_key]:value       
    }
  }),cellback())},
  DateCover(value_date,status_hours){
   let mystore = this
   if (!mystore.ckvalue(value_date) || !(value_date instanceof Date)){return null}
   let year = value_date.getFullYear()  
   let month = +(value_date.getMonth()+1) < 10 ? "0"+(value_date.getMonth()+1) : value_date.getMonth()+1
   let day =  +value_date.getDate() < 10 ? "0"+value_date.getDate() : value_date.getDate()
   let hours = +value_date.getHours() < 10 ? "0"+value_date.getHours() : value_date.getHours() ;
   let minutes = +value_date.getMinutes() < 10 ? "0"+value_date.getMinutes() : value_date.getMinutes();
   let secondes = +value_date.getSeconds() === 0 ? "00" : value_date.getSeconds();
   let date_day = year+"-"+month+"-"+day
   let day_hours = hours+":"+minutes+":"+secondes
   var date_sum
   if(status_hours)  date_sum = date_day+" "+day_hours 
   else   date_sum = date_day 
   return  date_sum
  },
  Date_cal_current_day(number_day,operator=null,number_plus=0){
    let mystore = this
    if(operator==="+"){
      // console.log("plus");
      // console.log(number_day);
      // console.log(mystore.DateCover(new Date(new Date().setDate(new Date().getDate() + number_day))));  
     return  mystore.DateCover(new Date(new Date().setDate(new Date().getDate() + number_day)))
    }
    else if(operator==="-"){
     return  mystore.DateCover(new Date(new Date().setDate(new Date().getDate() - number_day)))
    }
    return false
  },

  DateCoverRevers(value_date,status_hours=false,status_year,split_year="-",split_hours=":"){  
    let mystore = this
    if (!mystore.ckvalue(value_date) || !(value_date instanceof Date)  ){return null}
    let year = value_date.getFullYear()  
    let month = +(value_date.getMonth()+1) < 10 ? "0"+(value_date.getMonth()+1) : value_date.getMonth()+1
    let day =  +value_date.getDate() < 10 ? "0"+value_date.getDate() : value_date.getDate()

    let hours = +value_date.getHours() < 10 ? "0"+value_date.getHours() : value_date.getHours() ;
    let minutes = +value_date.getMinutes() < 10 ? "0"+value_date.getMinutes() : value_date.getMinutes();
    let secondes =   +value_date.getSeconds() < 10 ? "0"+value_date.getSeconds() : 
    value_date.getSeconds() === 0 ? "00" : value_date.getSeconds();
    
    let date_day
    if(status_year) { 
        date_day = year+split_year+month+split_year+day
    }
    else {
      date_day = day+split_year+month+split_year+year
    }
    
    let day_hours = hours+split_hours+minutes+split_hours+secondes
    var date_sum
    if(status_hours)  date_sum = date_day+" "+day_hours 
    else   date_sum = date_day 
    return  date_sum
  },

  FormatFile(value="",split_str){
    if(value==="") return  true
    else { 
    const formatraw = value.split(split_str).map((content,index)=>{
        return  content.trim()
    })
      return formatraw
    }
  },

  Alert(message,status=null){
    const mystore = this
    if(mystore.ckvalue(status)){
      Alert.showMsg(message,status)
    }
    else {
      Alert.showMsg(message)
    }
  },
  verifyImage(event,NameFormat,strsplit=',',myreact={},key="",size=0,message="")  {
    if(size > 0 ) size = size * 1000000
    const mystore = this;
    event.persist()
    if (event.target.files[0] !== undefined  && event.target.getAttribute("type") === "file" ) {
        var file = event.target.files[0]
        const current_format = file.type.split('/')[1]
        if (file.size > size) {
            Alert.showMsg('Exceeds the maximum upload size for this site. Maximum file size 2MB', 'danger')
            return true
        } else if (mystore.FormatFile(NameFormat,",").indexOf(current_format) === -1 ) {
            Alert.showMsg('สามารถอัพโหลดได้เฉพาะไฟล์รูปภาพเท่านั้น ('+mystore.FormatFile(NameFormat)+')', 'danger')
            return true
        } else {
            if(mystore.ckvalue(key))  {
              Fnc.getBase64(file).then((data64) => {
              if(mystore.ckvalue(myreact))
              myreact.setState({[key]:data64});
              return  data64
            })
           }
            return false;
        }
    }
},
 verifyImageObject(event,NameFormat,strsplit='/',myreact={},size=0,formatfile="png",formatdata="image",keystate='',sub_key_state='')  {
  const mystore = this;
  event.persist()
  if (event.target.files[0] !== undefined  && event.target.getAttribute("type") === "file" ) {
      var file = event.target.files[0]  
      const current_format = file.type.split(strsplit)[1]
      if (file.size > size) {
          Alert.showMsg('ไม่สามารถอัพโหลดได้ เนื่องจากไฟล์ที่มีขนาดเกิน '+(+size/1000000)+' mb !', 'danger')
          return false
      } else if ( mystore.FormatFile(NameFormat,",").indexOf(current_format) === -1 ) {
          Alert.showMsg('สามารถอัพโหลดได้เฉพาะไฟล์รูปภาพเท่านั้น ('+mystore.FormatFile(NameFormat)+')', 'danger')
          return false
      } else {
            Fnc.getBase64(file).then((data64) => {
              var u = URL.createObjectURL(file);
              var img = new Image();
              img.src = u;
              img.addEventListener('load', (event) => {
                var data_result = {
                  base64:("data:"+formatdata+"/"+formatfile+";base64,"+data64),
                  size:Math.ceil(file.size/1000)+"-kb",
                  width:img.width,
                  height:img.height
                }
                  mystore.set_state_object(myreact,keystate,sub_key_state,data_result)
                  return  data_result
              });
          })
          return true;
      }
  }
},

  verifyFile(event,myreact={},size=0,message="",input_file=null)  {
    const mystore = this;
    event.persist()
    if (event.target.files.length > 0  && event.target.getAttribute("type") === "file" ) {
        var file = event.target.files
        let status_file = true
        let sum_size  = 0
        for (var i = 0; i < file.length; i++) {
          sum_size += file[i].size
          if(file[i].size/1000000>size){
            status_file = false
          }
        }
        if(+(sum_size/1000000).toFixed(0) > +size  ){
          Alert.showMsg(message, 'danger')
          return false
        }

        if(status_file===false){
          if(mystore.ckvalue(myreact.file_member)){
            myreact.file_member.value = null
          }
          else if(mystore.ckvalue(input_file)){
            input_file.value = null
          }
          Alert.showMsg(message, 'danger')
          return false 
        }
        else {
          return true
        }
    }
    else{ 
      return false
    }
  },


  verifyFile_mutiple(event,myreact={},size=0,message="",input_file=null)  {
    event.persist()
    if (event.target.files.length > 0  && event.target.getAttribute("type") === "file" ) {
        // var file = event.target.files
        // let status_file = true
        // let sum_size = 01
        // for (var i = 0; i < file.length; i++) {
        //   sum_size += file[i].size
        //   if(file[i].size/1000000>size){
        //     status_file = false
        //   }
        // }
        // console.log((sum_size/1000000).toFixed(0) ,'MB');
        // if(status_file==false){
        //   if(mystore.ckvalue(myreact.file_member)){
        //     myreact.file_member.value = null
        //   }
        //   else if(mystore.ckvalue(input_file)){
        //     input_file.value = null
        //   }
        //   Alert.showMsg(message, 'danger')
        //   return false 
        // }
        // else {
        //   return true
        // }
    }
    // else{
    //   return false
    // }
  },




  AheadZero(value){
    return value < 10 ? "0"+value : value
  },
  CheckToken(NameStorage) {
    let token = localStorage.getItem(NameStorage);
    if (token != null) {
      return token;
    } 
    // else window.open(CONS.URL_LINK + "/login", "_self");
  },
  ckvalue(value,type=null) {
    if(type==="file"){
        try {
           if(value.name)  return true
        } catch (error) {
            return false
        }
    }
    else
    switch (value) {
      case undefined:
        return false;
      case null:
        return false;
      case isNaN(value):
        return false;
      case "":
        return false;
      default:
        if(typeof value === "object"){
          if(value  instanceof Date) {
            return true
          }
          else if (Object.entries(value).length > 0) { return true; }
          else { 
            return false;
          }
        }
        else  { return true }
    }
  },
  GetKeyObject(ValueObject){
    const mystorefn = this;
    const keyname = [];
    let object
    try {
      object = Object.entries(ValueObject[0]);
    } catch (error) {
      object = Object.entries(ValueObject)
    }
    for(var x = 0; x <  object.length; x++){
      keyname.push(object[x][0])
    }
    return mystorefn.ckvalue(keyname) ? keyname : [] 

  },
  Addscope(stringscope){
      return "const {"+stringscope+"} = content "
  },
  GetVariableString(ArrayValue=[]){
    const myreact = this
    var strkey = ""
    ArrayValue.forEach((element,index) => {
      if((index+1)===ArrayValue.length) strkey += element
      else strkey += element+","
      //{a,b,c,d,e}
  });
    return myreact.ckvalue(strkey) ? strkey : ""; 
  },

  GetMonList(){
    const monthNamesEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthNamesTH = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
     return [monthNamesTH,monthNamesEN]
  },
  GetNameDay(){
    const DayNameEN = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const DayNameTH = ["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"]
    return [DayNameEN,DayNameTH]
  },
  getNameCurrentDay(){
    let mystore = this
    let date = new Date().getDay()
    return mystore.GetNameDay()[0][date]
  },
  getNameDayofWeek(d,number_day) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6:number_day); // adjust when day is sunday
    return new Date(d.setDate(diff));
  },
  LoadData(url, state, key='',DataSent={}) {
    const mystorefn = this;
    return new Promise(function(resolve, reject) {
      axios
        .post(
          url,
          DataSent,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: CONS.PREFIX_TOKEN + mystorefn.CheckToken("token")
            }
          }
        )
        .then(value => {
          const { data } = value;
          if(mystorefn.ckvalue(key)){
            state.setState({ [key]: data }) 
          }
            resolve(value);     
        }).catch((error)=>{
          // console.log("Error");
        }) 
    });
  },






  
  redirect(url) {
    window.location.href = url;
  },

  
  PostData(url,data,status_url="post",code_success,redirecurl,status=false,auth=false,element_progress=null) {
    const mystorefn = this;  
    if(status){
      Fnc.loadingScreen("กำลังบันทึก กรุณารอสักครู่")
    }
    return axios({
      url:url, 
      data:data,
      method:status_url,
      headers: {
        "Content-Type": "application/json",
        "Authorization": (auth ? CONS.AUTH_PREFIX + mystorefn.CheckToken("token") : '')
      },
      onUploadProgress: (progressEvent) => {
        if(mystorefn.ckvalue(element_progress)){
          if(mystorefn.ckvalue(element_progress.line_progress)){
            const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
            // console.log(Math.round((progressEvent.loaded * 100) / totalLength )+"%",element_progress.line_progress);
            element_progress.line_progress.value = Math.round(progressEvent.loaded * 100) / totalLength 
            element_progress.percent_parent.innerHTML = Math.round((progressEvent.loaded * 100) / totalLength )+"%"
          }
        }
      }
    }
    )
    .then(value => {
        if(status){
          Fnc.loadingScreen("กำลังบันทึก กรุณารอสักครู่")
        }
        else {}
      // status ? Fnc.loadingScreen("กำลังบันทึก กรุณารอสักครู่")  : '' ;
      if (value.data.statusCode === code_success) {
        setTimeout(() => {
          if (mystorefn.ckvalue(redirecurl)) mystorefn.redirect(redirecurl)
        }, 1000);
        return value;
      }
      else return value
    }).catch((error) => {
      console.log(error);
      console.log(error.response,'error.response');
      if(error.response !== undefined){
        if (error.response.status === 401) {
          localStorage.removeItem('token')
          mystorefn.redirect(CONS.URL_LINK + '/login?auth=false')
        } else {
          console.log(error)
        }
      }
  })
  },
  openpdf64(namefilepdf){
    window.open("data:application/pdf;base64,"+namefilepdf)
  },
  paginationclick(event,myreact,key){
      var rel = event.target.rel
      if (event.target.tabIndex === "-1") rel = parseInt(myreact.state.offset) - 1
      if (event.target.tabIndex === "+1") rel = parseInt(myreact.state.offset) + 1
      myreact.setState({[key]:rel});
  },
  openblank(url){
    window.open(url, '_blank');
  },
  get_last_parameter(string_status=false){
    if (string_status) return window.location.pathname.split("/")[window.location.pathname.split("/").length-1]
    else return +window.location.pathname.split("/")[window.location.pathname.split("/").length-1]
  },
  ConFirmProcess(title="ยืนยันการลบข้อมูล",process,data_params,confirm="ยืนยัน",cancel="ยกเลิก"){
//     ReactDOM.render(
//       <ConfirmModal id="confirmModal"
//           title={title}
//           textConfirm={confirm}
//           textCancel={cancel}
//           callBack={() => {
//             process(data_params)
//           }}
//           iconDisplay={false}
//           displayConfirm={true}
//       />, document.getElementById('modalPart')
//   )
//   $('#confirmModal').modal({ backdrop: 'static', keyboard: false, show: true })
  },
  remove_array_index(array,index){
    array.splice(index,1)
    return array
  },
  set_uni_array(myreact,key,value){
    if(myreact.state[key].indexOf(value)>=0){
      let index_array = myreact.state[key].indexOf(value)
      myreact.state[key].splice(index_array,1)
      let token_state = myreact.state[key]
      myreact.setState({[key]:token_state});
    }
    else {
      let token_state = myreact.state[key];
      token_state.push(value);
      myreact.setState({[key]:token_state});
    }
  },


  set_uni_array_global(variable,value){
    if(variable.indexOf(value)>=0){
      let index_array = variable.indexOf(value)
      variable.splice(index_array,1)
      let token_state = variable
      variable = token_state
    }
    else {
      let token_state = variable;
      token_state.push(value);
      variable = token_state
      // variable.setState({[key]:token_state});
    }
    return variable
  },
  OnText(value,CkValue){
    if(this.ckvalue(CkValue))  return value
    else  return
  },
  remove_class(element,class_name){
    if(element.getAttribute('class').search(class_name) >=0)
       element.classList.remove(class_name);
  },
  add_class(element,class_name){
    if(element.getAttribute('class').search(class_name) === -1 )
    element.classList.add(class_name);
  },
  search_class(element,class_name){
    if(element.getAttribute('class').search(class_name) >=0)
      return true
    else return false
  },

  get_week_current (){
    let store_fn = this
    let number_start_day = new Date(store_fn.Date_cal_current_day(0,"+")).getDay()
    let month_date = []
    for(var x = number_start_day; x > 0 ; x--){
        // let number_day = new Date(store_fn.Date_cal_current_day(x,"-")).getDate()
        // let number_str = weekdays[new Date(store_fn.Date_cal_current_day(x,"-")).getDay()]
        
        month_date.push(store_fn.DateCover(new Date(store_fn.Date_cal_current_day(x,"-"))))
        // console.log(store_fn.DateCover(new Date(store_fn.Date_cal_current_day(x,"-"))));
        //  เลขด้านซ้าย เช่น วันนี้ วัน พุธ มันจะใส่ อาทิตย์ จันทร์ อังคาร 
    }
    var number_remain = (7 - month_date.length)
    for(var v = 0; v < number_remain; v++){
        // let number_day = new Date(store_fn.Date_cal_current_day(v,"+")).getDate()
        // let number_str = weekdays[new Date(store_fn.Date_cal_current_day(v,"+")).getDay()]
        month_date.push(store_fn.DateCover(new Date(store_fn.Date_cal_current_day(v,"+"))))
        //เลขด้าน ขวา  ถ้าวันนี้เป็น วันพุธ จะใส่่ค่า พุธ พฤหัส ศุกร์ เสาร์
    }
    return month_date
  },

  start_week (){
    let rn = this; 
    var weekdays = rn.GetNameDay()[0]
        let store_date = []
        let number_start_day = new Date(rn.Date_cal_current_day(0,"+")).getDay()
        for(var x = number_start_day; x > 0 ; x--){
            let number_day = new Date(rn.Date_cal_current_day(x,"-")).getDate()
            let number_str = weekdays[new Date(rn.Date_cal_current_day(x,"-")).getDay()]
            store_date.push(number_str+" "+number_day)
        }
        var number_remain = (7 - store_date.length)
        for(var v = 0; v < number_remain; v++){
            
            let number_day = new Date(rn.Date_cal_current_day(v,"+")).getDate()
            let number_str = weekdays[new Date(rn.Date_cal_current_day(v,"+")).getDay()]
            store_date.push(number_str+" "+number_day)
        }
        return store_date
        
},
  next_week_sunday(round_week=0,status_operator="+",myreact=null){
    if(status_operator==="-"){
      if(round_week < 0){
        round_week = Math.abs(round_week)
        status_operator = "+"
      }
      if(round_week===0){
        status_operator = "+"
      }
    }

    if(status_operator==="+"){
      if(round_week < 0){
        round_week = Math.abs(round_week)
        status_operator = "-"
      }
      if(round_week===0){
        status_operator = "-"
      }
    }
    // console.log(status_operator,'status_operator');
    // console.log(round_week,'round_week');


    let mystore = this
    if(true){
      let store_date = [];
      let number_day = 0;
      let weekdays = mystore.GetNameDay()[0]
      let name_day = weekdays[new Date(mystore.Date_cal_current_day(0,"+")).getDay()]
    //  console.log(name_day,'name_day');
      if(status_operator === "-")
      switch (name_day) {
        case "Sunday": number_day = 7; break;
        case "Monday": number_day = 8; break;
        case "Tuesday": number_day = 9; break;
        case "Wednesday": number_day = 10; break;
        case "Thursday": number_day = 11; break;
        case "Friday": number_day = 12; break;
        case "Saturday": number_day = 13; break;
        default: number_day = 0
      }
    else if(status_operator === "+"){
      switch (name_day) {
        case "Sunday": number_day = 7; break;
        case "Monday": number_day = 6; break;
        case "Tuesday": number_day = 5; break;
        case "Wednesday": number_day = 4; break;
        case "Thursday": number_day = 3; break;
        case "Friday": number_day = 2; break;
        case "Saturday": number_day = 1; break;
        default: number_day = 0
      }
    }

      // console.log(number_day,'first');
      let day_new
      if(number_day > 0){
        day_new = number_day
        if(round_week === 0){
          // for(var v = 0; v < 7; v++){
          //   let first_day = mystore.DateCover(new Date(new Date().setDate((new Date().getDate() - (day_new - 1)) + v )))
          //   let number_day = new Date(first_day).getDate()
          //   let number_str = weekdays[new Date(first_day).getDay()]
          //   console.log(first_day,'first_day');
          //   store_date.push(number_str+" "+number_day) 
          // }
          // if(status_operator == "-"){
          //   store_date.reverse()
          // }
          // console.log(store_date,'store_date');
          // return store_date
          return mystore.start_week()
        }

        if(round_week === 1){
          for(var v = 0; v < 7; v++){
            let number_day
            let number_str

            if(status_operator==="+"){
              // console.log(new Date(mystore.Date_cal_current_day((day_new+v),status_operator)),'plus');
              number_day = new Date(mystore.Date_cal_current_day((day_new+v),status_operator)).getDate()
              number_str = weekdays[new Date(mystore.Date_cal_current_day((day_new+v),status_operator)).getDay()]
              store_date.push(number_str+" "+number_day) 
            }
            else if(status_operator==="-"){
              // console.log(new Date(mystore.Date_cal_current_day((day_new-v),status_operator)),'minus');
              number_day = new Date(mystore.Date_cal_current_day((day_new-v),status_operator)).getDate()
              number_str = weekdays[new Date(mystore.Date_cal_current_day((day_new - v),status_operator)).getDay()]
              store_date.push(number_str+" "+number_day) 
            }
            
          }
          // console.log(store_date,'store_date next_week_sunday');
          // if(status_operator == "-"){
          //   store_date.reverse()
          // }
          return store_date
        }

        if(round_week > 1){
          let number_multi_week  = (round_week - 1) * 7
          let sum_next_week
          let month_list_week = []
          let v
          for(v = 0; v < 7; v++){
            sum_next_week  = day_new+number_multi_week
            // console.log(new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator)));
            let number_day
            let number_str
            if(status_operator==="+"){
              number_day = new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator)).getDate()
              number_str = weekdays[new Date(mystore.Date_cal_current_day((sum_next_week + v),status_operator)).getDay()]
            }
            else if(status_operator==="-"){
              number_day = new Date(mystore.Date_cal_current_day((sum_next_week-v),status_operator)).getDate()
              number_str = weekdays[new Date(mystore.Date_cal_current_day((sum_next_week - v),status_operator)).getDay()]
            }
            


            store_date.push(number_str+" "+number_day) 
            month_list_week.push(mystore.GetMonList()[1][new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator)).getMonth()] + " "+ new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator)).getFullYear()  )
          // console.log(new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator)),'sum_next_week');
          }
          if(status_operator==="-"){
            store_date.reverse()
          }
          var count = {};
          // console.log(month_list_week,'month_list_week');
          month_list_week.forEach(function(i) { count[i] = (count[i]||0) + 1;});
          // console.log(count,'count');
          let get_number_count =  Object.entries(count).map((content,index)=>{
            return content[1]
          })
          // console.log(get_number_count,'get_number_count');
          let key_month = Object.keys(count)
          const indexOfMaxValue = get_number_count.indexOf(Math.max(...get_number_count));
          let max_month_name = key_month[indexOfMaxValue]
          // console.log(max_month_name,'max_month_name');
          if(mystore.ckvalue(myreact)){
             myreact.setState({week_month_name:max_month_name});
          }
          if(status_operator === "-"){
            store_date.reverse()
          }
          return store_date
        }

      }
      
    }
  },
  next_week_sunday_time_date(round_week=0,status_operator="+",myreact=null){
    // console.log("next_week_sunday",round_week);
    if(status_operator==="-"){
      if(round_week < 0){
        round_week = Math.abs(round_week)
        status_operator = "+"
      }
      if(round_week===0){
        status_operator = "+"
      }
    }

    if(status_operator==="+"){
      if(round_week < 0){
        round_week = Math.abs(round_week)
        status_operator = "-"
      }
      if(round_week===0){
        status_operator = "-"
      }
    }
    // console.log(status_operator,'status_operator');
    // console.log(round_week,'round_week');


    let mystore = this
    if(true){
      let store_date = [];
      let number_day = 0;
      let weekdays = mystore.GetNameDay()[0]
      let name_day = weekdays[new Date(mystore.Date_cal_current_day(0,"+")).getDay()]
     if(status_operator === "-")
      switch (name_day) {
        case "Sunday": number_day = 7; break;
        case "Monday": number_day = 8; break;
        case "Tuesday": number_day = 9; break;
        case "Wednesday": number_day = 10; break;
        case "Thursday": number_day = 11; break;
        case "Firday": number_day = 12; break;
        case "Saturday": number_day = 13; break;
        default: number_day = 0
      }
    else if(status_operator === "+"){
      switch (name_day) {
        case "Sunday": number_day = 7; break;
        case "Monday": number_day = 6; break;
        case "Tuesday": number_day = 5; break;
        case "Wednesday": number_day = 4; break;
        case "Thursday": number_day = 3; break;
        case "Firday": number_day = 2; break;
        case "Saturday": number_day = 1; break;
        default: number_day = 0
      }
    }

      // console.log(number_day,'first');
      let day_new
      if(number_day > 0){
        day_new = number_day
        if(round_week === 0){
          return mystore.start_week()
        }
        if(round_week === 1){
          for(var v = 0; v < 7; v++){
            // let number_day
            // let number_str
            if(status_operator==="+"){
              // console.log(new Date(mystore.Date_cal_current_day((day_new+v),status_operator)),'plus');
              // number_day = new Date(mystore.Date_cal_current_day((day_new+v),status_operator)).getDate()
              // number_str = weekdays[new Date(mystore.Date_cal_current_day((day_new+v),status_operator)).getDay()]
              store_date.push(new Date(mystore.Date_cal_current_day((day_new+v),status_operator))) 
            }
            else if(status_operator==="-"){
              // console.log(new Date(mystore.Date_cal_current_day((day_new-v),status_operator)),'minus');
              // console.log(new Date(mystore.Date_cal_current_day((day_new-v),status_operator)),'minus');
              store_date.push(new Date(mystore.Date_cal_current_day((day_new-v),status_operator))) 
            }    
          }
          // console.log(store_date,'store_date next_week_sunday');
          // if(status_operator == "-"){
          //   store_date.reverse()
          // }
          return store_date
        }

        if(round_week > 1){
          let number_multi_week  = (round_week - 1) * 7
          let sum_next_week
          let month_list_week = []
          let v
          for( v = 0; v < 7; v++){
            sum_next_week  = day_new+number_multi_week
            // console.log(new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator)));
            // let number_day
            // let number_str
            if(status_operator==="+"){
              // number_day = new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator)).getDate()
              // number_str = weekdays[new Date(mystore.Date_cal_current_day((sum_next_week + v),status_operator)).getDay()]
              store_date.push(new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator))) 
            }
            else if(status_operator==="-"){
              // number_day = new Date(mystore.Date_cal_current_day((sum_next_week-v),status_operator)).getDate()
              // number_str = weekdays[new Date(mystore.Date_cal_current_day((sum_next_week - v),status_operator)).getDay()]
              store_date.push(new Date(mystore.Date_cal_current_day((sum_next_week-v),status_operator))) 
            }
            


            
          month_list_week.push(mystore.GetMonList()[1][new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator)).getMonth()] + " "+ new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator)).getFullYear()  )
          // console.log(new Date(mystore.Date_cal_current_day((sum_next_week+v),status_operator)),'sum_next_week');
          }
          if(status_operator==="-"){
            // store_date.reverse()
          }
          var count = {};
          // console.log(month_list_week,'month_list_week');
          month_list_week.forEach(function(i) { count[i] = (count[i]||0) + 1;});
          // console.log(count,'count');
          let get_number_count =  Object.entries(count).map((content,index)=>{
            return content[1]
          })
          // console.log(get_number_count,'get_number_count');
          let key_month = Object.keys(count)
          const indexOfMaxValue = get_number_count.indexOf(Math.max(...get_number_count));
          let max_month_name = key_month[indexOfMaxValue]
          // console.log(max_month_name,'max_month_name');
          if(mystore.ckvalue(myreact)){
             myreact.setState({week_month_name:max_month_name});
          }
          if(status_operator === "-"){
            // store_date.reverse()
          }
          // console.log(store_date,'store_date next_week_sunday_FINAL');
          return store_date
        }

      }
      
    }
  },

  isBase64(encodedString){

    var regexBase64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    return regexBase64.test(encodedString);   // return TRUE if its base64 string.
  },

 async base64_to_inputfile_select_url(url){
   let DataBase64 = await  fetch(url)
    .then(res => res.blob())
    .then( async blob => {
      var promise1 = new Promise(function(resolve, reject) {
        const file = new File([blob], "File name",{ type: "image/png" })
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async function () {
          // console.log(reader.result);
          resolve(reader.result)
          return 
        };
      });
      let base64 = await promise1
      return base64
    })
    // console.log(DataBase64,'token');
    return DataBase64
},
  date_move(date_current,plus,minus){
    let operator = "+"
    let sum = 0 
    if(plus - minus  < 0 ){
        sum = Math.abs(plus - minus);
        operator = "-"
    }
    else{
        sum = plus - minus
    }
    if(operator==="+"){
      date_current.setDate(date_current.getDate() + sum);
    }  
    else if(operator==="-"){
      date_current.setDate(date_current.getDate() - sum);
    }
    //  console.log(date_current,'date_current');
   return date_current
  },
  // search string ในเวลา Array
  
  search_string_array_value(array_data,value_search){
    let a = array_data
    // element.getAttribute('class').split(" ");
    var term = value_search; // search term (regex pattern)
    var search = new RegExp(term , 'i'); // prepare a regex object
    let str_search = a.filter(item => search.test(item));
    return str_search
  },
  check_format_email(email){
    const re =   /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());     
  },
  set_open_popup_bootstrap(id){
      document.body.className = "modal-open"
      var backdrop = document.createElement("div")
      backdrop.id = "modal-backdrop"
      backdrop.className = "modal-backdrop fade"
      document.body.appendChild(backdrop)
      document.getElementById(id).classList.add("d-block")
      setTimeout(() => {
          document.getElementById(id).classList.add("show")
          backdrop.classList.add("show")
      }, 200) 
  },
  set_close_popup_bootstrap(id){
    try {
      let mystore = this
      var modal = document.getElementById(id)
      modal.classList.remove(`show`)
      var backdrop = document.getElementById(`modal-backdrop`)
      backdrop.classList.remove(`show`)
      document.body.classList.remove(`modal-open`)
      setTimeout(() => {
        mystore.remove_class(modal,'d-block')
          // ReactDOM.unmountComponentAtNode(document.getElementById('modal-root'))
          // backdrop.parentNode.removeChild(backdrop)
          try {
          backdrop.parentNode.removeChild(backdrop)
         } catch (e) {
           console.log(e.message);
         } 
      }, 300)
    } catch (e) {
      
    } 
  },
  ymd_Date(value,sp="/"){
    //  console.log("ymd_Date",value);
     value = value.split(sp)[2]+`${sp}`+value.split(sp)[1]+`${sp}`+value.split(sp)[0]
     return value
  },
  link_valid(str){
    str = str.search("http") !== -1  ?
    (str.search("www.") !== -1  ? str.replace("www.", "") :  str)
    : (str.search("www.") !== -1  ? str.replace("www.", "http://") :  "http://"+str)
    return str
  },
  show_popup (str){

    try {
      let back_drop = document.getElementById(str)
      back_drop.classList.add('backdrop');
      back_drop.classList.remove('d-none');
      document.getElementById('card-popup-'+str).classList.add('card-back-drop');
      setTimeout(() => {
        console.log(str,'str');
        document.getElementById('card-popup-'+str).style.opacity = 1;  
        document.getElementById('card-popup-'+str).style.marginTop = "5%";  
        document.getElementById('card-popup-'+str).style.marginBottom = "5%"; 
      }, 100);     
      document.getElementsByTagName("BODY")[0].style.overflow = "hidden"  ;      
    } catch (e) {
      
    }

  },
  hide_popup(str){
    try {
      console.log(str);
      document.getElementById('card-popup-'+str).style.opacity = 0;
      document.getElementById('card-popup-'+str).style.marginTop = "0";
      document.getElementById('card-popup-'+str).style.marginBottom = "0"; 
      setTimeout(() => {
        let back_drop = document.getElementById(str)
        back_drop.classList.remove('backdrop');
        back_drop.classList.add('d-none');
        document.getElementsByTagName("BODY")[0].style.overflow = "visible"  ;
      }, 500);      
    } catch (e) {
      
    } 

  }
}
export default ReuseNormal;