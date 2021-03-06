const faker = require('faker');
const db = require('./index.js');

var data = [{phone: 'someName', images: ['https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone1.webp', 'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone2.webp', 'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone3.webp', 'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone4.webp', 'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone5.webp', 'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone6.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone7.webp']}];

var imageUrls = [
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone1.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone10.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone11.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone12.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone13.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone14.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone15.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone16.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone17.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone18.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone19.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone2.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone20.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone21.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone3.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone4.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone5.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone6.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone7.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone8.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone9.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone22.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone23.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone24.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone25.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone26.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone27.webp',
'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone28.webp'];


function getRandomUrlArr() {
  var temp = [];
  var urls = [];
  for(var i = 0; i < imageUrls.length; i++) {
    temp.push(i);
  }
  var randomNum = Math.floor((Math.random() * 7) + 7);
  for(var i = 0; i < randomNum; i++) {
    var randomInd = Math.floor((Math.random() * (temp.length - 1)) + 1);
    urls.push(imageUrls[temp[randomInd]])
    temp.splice(randomInd, 1);
  }
  return urls;
}

function addData() {
  var count = 0;
  while(count < 100) {
    var phone = {
      phone: faker.name.firstName(),
      images: getRandomUrlArr()
    }
    data.push(phone);
    count ++
  }
  return data;
}


addData();
for(var i = 0; i < data.length; i++) {
  db.addPhone(data[i].phone, data[i].images);
}