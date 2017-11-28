<template>
    <div classname="image-edit-container">
        <settings-row label="Opacity">
            <picker
                :onChange="setOpacity"
                max="1" min="0" step="0.05"
            />
        </settings-row>

        <settings-row label="Color">
            <picker
                :onChange="setHue"
                max="255" min="0" step="1"
            />
        </settings-row>
    </div>
</template>

<script>
import SettingsRow from '../components/SettingsRow';
import Picker from '../components/Picker';

export default {
    name: 'image-edit',
    components: {
        'settings-row': SettingsRow,
        picker: Picker,
    },
    props: [
        'setOpacity',
        'setHue',
    ],

    data() {
        return {
            bgInFocus: false,
        };
    },

    methods: {

        
    },

    computed: {
        
    },
    

};
</script>

<style >
</style>
