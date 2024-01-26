let otpGenerator = (digit) =>{
    let num = '0123456789'
    let otp = ''
    for(let i = 1 ; i <= digit; i++){
        otp += num[Math.floor(Math.random()*10)]
    }
    return otp
}
const otp = otpGenerator(4);
console.log( `Your 4-Digit OTP is: ${otp}`);



{function generateOTP() {
    let otp = '';
  
    for (let i = 0; i < 6; i++) {
      // Generate a random digit and append it to the OTP
      otp += Math.floor(Math.random() * 10);
    }
  
    return otp;
  }
  
  // Example usage
  const otp = generateOTP();
  console.log(`Your 6-Digit OTP is: ${otp}`);}
  


  