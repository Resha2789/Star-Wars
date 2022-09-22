<!-- @format -->

<template>
	<div class="wrapper">
		<Header />
		<div class="wrapper-content">
			<div class="container">
				<router-view />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

interface IUser {
	login: string
	age: number
	isOnline: boolean
}

export default {
	components: { Footer, Header },
	data() {
		return {
			user: { login: 'goblin', age: 33, isOnline: true } as IUser
		}
	}
}
</script>

<style lang="scss"></style>
