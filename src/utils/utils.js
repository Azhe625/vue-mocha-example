
export class Utils {
	constructor() {
	}

    add(x,y) {
        return x+y
    }

    asyncAdd(x,y) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x+y)
            },1000)
        })
    }
}