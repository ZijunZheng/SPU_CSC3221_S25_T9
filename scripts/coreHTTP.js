// Constructor to create an XHR object
function coreHTTP() {
	this.http = new XMLHttpRequest();
};

coreHTTP.prototype.get = function (url) {
	return new Promise((resolve,reject) => {
		// Open the connection
		this.http.open("GET", url);
		// Process the request when it is returned
		this.http.onload = () => {
			if (this.http.status >= 200 && this.http.status <= 299) {
				resolve(this.http.responseText);
			} else {
				reject(`Get Error: ${this.http.status}:${this.http.statusText}`);
			};
		};
		// Send the request
		this.http.send();
	})
};

/* <<< HTTP POST request >>> */
coreHTTP.prototype.post = function(url, data) {
	return new Promise((resolve, reject) => {
		this.http.open("POST", url);
		this.http.setRequestHeader("content-type","application/json");
		this.http.onload = () => {
			if (this.http.status >= 200 && this.http.status <= 299) {
				resolve(this.http.responseText);
			} else {
				reject(`Post Error: ${this.http.status}:${this.http.statusText}`);
			};
		};
		this.http.send(JSON.stringify(data));
	})
};

/* <<< HTTP PUT request >>> */
coreHTTP.prototype.put = function(url, data) {
	return new Promise((resolve, reject) => {
		this.http.open("PUT", url);
		this.http.setRequestHeader("content-type","application/json");
		this.http.onload = () => {
	 		if (this.http.status >= 200 && this.http.status <= 299) {
				resolve(this.http.responseText);
	 		} else {
				reject(`Put Error: ${this.http.status}:${this.http.statusText}`);
	 		};
  		};
  		this.http.send(JSON.stringify(data));
  })
};

/* <<< HTTP DELETE request >>> */
coreHTTP.prototype.delete = function(url) {
  	return new Promise((resolve, reject) => {
	 	this.http.open("DELETE", url);
  
	 	this.http.onload = () => {
			if (this.http.status >= 200 && this.http.status <= 299) {
		  		resolve("Record deleted");
			} else {
		  		reject(`Delete Error: ${this.http.status}:${this.http.statusText}`);
			};
	 	};
	 	this.http.send();  
  })
};
