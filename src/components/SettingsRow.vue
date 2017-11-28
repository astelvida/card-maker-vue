<template>            
    <div class="setting-row">
        <h4 class="label">{{ label }}</h4>
        <slot></slot>
    </div>
</template>

<script>

export default {
    components: {},
    props: ['label'],
};
</script>

<style scoped>
</style>