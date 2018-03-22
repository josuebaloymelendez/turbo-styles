export let getCode = (path, key, keyResult, external) =>{
	fetch(path)
	.then(result => {
		if(result.status !== 200){
			throw new Error(`No funciono baby ${result.status}`);
		}
		return result.text();
	})
	.then(body => {
		external.setState({ [key]: {...external.state[key], [keyResult]: body }});
	})
	.catch(error => {
		external.setState({ [key]: {...external.state[key], [keyResult]: "not-found" }});
	});
}