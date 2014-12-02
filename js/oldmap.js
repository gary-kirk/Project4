/// <p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/Blenheim_Ginger_Ale.Still001.png"><source src="video/D1_Ep01_Blenheim_Ginger_Ale.mp4" type="video/mp4"></video></p>


function initialize() {
        var mapOptions = {
          center: { lat: 21.3222295, lng: -94.7266465},
          zoom: 4.   };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

//////// MARKER 1 //////////
        var marker1 = new google.maps.Marker({
            position: { lat: 35.920959, lng: -79.039291},
            map: map,
            title: 'Chapel Hill, North Carolina'
          });
        
        var infowindow1 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/Kuralt_Bicentennial Speech.Still001.jpg"><source src="video/Kuralt_Bicentennial_Speech.mp4" type="video/mp4"></video>The University of North Carolina at Chapel Hill celebrated its 200th Anniversary of becoming the nation\'s first public university. In 1993 President Charles Kuralt joined Bill Clinton at Kenan Stadium on the campus of UNC Chapel Hill to celebrate this historic milestone.</p>'
            
        });
        
                
        google.maps.event.addListener(marker1, 'click', function() {
            infowindow1.open(map,marker1);
          });


//////// MARKER 2 //////////
        var marker2 = new google.maps.Marker({
            position: { lat: 34.4779399, lng: -79.3308773},
            map: map,
            title: 'Marlboro, South Carolina'
          });
        
        var infowindow2 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep01_Blenheim_Ginger_Ale.mp4.00_04_46_03.Still001.jpg"><source src="video/D1_Ep01_Blenheim_Ginger_Ale.mp4" type="video/mp4"></video>Kuralt visits the Blenheim Ginger Ale Bottling Company in Marlboro, South Carolina. Both Blenheim and Canada Dry started making their ginger ale in 1904, but Blenheim\'s extra spicy flavor appeals only to certain palates.</p>'
            
        });
        
                
        google.maps.event.addListener(marker2, 'click', function() {
            infowindow2.open(map,marker2);
          });
        
//////// MARKER 3 //////////        
        var marker3 = new google.maps.Marker({
            position: { lat: 37.819929, lng: -122.478255},
            map: map,
            title: 'Golden Gate Bridge, San Francisco, CA'
          });
        
        var infowindow3 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep02_Golden_Gate_BridgeWorkers.mp4.00_00_58_07.Still001.jpg"><source src="video/D1_Ep02_Golden_Gate_BridgeWorkers.mp4" type="video/mp4"></video>Kuralt interviews three men who were on the construction team that built the Golden Gate Bridge, in San Francisco, California. The men remember the dangerous work and hard times vividly, but they take pride in having built something so great.</p>',

        });
                
        google.maps.event.addListener(marker3, 'click', function() {
            infowindow3.open(map,marker3);
          });


//////// MARKER 4 //////////        
        var marker4 = new google.maps.Marker({
            position: { lat: 35.2340605, lng: -81.0373656},
            map: map,
            title: 'Belmont, North Carolina'
          });
        
        var infowindow4 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep03_Bicycle_Man.mp4.00_02_11_18.Still001.jpg"><source src="video/D1_Ep03_Bicycle_Man.mp4" type="video/mp4"></video>In Belmont, North Carolina, Jethro Mann spends his extra time and money running an unofficial bicycle "lending library" out of his garage, for the children in his community whose families can not afford bicycles. With some help from Mann, children learn about values such as responsibility, cooperation, and politeness when they "check out" bikes.</p>',

        });
                
        google.maps.event.addListener(marker4, 'click', function() {
            infowindow4.open(map,marker4);
          });
        
//////// MARKER 5 //////////        
        var marker5 = new google.maps.Marker({
            position: { lat: 41.2349554, lng: -80.4972056},
            map: map,
            title: 'Sharon, Pennsylvania'
          });
        
        var infowindow5 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep04_Super_Shoe_Salesman.mp4.00_02_55_04.Still001.jpg"><source src="video/D1_Ep04_Super_Shoe_Salesman.mp4" type="video/mp4"></video>Larry Joltin of Sharon, Pennsylvania, an officially-recognized champion in the area of shoe sales. Admitting that there is a "fire burning in me," Joltin, whose motto is "If the shoe fits, sell it," will do anything for a sale, including delivering shoes to his clients\' homes.</p>',

        });
                
        google.maps.event.addListener(marker5, 'click', function() {
            infowindow5.open(map,marker5);
          });
        
