<template>
    <div class="font-grid">
        <div 
            v-for="font in fonts"
            class="font-item"
            :key="font"
            @click="handleClick(font)"
        >
            <div :class="getClassName(sampleClass, font)"
                :style="{ fontFamily: font }"
            >
                <span class="font-text">love</span>
            </div>
            <div :class="getClassName(labelClass, font)">
                <span>{{ font }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'fonts',
    ],
    data() {
        return {
            itemClass: 'font-item',
            sampleClass: 'font-sample',
            labelClass: 'font-name',
            selectedClass: 'selected-font',
            selected: '',
        };
    },
    methods: {
        handleClick(value) {
            this.selected = value;
        },
        getClassName(baseClass, font) {
            return [baseClass, this.isSelected(font) ? this.selectedClass : ''];
        },
        isSelected(selection) {
            return this.selected === selection;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

