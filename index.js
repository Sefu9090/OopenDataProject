var allDaPictures = [
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Business_presentation_byVectorOpenStock.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/54/APEX_Business-IT_Global_Case_Challenge_2015.jpeg",
  "https://static.pexels.com/photos/30342/pexels-photo-30342.jpg",
  "https://previews.123rf.com/images/stockbroker/stockbroker1507/stockbroker150703700/42252623-Group-Of-Business-People-Listening-To-Colleague-Addressing-Office-Meeting-Stock-Photo.jpg",
  "https://c1.staticflickr.com/6/5659/30406876043_37346daa76_b.jpg",
  "https://static.pexels.com/photos/288477/pexels-photo-288477.jpeg",
  "https://c1.staticflickr.com/6/5327/16928125254_55e94fdb77_b.jpg",
  "http://maxpixel.freegreatpicture.com/static/photo/1x/Office-Students-People-Strategy-Startup-Business-849804.jpg",
  "https://understandhistorynow.files.wordpress.com/2012/05/070225roundtable1_600.jpg",
  "https://c1.staticflickr.com/5/4025/5143237009_accec2f1d2.jpg",
  "https://c1.staticflickr.com/8/7608/17011375151_2869028061_b.jpg",
  "https://c1.staticflickr.com/3/2138/2247354856_919b3fbdb9.jpg",
  "https://c1.staticflickr.com/4/3871/32839105630_4ed529ddde_b.jpg",
  "http://maxpixel.freegreatpicture.com/static/photo/1x/Chair-Desktop-Businessman-Business-Desk-Computer-1839191.jpg",
  "img/lorempixel-1.jpg",
  "img/lorempixel-2.jpg",
  "img/lorempixel-3.jpg",
  "img/lorempixel-4.jpg",
  "img/lorempixel-5.jpg",
  "img/lorempixel-6.jpg",
  "img/lorempixel-7.jpg",
  "img/lorempixel-8.jpg",
  "img/lorempixel-9.jpg",
  "img/lorempixel.jpg",
  "https://www.goodfreephotos.com/albums/business-and-technology/collaborating-on-a-business-project.jpg",
  "https://c1.staticflickr.com/3/2891/11123538363_07bb05134a_b.jpg",
  "http://static.kremlin.ru/media/events/photos/big/hb4yMAbFj3QM0hWZdKWYsMWnCDNdxAG9.jpeg",
  "https://static.pexels.com/photos/261013/pexels-photo-261013.jpeg",
  "http://static.kremlin.ru/media/events/photos/big/yW3Ecftt0R2A9UJVm5cGDkKcEAdKMgst.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d2/The_closing_plenary_session_-_building_global_firms_of_Indian_origin%2C_at_the_Horasis_Global_India_Business_Meeting_2009_%284588175705%29.jpg",
  "http://www.doncio.navy.mil/uploads/0510EPC34842.jpg",
  "http://static.kremlin.ru/media/events/photos/big/EZJuqDAQqAOCXuCrFYL9qeG5xdU6Spae.jpg",
  "http://static.kremlin.ru/media/events/photos/big/QYgJ6rdm0EvVCWFpfTWQnYHaDZeY1AfG.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bc/FEMA_-_40756_-_Small_Business_Administration_team_readies_for_applicants_in_Breckenridge%2C_MN.jpg",
  "https://static.pexels.com/photos/57825/pexels-photo-57825.jpeg",
  "https://c1.staticflickr.com/7/6011/6002107720_4534bd74e1_b.jpg",
  "http://www.doncio.navy.mil/uploads/1014FCO38332.jpg",
  "https://c1.staticflickr.com/8/7608/17011375151_2869028061_b.jpg",
  "https://media.defense.gov/2014/Mar/05/2000871409/400/400/0/140303-F-IJ798-015.JPG"
]

function getData() {
  var endpoint = 'https://data.lacity.org/resource/ngkp-kqkn.json'
  var search = document.getElementById("zips")
  var searching = search.value
  if (!searching) {
    searching = '9'
  }
  fetch(endpoint)
    .then(function(data) {
      return data.json()
    })
    .then(function(json) {
      var wantedData = json.filter(function(item) {
        return item.zip_code.match(searching)
          // if (searching.match(item.zip_code)){
          //   return true
          // }
          // return false
      })
      var finalHTML = '';
      console.log(searching)
      wantedData.forEach(function(item) {
        var randNum = Math.floor(Math.random() * allDaPictures.length)
        var cardItem = `
            <div class="col s12 m4"> 
              <div class="card" style="height: 400px;">
                <div class="card-image">
                  <img src=${allDaPictures[randNum]} style="height: 250px;">
                  <span class="card-title" style="color:black;text-align:left;font-size:20px;background: #9E9E9E;opacity: 0.8;" >${item.business_name}</span>
                </div>
                <div class="card-content" >
                  <p style="color: #2196F3;">
                    This business specializes in ${item.primary_naics_description},
                    which is located in ${item.street_address}, ${item.city}, CA ${item.zip_code}
                  </p>
                </div>
              </div>
            </div>
            `
        finalHTML += cardItem
      })
      console.log(wantedData)

      var resultDiv = document.getElementById('result')
      resultDiv.innerHTML = finalHTML
    })
    .catch(function(error) {
      console.log(error)
    })
}