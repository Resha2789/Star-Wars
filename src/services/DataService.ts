/** @format */

const _API_URL = 'https://swapi.dev/api'

import axios from 'axios'

class DataService {
	getAll(): Promise<any> {
		return axios.get(`${_API_URL}/people`)
	}
}

export default new DataService()