//////// MARKER 6 //////////        
        var marker6 = new google.maps.Marker({
            position: { lat: 44.5341326, lng: -72.0020265},
            map: map,
            title: 'Lyndinville, Vermont'
          });
        
        var infowindow6 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep05_Down_Home_Remedies.mp4.00_00_37_20.Still001.jpg"><source src="video/D1_Ep05_Down_Home_Remedies.mp4" type="video/mp4"></video>Kuralt examines the plethora of old-fashioned patent medicines still on the market and billed as "good for what ails you." Specifically, he profiles Bag Balm and its manufacturer, John Norris of Lyndinville, Vermont. Invented in 1910 by Norris\'s father to heal the chapped udders of cows, Bag Balm eventually was (and still is) used by humans to cure a multitude of ills.</p>',

        });
                
        google.maps.event.addListener(marker6, 'click', function() {
            infowindow6.open(map,marker6);
          });
        
//////// MARKER 7 //////////        
        var marker7 = new google.maps.Marker({
            position: { lat: 34.716582, lng: -81.6867279},
            map: map,
            title: 'Buffalo, South Carolina'
          });
        
        var infowindow7 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep06_80-Year-Old_Cook.mp4.00_01_05_22.Still001.jpg"><source src="video/D1_Ep06_80-Year-Old_Cook.mp4" type="video/mp4"></video>Agatha Burgess of Buffalo, South Carolina, who for the past fourteen years has been cooking meals for any of the townspeople who want to come by and partake. She does this, as well as providing meals for local shut-ins, for a nominal fee since she wants to be a "friend to man."</p>',

        });
                
        google.maps.event.addListener(marker7, 'click', function() {
            infowindow7.open(map,marker7);
          });
        
//////// MARKER 8 //////////        
        var marker8 = new google.maps.Marker({
            position: { lat: 41.5008194, lng: -99.680902},
            map: map,
            title: 'Nebraska'
          });
        
        var infowindow8 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep07_Unique_Mailbox_Posts.mp4.00_01_17_29.Still001.jpg"><source src="video/D1_Ep07_Unique_Mailbox_Posts.mp4" type="video/mp4"></video>A tour along a one hundred mile stretch of road in Nebraska. Here he finds mailbox posts made from a number of unusual objects such as pumps, plows, wagon wheels, milk cans, cream separators, and windmills.</p>',

        });
                
        google.maps.event.addListener(marker8, 'click', function() {
            infowindow8.open(map,marker8);
          });
        
//////// MARKER 9 //////////        
        var marker9 = new google.maps.Marker({
            position: { lat: 38.008604, lng: -78.453199},
            map: map,
            title: 'Monticello - Charlottesville, VA'
          });
        
        var infowindow9 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep08_American_Citizen.mp4.00_05_07_15.Still001.jpg"><source src="video/D1_Ep08_American_Citizen.mp4" type="video/mp4"></video>Kuralt interviews Shah Wali Abdi, a scholar at Virginia Tech, who was one of ninety-seven people from twenty-eight countries to become U.S. citizens at a ceremony on the grounds of Monticello. Having left his native Afghanistan nine years ago, Abdi expresses his happiness and belief in the American dream.</p>',

        });
                
        google.maps.event.addListener(marker9, 'click', function() {
            infowindow9.open(map,marker9);
          });
        
//////// MARKER 10 //////////        
        var marker10 = new google.maps.Marker({
            position: { lat: 37.803835, lng: -122.449444},
            map: map,
            title: 'Exploratorium - San Francisco, CA'
          });
        
        var infowindow10 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep09_Blowing Bubbles.mp4.00_03_21_23.Still001.jpg"><source src="video/D1_Ep09_Blowing Bubbles.mp4" type="video/mp4"></video>Kuralt profiles the "wandering minstrel of bubbles," who has traveled around the country for eleven years celebrating the fine art of blowing bubbles. He demonstrates for Kuralt how he creates the carousel bubble, smoke bubbles, geometric bubbles, and bubbles within bubbles.</p>',

        });
                
        google.maps.event.addListener(marker10, 'click', function() {
            infowindow10.open(map,marker10);
          });
        
//////// MARKER 11 //////////        
        var marker11 = new google.maps.Marker({
            position: { lat: 39.7643389, lng: -104.8551114},
            map: map,
            title: 'Denver, CO'
          });
        
        var infowindow11 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep10_Junk-Mail_Heat.mp4.00_03_00_28.Still001.jpg"><source src="video/D1_Ep10_Junk-Mail_Heat.mp4" type="video/mp4"></video>Bill Conklin, a Denver man who heats his house with the junk mail he receives. Conklin shows how he uses this free fuel in his wood-burning stove to keep himself warm.</p>',

        });
                
        google.maps.event.addListener(marker11, 'click', function() {
            infowindow11.open(map,marker11);
          });
        
