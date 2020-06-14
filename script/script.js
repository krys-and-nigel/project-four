// // console.log("CONNECTION ESTABLISHED");
// // console.log(`api_key=tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY`)




// //this is a request without ajax, just testing it as a backup

// nasaApp.request = async function(){
    //     let API_KEY = "tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY";
    //     let earth_date = `2016-12-26`;
    //     let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earth_date}&api_key=${API_KEY}`);
    //     console.log(response);
    //     let data = await response.json();
    //     console.log(`here is a photo from that date ${data.photos[1].img_src}`);
    // }
    // nasaApp.request();
    
    
    //date control (taken from MDN) will grab the input with a type of 'date' and parse the value as YYYY-MM-DD which is the format necessary for the 'earth_date' key in the api request. ie
    // const dateControl = document.querySelector('input[type="date"]');
    // dateControl.value = "2019-01-01" // sets a default
    // console.log(dateControl.value);
    // userBirthday = dateControl.value 
    // console.log(userBirthday.slice(5))
    // url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userBirthday}&api_key=${API_KEY}`,
    
    
    
    
    
const nasaApp = {}

nasaApp.init() = function(){


}

$(function (){

    nasaApp.init();
    
    let API_KEY = "tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY";
    let earth_date = `2016-12-26`;
    $.ajax({
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earth_date}&api_key=${API_KEY}`,
        method: 'GET',
        dataType: 'json',
    }).then(function(result){
        console.log('here is a photo from that date:', result.photos[1].img_src)
    });
});

