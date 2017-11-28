<template>            
    <setting-row :label="label">
        <option-buttons
            :options="wordOptions"
            :selected="selectedWords"
            :toggle="toggleWord"
        />
        <!-- <more-button
            :showMore= "showMore" 
            text="More"
        /> -->
    </setting-row>
</template>

<script>
import SettingsRow from './SettingsRow';
import OptionButtons from './OptionButtons';
import MoreButton from './MoreButton';

export default {
    components: {
        'setting-row': SettingsRow,
        'option-buttons': OptionButtons,
        'more-button': MoreButton,
    },
    props: [
        'label',
        'words',
        'selectedWords',
    ],
    data() {
        return {
            wordIndex: 0,
        };
    },
    methods: {
        showMore() {
            this.wordIndex += 10;
            if (this.wordIndex > this.words.list.length) {
                this.wordIndex = 0;
            }
        },

        toggleWord(selection) {
            const index = this.selectedWords.findIndex(word => word === selection);
            index !== -1 ? this.selectedWords.splice(index, 1) : this.selectedWords.push(selection);
        },
    },

    computed: {
        wordOptions() {
            return this.words.list.slice(
                this.wordIndex,
                this.wordIndex + 10,
            );
        },
    },

};
</script>

<style>
    /* @import 'normalize.css';
    @import '../assets/stylesheet.css'; */
</style>