//////// MARKER 12 //////////        
        var marker12 = new google.maps.Marker({
            position: { lat: 39.7897414, lng: -74.6583092},
            map: map,
            title: 'New Jersey Pine Barrens'
          });
        
        var infowindow12 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep11_Simplify.mp4.00_02_55_18.Still001.jpg"><source src="video/D1_Ep11_Simplify.mp4" type="video/mp4"></video>Tom Brown, a man who lived in the New Jersey Pine Barrens for over a year using only what he found at his disposal for his food, clothing, and shelter. Brown, whom Kuralt compares to Henry David Thoreau in his effort to simplify his life, points out the wildlife native to the area.</p>',

        });
                
        google.maps.event.addListener(marker12, 'click', function() {
            infowindow12.open(map,marker12);
          });
        
//////// MARKER 13 //////////        
        var marker13 = new google.maps.Marker({
            position: { lat: 37.8942235, lng: -122.0402229},
            map: map,
            title: 'Walnut Creek, California'
          });
        
        var infowindow13 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep12_Domino_Theory.mp4.00_02_38_16.Still001.jpg"><source src="video/D1_Ep12_Domino_Theory.mp4" type="video/mp4"></video>Kuralt interviews Bob Speca of Walnut Creek, California, who has the world\'s largest collection of dominos. He also holds the world\'s record for domino-toppling, and on the air he sets up a display of 8,000 dominos which Kuralt promptly pushes over.</p>',

        });
                
        google.maps.event.addListener(marker13, 'click', function() {
            infowindow13.open(map,marker13);
          });
        
//////// MARKER 14 //////////        
        var marker14 = new google.maps.Marker({
            position: { lat: 40.7056258, lng: -73.97968},
            map: map,
            title: 'New York, New York'
          });
        
        var infowindow14 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep13_Old_Advertisements.mp4.00_00_35_22.Still001.jpg"><source src="video/D1_Ep13_Old_Advertisements.mp4" type="video/mp4"></video>Kuralt investigates the old advertisements painted directly on brick walls all over the country. They chronicle the history of advertising, merchandise, prices, and artwork over the decades.</p>',

        });
                
        google.maps.event.addListener(marker14, 'click', function() {
            infowindow14.open(map,marker14);
          });
        
//////// MARKER 15 //////////        
        var marker15 = new google.maps.Marker({
            position: { lat: 44.7862968, lng: -89.8267049},
            map: map,
            title: 'Wisconsin'
          });
        
        var infowindow15 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep14_Building_Wooden_Boats.mp4.00_04_37_03.Still001.jpg"><source src="video/D1_Ep14_Building_Wooden_Boats.mp4" type="video/mp4"></video>Ferd Nimphius, one of the last builders of wooden boats in the country. Located in central rural Wisconsin, Nimphius has constructed 111 schooners, square riggers, and frigates using old-fashioned methods and materials over the past sixty years.</p>',

        });
                
        google.maps.event.addListener(marker15, 'click', function() {
            infowindow15.open(map,marker15);
          });

//////// MARKER 16 //////////        
        var marker16 = new google.maps.Marker({
            position: { lat: 37.1698424, lng: -76.9714953},
            map: map,
            title: 'Route 10, Surrey County, Virginia'
          });
        
        var infowindow16 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep15_Roadside_Shangri-la.mp4.00_04_40_25.Still001.jpg"><source src="video/D1_Ep15_Roadside_Shangri-la.mp4" type="video/mp4"></video>Kuralt visits a thirteen-acre roadside rest stop created by Walter Mizenheimer. After retiring as a nurseryman, Mizenheimer planted a garden next to his home for the use of motorists along Route 10 in Surrey County, Virginia. Following his death, he left it to an admirer of his from Boston who still cares for it.</p>',

        });
                
        google.maps.event.addListener(marker16, 'click', function() {
            infowindow16.open(map,marker16);
          });
        
//////// MARKER 17 //////////        
        var marker17 = new google.maps.Marker({
            position: { lat: 38.2679434, lng: -84.6828904},
            map: map,
            title: 'Stamping Ground, Kentucky'
          });
        
        var infowindow17 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep16_Kentucky_Croquet-Playing_Field.mp4.00_03_36_17.Still001.jpg"><source src="video/D1_Ep16_Kentucky_Croquet-Playing_Field.mp4" type="video/mp4"></video>Kuralt profiles Archie Burchfield, a tobacco farmer from Stamping Ground, Kentucky, who is competing in the U.S. Croquet Association championship with socialites in Palm Beach, Florida.</p>',

        });
                
        google.maps.event.addListener(marker17, 'click', function() {
            infowindow17.open(map,marker17);
          });
        
