<script>
    export let chiliFlowing = false;

    $: displayAnimation = chiliFlowing ? "display:block;" : "display:none;";

</script>

<img src="./bowl.png" alt="Just a bowl" style="z-index:2;" />
<img src="./bowl.gif" alt="Splashing bowl" style="z-index:3; {displayAnimation}" />

<style>
    img{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>