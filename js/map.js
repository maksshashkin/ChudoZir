function initMap() {
			var pos = {lat: 48.600660, lng: 34.571500};
				var opt = {
					center: pos,
				zoom: 18,
			};
			
			var map = new google.maps.Map(document.getElementById("map"), opt);
			
			var marker = new google.maps.Marker({
				position: pos,
				map: map,
				
			});
	
	
		}
