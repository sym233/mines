import Vue from 'vue';
import MineField from './components/MineField.vue';

const v = new Vue({
    el: '#app',
    template: `
    <div>
        <h2>A Mines with Typescript and Vue</h2>
        <MineField></MineField>
    </div>
    `,

    components: {
        MineField,
    },
});
