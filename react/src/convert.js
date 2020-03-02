// This function converts temps to C or F depending on the state of isFarenheit
function convert(temp, isFarenheit) {
  if(isFarenheit === 'C') {
    return (temp * (9/5)) + 32
  } else if (isFarenheit === 'F') {
    return (temp - 32) * (5/9)
  }
}

export default convert;
