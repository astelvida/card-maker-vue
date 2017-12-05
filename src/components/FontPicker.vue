<template>
    <div class="font-grid">
        <div 
            v-for="font in fonts"
            class="font-item"
            :key="font"
            @click="handleClick(font)"
        >
            <div :class="getClassName(sampleClass, font)">
                <span :style="{ fontFamily: font }">love</span>
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
        'handleClick',
        'selected',
    ],
    data() {
        return {
            sampleClass: 'font-sample',
            labelClass: 'font-name',
            selectedClass: 'selected-font',
        };
    },
    methods: {
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

