<script>
    export let chiliFlowing = false;
    export let pageHeight;

    $: chiliStreamState = chiliFlowing ? "animation-play-state: running;" : "animation-play-state: paused;";
    $: displayAnimation = chiliFlowing ? "display:block;" : "display:none;";

</script>

<div id="chili_jake">
    <img class="jake" alt="static jake" src="pixel-jake.png" style="z-index:2;">
    <img class="jake" alt="animated jake" src="pixel-jake.gif" style="z-index:3; top: -453px;{displayAnimation}">
    <div id="chili_container" style="height:{pageHeight}px;">
        <div id="chili_stream" style="{chiliStreamState}"></div>
    </div>
</div>

<style>
     #chili_jake{
        position: relative;
        width: 320px;
        height: 453px;
        left: 50%;
        transform: translateX(-50%);
    }
    .jake{
        position: relative;
        z-index: 2;
        width: 320px;
        height: 453px;
        left: 0px;
    }
    #chili_container{
        position: absolute;
        width: 96px;
        top: 355px;
        left: 100px;
        z-index: 4;
        overflow: hidden;
    }
    #chili_stream{
        background-image: url("/chili_stream.png");
        background-repeat: repeat-y;
        height: 100%;
        width: 96px;
        position: absolute;
        top: calc(-100% - 64px);
        /**todo: calc the duration of the animation based on screen height*/
        animation: drop calc(2s + 0s) linear .7s 1 normal forwards, loop 2s linear calc(2.7s + 0s) infinite;

    }
    #chili_stream::after{
        content: url("/chili_tip.png");
        position: relative;
        top: 100%;
    }

    @keyframes loop {
        from {background-position-y: 0%;}
        to {background-position-y: 100%;}
    }

    @keyframes drop {
        from {top:calc(-100% - 64px);}
        to {top:0%;}
    }

</style>