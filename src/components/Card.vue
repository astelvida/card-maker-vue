
<template>
    <div class="card-display-container">
        <div class="card-display">
            <div class="card-background" 
                :style="{ opacity }"
            >
                <img :src="photo.imgRegular"/>
                <div class="card-image-overlay" />
            </div>
            <div class="card-content">
                <div class="test">Hipsteria...</div>
                <div class="test">The switch uses the secondary color as an accent. The system bar uses the primary color, while the toolbar uses a darker variation of the primary color.</div>
                <div class="test">...Hipsteria</div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    
    props: [
        'hue',
        'opacity',
        'photo',
    ],

    methods: {
        getCategoryPropByKey(key) {
            return this.category in this.categories ?
                this.categories[this.category][key] :
                'oops! no such category';
        },
    },

    computed: {
        bgColor() {
            return `hsl(${this.hue}, 50%, 50%)`;
        },
    },
};
</script>

<style>
    
</style>