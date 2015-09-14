// app.js


/*
Lat :  51.444926 51.445085 , Lng: -0.045359 -0.044794
*/




window.bongiovi = require("./libs/bongiovi.js");
var dat = require("dat-gui");


var saveJson = function(obj) {
	var str = JSON.stringify(obj);
	var data = encode( str );

	var blob = new Blob( [ data ], {
		type: 'application/octet-stream'
	});
	
	url = URL.createObjectURL( blob );
	var link = document.createElement( 'a' );
	link.setAttribute( 'href', url );
	link.setAttribute( 'download', 'data.json' );
	var event = document.createEvent( 'MouseEvents' );
	event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
	link.dispatchEvent( event );
};


var encode = function( s ) {
	var out = [];
	for ( var i = 0; i < s.length; i++ ) {
		out[i] = s.charCodeAt(i);
	}
	return new Uint8Array( out );
};

(function() {
	var SceneApp = require("./SceneApp");

	App = function() {
		this.resultCount = 0;

		console.log(mapData.length);
		console.log(mapData[0]);

		if(document.body) this._init();
		else {
			window.addEventListener("load", this._init.bind(this));
		}
	}

	var p = App.prototype;

	p._init = function() {
		if(!window.map) {
			bongiovi.Scheduler.next(this, this._init);
			return;
		}
		// this.canvas = document.createElement("canvas");
		// this.canvas.width = window.innerWidth;
		// this.canvas.height = window.innerHeight;
		// this.canvas.className = "Main-Canvas";
		// document.body.appendChild(this.canvas);
		// bongiovi.GL.init(this.canvas);

		// this._scene = new SceneApp();
		// bongiovi.Scheduler.addEF(this, this._loop);

		// this.gui = new dat.GUI({width:300});

		this.elevator = new google.maps.ElevationService();

		var TL = new google.maps.LatLng(MapModel.TL.lat, MapModel.TL.lng);
		var TR = new google.maps.LatLng(MapModel.TL.lat, MapModel.BR.lng);
		var BL = new google.maps.LatLng(MapModel.BR.lat, MapModel.TL.lng);
		var BR = new google.maps.LatLng(MapModel.BR.lat, MapModel.BR.lng);
		this.TL = TL; this.TR = TR; this.BL = BL; this.BR = BR;

		new google.maps.Marker({position:TL,map:map});
		new google.maps.Marker({position:BL,map:map});
		new google.maps.Marker({position:BR,map:map});
		new google.maps.Marker({position:TR,map:map});

		this.markers = [];
		this.points = [];

		var height = MapModel.TL.lat - MapModel.BR.lat;
		var width = MapModel.BR.lng - MapModel.TL.lng;
		var scale = 2;
		var gap = height / (428);

		this.requests = [];
		for(var lat = MapModel.BR.lat; lat<MapModel.TL.lat; lat+=gap) {
			var left = new google.maps.LatLng(lat, MapModel.TL.lng);
			var middle = new google.maps.LatLng(lat, (MapModel.TL.lng+MapModel.BR.lng) * .5);
			var right = new google.maps.LatLng(lat, MapModel.BR.lng);

			var pathRequestLeft = {
			    'path': [left, middle],
				'samples': 330
			}

			var pathRequestRight = {
			    'path': [middle, right],
				'samples': 330
			}

			this.requests.push(pathRequestLeft);
			this.requests.push(pathRequestRight);
		}

		this.pixels = [];
		window.pixels = this.pixels;

		// this.getPath();

		this.generateMapCanvas();
	};


	p.generateMapCanvas = function() {
		var w = mapData[0].length * 2;
		var h = mapData.length / 2;

		console.log("Map size : ", w, h);


		var canvas = document.createElement("canvas");
		canvas.className = 'heightMap';
		canvas.width = w;
		canvas.height = h;
		document.body.appendChild(canvas);
		console.log(canvas);
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = 'rgba(255, 255, 255, 1)';
		ctx.fillRect(0, 0, w, h);

		var imageData = ctx.getImageData(0, 0, w, h);
		console.log(imageData);
		var pixels = imageData.data;

		function setPixel(x, y, value) {
			var index = (x + y * w) * 4;
			pixels[index] = value;
			pixels[index+1] = value;
			pixels[index+2] = value;
			pixels[index+3] = 255;
		}


		var i, j, x, y, height;
		var left, right;

		for(i=0; i<mapData.length; i+=2 ) {
			left = mapData[i];
			right = mapData[i+1];

			for(j=0; j<left.length; j++) {
				x = j+left.length; 
				y = i/2;
				height = left[j];
				setPixel(x, y, height);
			}

			for(j=0; j<right.length; j++) {
				x = j; 
				y = i/2;
				height = right[j];
				setPixel(x, y, height);
			}
		}


		imageData.data = pixels;
		ctx.putImageData(imageData, 0, 0);

	};

	p.getPath = function() {
		if(this.requests.length == 0 ) {
			saveJson(this.pixels);
			return; 
		}
		console.log("Request remain : ", this.requests.length);
		var pathRequest = this.requests.pop();
		this.elevator.getElevationAlongPath(pathRequest, this._onResult.bind(this));
	};

	p._onResult = function(results, status) {
		if (status != google.maps.ElevationStatus.OK) {
			console.log('Not Ok yet');
    		return;
		}

		this.pixels[this.resultCount] = [];
		var el;

		for(var i=0; i<results.length; i++) {
			el = getNumber(results[i].elevation);

			this.pixels[this.resultCount].push(el);
		}


		function getNumber(value) {
			var tmp = Math.pow(10, 3);
			return Math.floor(value * tmp) / tmp;
		}


		this.resultCount++;

		// this.getPath();
		bongiovi.Scheduler.delay(this, this.getPath, [], 10000);
	};

	p._loop = function() {
		this._scene.loop();
	};



})();


new App();