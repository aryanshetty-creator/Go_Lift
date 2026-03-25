<template>
  <div class="progress-photos">
    <h3>Progress Photos</h3>
    <input type="file" @change="uploadPhoto" />
    <div class="photos">
      <img v-for="(photo, i) in photos" :key="i" :src="photo" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProgressPhotos',
  data() { return { photos: [] } },
  methods: {
    uploadPhoto(e) {
      const file = e.target.files[0];
      if (file) this.photos.push(URL.createObjectURL(file));
    }
  }
}
</script>
