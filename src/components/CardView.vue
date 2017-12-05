
<template>
    <div class="card-display-container">
        <div class="card-display">
            <div class="card-background" :style="{ opacity }">
                <img :src="image.imgRegular"/>
                <div class="card-image-overlay" />
            </div>
            <div class="card-content">
                <div class="test">Hipsteria...</div>
                <div class="test">The switch uses the secondary color as an accent. The system bar uses the primary color, while the toolbar uses a darker variation of the primary color.</div>
                <textarea 
                    v-model="text"
                    class="text-editor"
                ></textarea>
                <pre>Text:{{ text }}</pre>
                <textarea 
                    name="textarea"
                    rows="10" 
                    cols="50"
                >Write something here
                </textarea>
                <div class="test">...Hipsteria</div>
            </div>
        </div>
    </div>

</template>

<script>

export default {

    data() {
        return {
            text: '',
        };
    },
    
    props: [
        'hue',
        'opacity',
        'image',
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