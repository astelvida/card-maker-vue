<template>
    <div class="container">

        <div class="card-options-container">
            <settings-row label="Name your recipient:">
                <text-input v-model="recipient"/>
            </settings-row>

            <!-- <words label="Just some AF slang" :words="words"
                :selectedWords="selectedWords"
            /> -->

            <settings-row label="Background image">
                <option-buttons
                    :options="Object.keys(imageTypes)"
                    :selected="imageCategory"
                    :handleClick="setImageCategory"
                    baseClass="btn-2"
                    activeClass="active-2"
                />
            </settings-row>
            
            <option-buttons v-if="imageCategory !== ''"
                :options="imageBucket.get('tags')"
                :type="imageCategory"
                :selected="imageTag" 
                :handleClick="toggleImageTag"
                baseClass="btn-1"
                activeClass="active-1"
            />

            <background-options v-if="imageTag !== ''"
                :images="imageBucket"
                :imageCategory="imageCategory"
                :imageTag="imageTag"
                v-on:click="setImage"
            />

            <image-edit
                :setOpacity="setOpacity"
                :setHue="setHue"
            />
            
            <settings-row label="Fonts">
                <font-picker
                    :fonts="fonts"
                    :handleClick="setFont"
                    :selected="font"
                />
            </settings-row>
            
        </div>
    
        <card-view
            :image="activeImage"
            :opacity="opacity"
            :hue="hue"
        />
    </div>
</template>


<script>

import CardView from './components/CardView';
import SettingsRow from './components/SettingsRow';
import Words from './components/Words';
import OptionButtons from './components/OptionButtons';
import OptionButton from './components/OptionButton';
import BackgroundEdit from './components/BackgroundEdit';
import TextInput from './components/TextInput';
import MoreButton from './components/MoreButton';
import BackgroundOptions from './components/BackgroundOptions';
import FontPicker from './components/FontPicker';

import { defaultPhoto, imageTypes, fonts } from './util/data';
import newMap from './util/newMap';
import words from './json-data/words.json';
import photos from './json-data/unsplash_photos.json';
import { getTumblrImagesByUserList } from './api/tumblrApi';

export default {
    name: 'app',
    components: {
        'card-view': CardView,
        'settings-row': SettingsRow,
        'option-buttons': OptionButtons,
        'option-button': OptionButton,
        'text-input': TextInput,
        'more-button': MoreButton,
        'background-options': BackgroundOptions,
        'font-picker': FontPicker,
        'image-edit': BackgroundEdit,
        words: Words,
    },
    data() {
        return {
            recipient: '',
            words: { list: words },
            imageTypes,
            fonts,
            photos: new Map(),
            tumblr: new Map(),
            opacity: 1,
            hue: 0,
            bgInFocus: false,
            selectedCategory: '',
            imageTag: '',
            imageCategory: '',
            font: '',
            activeImage: defaultPhoto,
            selectedWords: [],
        };
    },

    created() {
        getTumblrImagesByUserList()
            .then(tumblrData => this.tumblr = newMap(tumblrData, 'tumblr'));
        this.photos = newMap(photos, 'photos');
    },
    mounted() {
        window.vm = this;
        window.$data = this.$data;
    },
    methods: {
        setImageCategory(type) {
            if (this.imageCategory !== type) {
                this.imageCategory = type;
                this.imageTag = this.featuredTag;
            } else {
                this.imageCategory = '';
                this.imageTag = '';
            }
        },
        toggleImageTag(tag) {
            this.imageTag = this.imageTag !== tag ? tag : '';
        },
        setImage(image) {
            this.activeImage = image;
        },
        setHue(hue) {
            this.hue = hue;
        },
        setOpacity(opacity) {
            this.opacity = opacity;
        },
        setFont(font) {
            console.log('FONT', font);
            this.font = font;
        },
    },
    computed: {
        imageBucket() {
            const imageBucket = this.imageTypes[this.imageCategory];
            return this[imageBucket];
        },
        featuredTag() {
            return this.imageBucket.get('featured');
        },
    },
};
</script>

<style lang="scss">
    @import './assets/normalize.css';
    @import './assets/base-styles.scss';
    @import './assets/card-settings.scss';
    @import './assets/card-output.scss';
    @import './assets/buttons.scss';
    @import './assets/font-picker.scss';
</style>


