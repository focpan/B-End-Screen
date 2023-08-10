<template> <div> <div id="wordcloud"></div> </div> </template>

<script>
import wordcloud2 from 'wordcloud2';
export default {
    name: '',
    mounted() {
        this.drawWordCloud();
    },
    
    methods: {
        drawWordCloud() {
        const options = {
            list: [
            { text: 'apple', weight: 12 },
            { text: 'banana', weight: 8 },
            // 更多词汇和权重...
            ],
        };
        wordcloud2(this.$refs.wordcloud, options);
        },
    },
};
</script>