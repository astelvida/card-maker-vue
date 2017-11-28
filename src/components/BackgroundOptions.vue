<template>
    <transition-group appear
        v-on:enter="enter"
        mode="out-in"
        :css="false"
        name="fade"
        tag="div"
        class="bg-grid"
    >
        <div v-for="(image, index) in getImageUrls"
            :key="image.id"
            :data-index="index"
            class="bg-item"
            :el="image.id"
            @click.prevent="(e) => selectImage(image, e)"
        >
            <img :src="image.src" />
        </div>
    </transition-group>
</template>

<script>

export default {
    props: [
        'selectedImageTag',
        'selectedBucketType',
        'images',
    ],
    data() {
        return {

        };
    },

    methods: {
        enter(el, done) {
            const delay = el.dataset.index * 50;
            setTimeout(() => {
                el.style.opacity = 1;
                done();
            }, delay);
        },
        
        selectImage(image) {
            this.$emit('click', this.getImageById(image.id));
        },

        getImageById(id) {
            return this.activeImages.find(photo => id === photo.id);
        },
    },

    computed: {
        landscapeImages() {
            if (!this.images.has('tags')) {
                return [];
            }
            return this.activeImages.filter(({ width, height }) =>
                (width / height > 1.2 && width / height < 1.8)) || [];
        },

        activeImages() {
            if (!this.images.has('tags')) {
                return [];
            }
            return this.images.get(this.selectedImageTag);
        },

        getImageUrls() {
            const isPhotoBucket = this.images.get('name') === 'photos';
            const imageSet = isPhotoBucket ? this.landscapeImages : this.activeImages;
            return imageSet
                .map(photo => ({ src: photo[`img${'Small'}`], id: photo.id }))
                .slice(0, 10);
        },

    },
    

};
</script>

<style >
</style>
