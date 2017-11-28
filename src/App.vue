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
                    :selected="selectedBucketType"
                    :handleClick="setImageType"
                    baseClass="btn-2"
                    activeClass="active-2"
                />
            </settings-row>
            
            <option-buttons v-if="selectedBucketType !== ''"
                :options="imageBucket.get('tags')"
                :type="selectedBucketType"
                :selected="selectedImageTag" 
                :handleClick="toggleImageTag"
                baseClass="btn-1"
                activeClass="active-1"
            />

            <background-options v-if="selectedImageTag !== ''"
                :images="imageBucket"
                :selectedBucketType="selectedBucketType"
                :selectedImageTag="selectedImageTag"
                v-on:click="setImage"
            />

            <image-edit
                :setOpacity="setOpacity"
                :setHue="setHue"
            />
        </div>
    
        <card :photo="activeImage"
            :opacity="opacity"
            :hue="hue"
        />
    </div>
</template>


<script>

import Card from './components/Card';
import SettingsRow from './components/SettingsRow';
import Words from './components/Words';
import OptionButtons from './components/OptionButtons';
import OptionButton from './components/OptionButton';
import BackgroundEdit from './components/BackgroundEdit';
import TextInput from './components/TextInput';
import MoreButton from './components/MoreButton';
import BackgroundOptions from './components/BackgroundOptions';

import { defaultPhoto, imageTypes } from './util/data';
import words from './json-data/words.json';
import photos from './json-data/unsplash_photos.json';
import { getTumblrImagesByUserList } from './api/tumblrApi';

const tumblr = JSON.parse(localStorage.getItem('tumblr'));

export default {
    name: 'app',
    components: {
        card: Card,
        'settings-row': SettingsRow,
        'option-buttons': OptionButtons,
        'option-button': OptionButton,
        'text-input': TextInput,
        'more-button': MoreButton,
        'background-options': BackgroundOptions,
        'image-edit': BackgroundEdit,
        words: Words,
    },
    data() {
        return {
            recipient: '',
            words: { list: words },
            imageTypes,
            photos: new Map(),
            tumblr: new Map(),
            opacity: 1,
            hue: 0,
            bgInFocus: false,
            selectedCategory: '',
            selectedImageTag: '',
            selectedBucketType: '',
            activeImage: defaultPhoto,
            selectedWords: [],
        };
    },

    created() {
        const entries = array => array
            .map(object => Object.entries(object)[0]);
            
        const keys = array => entries(array)
            .map(([key]) => key);
        
        const photoEntries = entries(photos);
        this.photos = new Map(photoEntries);
        this.photos.set('tags', keys(photos));
        this.photos.set('name', 'photos');
        this.photos.set('aliases', new Set(['Photography']));
        this.photos.set('featured', 'yellow');

        const tumblrEntries = entries(tumblr);
        this.tumblr = new Map(tumblrEntries);
        this.tumblr.set('tags', keys(tumblr));
        this.tumblr.set('name', 'tumblr');
        this.tumblr.set('aliases', new Set(['Graphic Art', 'Motion']));
        this.tumblr.set('featured', 'dreamcorp420');
    },
    mounted() {
        window.vm = this;
        window.$data = this.$data;
    },
    methods: {
        setImageType(type) {
            if (this.selectedBucketType !== type) {
                this.selectedBucketType = type;
                this.selectedImageTag = this.featuredTag;
            } else {
                this.selectedBucketType = '';
                this.selectedImageTag = '';
            }
        },
        toggleImageTag(tag) {
            this.selectedImageTag = this.selectedImageTag !== tag ? tag : '';
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
    },
    computed: {
        imageBucket() {
            const imageBucket = this.imageTypes[this.selectedBucketType];
            return this[imageBucket];
        },
        featuredTag() {
            return this.imageBucket.get('featured');
        },
    },
};
</script>

<style lang="scss">
    @import './assets/base-styles.scss';
    @import './assets/card-settings.scss';
    @import './assets/card-output.scss';
    @import './assets/buttons.scss';
</style>


