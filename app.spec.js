//He uses mocha and this noobie assert to test it
//i tried npm install jest/chai but when i tried to const chai = require chai it says no assert when i run mocha and i cant run jest =(
//also why does the 2nd test pass? =( promises are confusing
import {assert, expect} from 'chai'


function getAnimals(fetch, id) {
	return fetch('http://api.givememyanimal.com/api/' + id)
	.then(response => response.json())
	.then(data => data.result[0])
}

//how do i make this like the function above?
const getAnimal = id => fetch('http://api.givememyanimal.com/api/${id}')


describe('getAnimals', ()=>{
	it('returns to correct url', ()=>{
		const fakeFetch = url =>{
			assert
			(
				url ===
				'http://api.givememyanimal.com/api/123'
			)
			return new Promise(function(resolve){

			})
		}
		getAnimals(fakeFetch, 123)

	})

	//why doesnt this fail!!!!! PROMISES WHAIIIIII!?!?!?!?!?!??!?!?!?!?!?!?!?!?!??!?!?!?!?!/!?!
	//?!?!?!?!?!?!??!?!?!??!?!?!?!?!?!??!?!?!?!?!?!?!?!?!?
	//?!?!?!?!??!?!?!?!?!?!?!?!?!?!?!?!?!?!?!??!?!?!
	it('should return the right data', (done)=>{
		const fakeFetch = url =>{
			return Promise.resolve({
				json: () => Promise.resolve({
					result: [{
						name: 'blubblub',
						type: 'fish'
					}]
				})

			})
		}

		getAnimals(fakeFetch, 'this input doesnt matter')
		.then(result => {
		 	expect(result.name).to.eql('blubblub')
		 	done();
	 })
	})
})
