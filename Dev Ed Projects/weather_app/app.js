window.addEventListener('load', () => {
  let long;
  let lat;
  let tempeDesc = document.querySelector('.temp-description');
  let tempeDegree = document.querySelector('.temp-degree');
  let locationTZ = document.querySelector('.location-timezone');
  let tempSection = document.querySelector('.temperature');
  const tempSpan = document.querySelector('.temperature span')


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;



      const proxy = 'https://cors-anywhere.herokuapp.com/';

      const api = `${proxy}https://api.darksky.net/forecast/6c30bc1115e020c05ccc9884d618e1c5/${lat},${long}`;

      fetch(api).then(response => {
        return response.json();
      })
        .then(data => {
          const { temperature, summary, icon } = data.currently;
          //set DOM elements from api
          tempeDegree.textContent = temperature;
          tempeDesc.textContent = summary;
          locationTZ.textContent = data.timezone;

          //Conversion
          let celsius = (temperature - 32) * (5 / 9);

          //Set set icons
          setIcons(icon, document.querySelector('.icon'));

          //Change to Celsius
          tempSection.addEventListener('click', () => {
            if (tempSpan.textContent === 'F°') {
              tempSpan.textContent = 'C°';
              tempeDegree.textContent = Number((celsius).toFixed(2));
            } else {
              tempSpan.textContent = 'F°';
              tempeDegree.textContent = temperature;
            }
          });
        });
    });
  }
  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
