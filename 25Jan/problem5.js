//checking valid IP address.

let ipAddress = [
  '0.0.0.0',
  '192.158.1.38',
  '255.255.255.255',
  '192.258.1.38',
  '125.22.1.55',
  '111.0.0.256',
  '101,25.1.',
];

for (let i = 0; i < ipAddress.length; i++) {
  let val = ipAddress[i].split('.');
  // console.log(val);
  for (let j = 0; j < val.length; j++) {
    if ((+val[j] > 255 && +val[j] >= 0) || (+val[j] <= 255 && +val[j] < 0)) {
      console.log(`IP address is not valid ${ipAddress[i]}`);
    }
  }
}
