<template lang="html">
  <div>
    <form>
      <input type="text" v-model="data.title" placeholder="isi title">
      <input type="text" v-model="data.image" placeholder="isi link gambar">
      <input type="text" v-model="data.spec" placeholder="isi spesifikasi rumah">
      <input type="text" v-model="data.harga" placeholder="isi harga rumah">
      <input type="text" v-model="data.address" placeholder="isi alamat rumah">
      <input type="text" v-model="data.latitude" placeholder="isi lokasi latitude rumah">
      <input type="text" v-model="data.longitude" placeholder="isi lokasi longitude rumah">
      <br>
      <br>
      <button type="submit" v-on:click.prevent="postData()" class="btn btn-primary">Save product</button>
    </form>
    <hr>
    <p>{{msg}}</p>
  	<table class="table table-hover product-table">
  		<thead>
  			<tr>
  				<th>Number</th>
  				<th>title</th>
  				<th>image</th>
          <th>spec</th>
          <th>harga</th>
          <th>address</th>
          <th>lokasi</th>
  			</tr>
  		</thead>
  		<tbody>
  			<tr v-for="(data,index) in datas" track-by="slug">
          <td> {{ index + 1 }} </td>
          <td> {{ data.title }} </td>
          <td> <img v-bind:src="data.image" alt="Foto rumah" height="50%" width="50%"> </td>
  				<td> {{ data.spec }} </td>
          <td> {{ data.harga }} </td>
          <td> {{ data.address }} </td>
  			</tr>
  		</tbody>
  	</table>
    <div class="map"></div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
	name: 'index',
	data() {
		return {
			msg: 'jual rumah tanpa daya',
			datas: '',
			map: '',
			data: {
				title: '',
				image: '',
				spec: '',
				harga: '',
				address: '',
				latitude: '',
				longitude: '',
			}
		}
	},
	components: {

	},
	methods: {
		getData() {
			var self = this;
			axios.get('http://localhost:3000/')
				.then(function(response) {
					self.datas = response.data

					console.log(`ini jalan`);
					console.log(response.data);
				})
				.catch(function(error) {
					console.log(error);
				})
		},
		postData() {
			var self = this;
			console.log(JSON.stringify(self.data));
			axios.post('http://localhost:3000/', self.data)
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	},
	mounted() {
		this.getData()

	}
}
</script>

<style lang="css">
.map {
  width: 200px;
  height: 200px;
}
</style>
