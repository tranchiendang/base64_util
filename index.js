class Util {
	
	static encode(data_before){
		let buff = new Buffer(data_before);  
		let data_after = buff.toString('base64');

		return data_after;
	}

	static decode(data_before, type){
		let buff = new Buffer(data_before, 'base64');  
		let data_after = buff.toString(type);

		return data_after
	}
	
}

module.exports = Util;