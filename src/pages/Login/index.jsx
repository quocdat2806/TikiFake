import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {AES} from 'crypto-js'
import { useEffect } from "react";
import { useState } from "react";
import { firebase, auth } from "../../firebase";

  
  async  function handleClick(){
     
     const provider= new GoogleAuthProvider();
     const res =  await signInWithPopup(auth,provider);
     const data = {
      accessToken :res?.user?.accessToken,
     }
     fetch('http://localhost:8000/user/loginWithGoogle', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })

}
function handleLogin(){
  const encryptionKey = 'secretkey';
  const encryptedData = AES.encrypt(JSON.stringify({ email, passWord }), encryptionKey).toString();
  const messageEnvelope = {
      encryptedData,
      encryptedKey: encryptionKey
  };
  fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageEnvelope)
  })

 }
async  function handleSingUp(){
  const provider= new GoogleAuthProvider();
  const res =  await signInWithPopup(auth,provider);
  const data = {
   accessToken :res?.user?.accessToken,
  }
  fetch('http://localhost:8000/user/singUpWithGoogle', {
   method: 'POST',
   headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
   },
   body: JSON.stringify(data)
})

}



export const Login = () => {
  const authToken = getAuth()
  useEffect(()=>{
    console.log('hi')
    firebase.firestore().collection('s').get().then((querySnapshot) => {
      console.log(querySnapshot)
      querySnapshot.forEach(snapshot => {
          let data = snapshot.data();
          console.log(data);
      }
    )})
  const unscribled =  auth.onIdTokenChanged((user)=>{
      // console.log('user from firebase',user)
      })
      return()=>{
          unscribled();
      }
  },[])
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("INPUT_PHONE_NUMBER");
  const [result, setResult] = useState("");
  // const [email,setEmail]= useState('')
// const [passWord,setPassWord]= useState('')

  const signin = () => {
    if (phoneNumber === "") return;

    let verify = new firebase.auth.RecaptchaVerifier(
      "new-recaptcha-container",
      {
        size: "large",
      
      }
    );

    auth
      .signInWithPhoneNumber(phoneNumber, verify)
      .then((result) => {
        setResult(result);
        setStep("VERIFY_OTP");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const ValidateOtp = () => {
    if (otp === null) return;

    result
      .confirm(otp)
      .then((result) => {
        setStep("VERIFY_SUCCESS");
      })
      .catch((err) => {
        alert("Incorrect code");
      });
  };

  return (
    <div style={{ marginTop: 100,backgroundColor:'#ccc',opacity:10 } }>
      <center>
        {step === "INPUT_PHONE_NUMBER" && (
          <div>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="phone number"
            />
            <br />
            <br />
            <div id="new-recaptcha-container"></div>
            <button onClick={signin}>Send OTP</button>
          </div>
        )}

        {step === "VERIFY_OTP" && (
          <div>
            <input
              type="text"
              placeholder={"Enter your OTP"}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
            <br />
            <br />
            <button onClick={ValidateOtp}>Verify</button>
          </div>
        )}

        {step === "VERIFY_SUCCESS" && <h3>Verify success</h3>}

        {step === "VERIFY_FAIL" && <h3>Verify Fail</h3>}
      </center>
    </div>
  );
};

// <div style={{display:'flex',flexDirection:'column'}}>
//   <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="nhap email" />
//   <input onChange={(e)=>setPassWord(e.target.value)} value={passWord} placeholder="nhap mat khau"/>
//   <button onClick={handleLogin}>Dang nhap</button>
//   <button onClick={handleClick}>Dang nhap bang google</button>
//   <button onClick={handleSingUp}>Dang ki  bang google</button>
//   <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="text" placeholder=" dang ki  nhap so dien thoai" />
//   <button onClick={handleLayma}>lay ma otp</button>
//   <input  placeholder="nhap ma otp"/>
//   <button onClick={ValidateOtp}>Xac thuc</button>

// </div>
