<template>
    <settings-row label="What's the ocassion?">
        <option-buttons :options="getKeys(categories)"
            :selected="selectedCategory" :toggle="toggleCategory"
        />
    </settings-row>
</template>



<script>
import { defaultPhoto } from '../util/data';

export default {
    props: [
        'selectedPhotoTag',
        'photos',
    ],

    methods: {
        toggle(selected, key) {
            this[key] === selected ? this[key] = '' : this[key] = selected;
        },
        toggleCategory(category) {
            this.toggle(category, 'selectedCategory');
        },

    },

    computed: {
        landscapePhotos() {
            if (!this.selectedPhotoTag) {
                return [];
            }
            return this.photos[this.selectedPhotoTag].list.filter(({ width, height }) =>
                (width / height > 1.2 && width / height < 1.8)) || [];
        },
        photoUrls() {
            return this.landscapePhotos
                .map(photo => ({ src: photo[`imgThumb`], id: photo.id }))
                .slice(0, 9);
        },
    },
    

};
</script>

<style>
</style>