<!-- @format -->

<template>
	<div style="text-align: center; margin: 2rem 0">
		<h1 class="title">Star Wars</h1>
		<p>
			Type Script, Services, Composition API, Rest API
			<router-link to="/about">and more</router-link>
		</p>
	</div>
	<div v-if="loading">
		<Spinner />
	</div>
	<div v-else>
		<table>
			<thead>
				<tr>
					<td>Name</td>
					<td>Gender</td>
					<td>Mass</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in peoples.results" :key="index">
					<td>{{ item.name }}</td>
					<td>{{ item.gender }}</td>
					<td>{{ item.mass }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Spinner from '@/components/UI/Spinner.vue'
import DataService from '@/services/DataService'
import ResponseData from '@/types/ResponseData'
import Peoples from '@/types/Peoples'

export default defineComponent({
	components: { Spinner },
	setup() {
		onMounted(() => getPeople())

		const loading = ref(true as boolean)
		const peoples = ref({} as Peoples)

		const getPeople = () => {
			DataService.getAll()
				.then((res: ResponseData) => {
					loading.value = false
					peoples.value = res.data
					console.log(peoples.value)
				})
				.catch(e => console.log(e))
		}
		return {
			loading,
			peoples
		}
	}
})
</script>