//////// MARKER 18 //////////        
        var marker18 = new google.maps.Marker({
            position: { lat: 42.8962389, lng: -78.854702},
            map: map,
            title: 'Buffalo, NY'
          });
        
        var infowindow18 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep17_Black_Diamond_Private_Railcar.mp4.00_00_13_12.Still001.jpg"><source src="video/D1_Ep17_Black_Diamond_Private_Railcar.mp4" type="video/mp4"></video>Kuralt profiles America\'s oldest active privately owned rail road car, The Black Diamond.</p>',

        });
                
        google.maps.event.addListener(marker18, 'click', function() {
            infowindow18.open(map,marker18);
          });
        
//////// MARKER 19 //////////        
        var marker19 = new google.maps.Marker({
            position: { lat: 38.657448, lng: -75.6130779},
            map: map,
            title: 'Seaford, Delaware'
          });
        
        var infowindow19 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep18_Twidd.mp4.00_04_19_08.Still001.jpg"><source src="video/D1_Ep18_Twidd.mp4" type="video/mp4"></video>Kuralt profiles Horace Knowles, inventor of a "Thumb Twiddling" toy. A novelty toy used to facilitate thumb twiddling comprises a pair of closely spaced, parallel, tubular holes each adapted to receive the first digit of a thumb, the walls of the holes being smooth and slippery, and of diameter slightly larger than the thumbs. The thumbs are inserted into the holes and are rotated orbitally about an imaginary axis between the two holes.</p>',

        });
                
        google.maps.event.addListener(marker19, 'click', function() {
            infowindow19.open(map,marker19);
          });
        
//////// MARKER 20 //////////        
        var marker20 = new google.maps.Marker({
            position: { lat: 27.341069, lng: -82.5338703},
            map: map,
            title: 'Sarasota, Florida'
          });
        
        var infowindow20 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep19_The_Circus_Bandleader.mp4.00_00_47_01.Still001.jpg"><source src="video/D1_Ep19_The_Circus_Bandleader.mp4" type="video/mp4"></video>Kuralt interviews 90 year old Merle Evans, bandleader for Ringling Brothers Barnem & Bailey Circus.</p>',

        });
                
        google.maps.event.addListener(marker20, 'click', function() {
            infowindow20.open(map,marker20);
          });
        
//////// MARKER 21 //////////        
        var marker21 = new google.maps.Marker({
            position: { lat: 37.340562, lng: -87.5035685},
            map: map,
            title: 'Madisonville, KY'
          });
        
        var infowindow21 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep20_Whistle-Stop_Ride.mp4.00_04_23_19.Still001.jpg"><source src="video/D1_Ep20_Whistle-Stop_Ride.mp4" type="video/mp4"></video>Kuralt follows railroad engineer Billy Bird. Byrd is known as a master in his field. His love for the classic steam powered locomotive is part of every facet of his life.</p>',

        });
                
        google.maps.event.addListener(marker21, 'click', function() {
            infowindow21.open(map,marker21);
          });
        
//////// MARKER 22 //////////        
        var marker22 = new google.maps.Marker({
            position: { lat: 39.7074434, lng: -82.428903},
            map: map,
            title: 'Bremen, Ohio'
          });
        
        var infowindow22 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep21_Toothpick_Artist.mp4.00_02_34_19.Still001.jpg"><source src="video/D1_Ep21_Toothpick_Artist.mp4" type="video/mp4"></video>Kuralt profiles retired electrician turned toothpick artist Wayne Mcandlish.</p>',

        });
                
        google.maps.event.addListener(marker22, 'click', function() {
            infowindow22.open(map,marker22);
          });
        
//////// MARKER 23 //////////        
        var marker23 = new google.maps.Marker({
            position: { lat: 37.6, lng: -95.665},
            map: map,
            title: 'USA'
          });
        
        var infowindow23 = new google.maps.InfoWindow({
            content: '<p class="bubble"> <video class="map-video" controls preload="auto" poster="video/thumb/D1_Ep22_National_Weather_Survey.mp4.00_02_28_28.Still001.jpg"><source src="video/D1_Ep22_National_Weather_Survey.mp4" type="video/mp4"></video>Kuralt surveys America\'s "finest" weathermen. Featuring some of the tallest tales in weather.</p>',

        });
                
        google.maps.event.addListener(marker23, 'click', function() {
            infowindow23.open(map,marker23);
          });

  
      }
      

      
      google.maps.event.addDomListener(window, 'load', initialize);