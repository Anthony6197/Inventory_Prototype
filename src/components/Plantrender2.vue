<script>
import { h } from "vue";
export default{
    props: {
        level: {
            default: 1
        }
    },
    setup({ level }){
        return () => h('canvas',{},"Still There?");
    }
};
</script>
<style scoped>
</style>>

