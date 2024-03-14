// import React, { useState } from "react"
// const FuncComp =()=>{
//   const [userdata,setuserdata] = useState({
//     FirstName : '',
//     LastName : '',
//     Email : '',
//     PhoneNumber : '',
//     FirstNameErr: '',
//     LastNameErr: '',
//     EmailErr: '',
//     PhoneNumberErr:'' 
//   })
//   handleChange=(e)=>{
//     const {name, value} = e.target
//     ({[name]: value})
//     console.log(state)
//   }

//   handleSubmit=(e)=>{
//     e.preventDefault()
//     handleValidation()
//   }

//   handleValidation=()=>{
//     let FirstNameErr= '';
//     let LastNameErr ='';
//     let EmailErr = ' ';
//     let PhoneNumberErr = '';
//       if(FirstName.length <=4){
//         FirstNameErr = "FirstName should be atleast 4 chars"
//       }

//       if(LastName.length <=1){
//         LastNameErr = "LastName should be atleast 1 char"
//       }

//       if(!Email.includes('@')){
//         EmailErr = "Enter a valid Email"
//       }

//       if(PhoneNumber.length !==10){
//         PhoneNumberErr = "Enter a valid Phonenumber"
//       }

//       if(FirstNameErr || LastNameErr || EmailErr || PhoneNumberErr){
//         ({FirstNameErr,LastNameErr,EmailErr,PhoneNumberErr})
//       }
//       else{
//         ({FirstNameErr,LastNameErr,EmailErr,PhoneNumberErr}) 
//       }
//   return(
  
//      <>
//       <h2>Function component - </h2>
//         <h1 className="text-warning">ContactUs</h1>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4"> </div>
//             <div className="col-md-4">
//               <form>
//                 <input type="text" placeholder="Enter your FirstName" className="form-control mt-1" name="FirstName" onChange={(e)=>{handleChange(e)}}></input>
//                 <p className="text-danger">{this.state.FirstNameErr}</p>
//                 <input type="text" placeholder="Enter your LastName" className="form-control mt-1" name="LastName" onChange={(e)=>{handleChange(e)}}></input>
//                 <p className="text-danger">{this.state.LastNameErr}</p>
//                 <input type="text" placeholder="Enter your Email" className="form-control mt-1"  name="Email" onChange={(e)=>{handleChange(e)}}></input>
//                 <p className="text-danger">{this.state.EmailErr}</p>
//                 <input type="text" placeholder="Enter your PhoneNumber" className="form-control mt-1" name="PhoneNumber" onChange={(e)=>{handleChange(e)}}></input>
//                 <p className="text-danger">{this.state.PhoneNumberErr}</p>
//                 <button className="btn btn-primary mt-3" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
//               </form>
//             </div>
//             <div className="col-md-4"> </div>
//           </div>
//         </div>
      
   
//     </>
//   )}
// }
// export default FuncComp