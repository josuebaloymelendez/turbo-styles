

export let readTextFile = (path) =>{
	return new Promise((resolve,reject)=>{
		let request = new XMLHttpRequest();
		request.open('GET', path, true);
		request.onload = () => {
			if(request.status >= 200 && request.status < 400){
				resolve(request.response);
			} else {
				reject(new Error (request.status));
			}
		};
		request.onerror = () =>{
			reject(new Error("the file doesn't exist"));
		}
		request.send();
	});
}

export let readTextFileFS = (path) =>{
	
}
