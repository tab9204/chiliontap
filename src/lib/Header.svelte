<script>
    import {fly} from 'svelte/transition';

    export let chiliFlowing = false;

    let held = false;
    let deltaX = 0;
    let totalDrag = 0; 

    $: displayPullText = chiliFlowing ? "opacity:0;" : "opacity:1;";

    const onDrag = (clientX)=>{
        if(held && clientX >= deltaX){
        if(totalDrag >= 15){
            chiliFlowing = true;
            return;
        }
        totalDrag = totalDrag + clientX - deltaX <= 15 ? totalDrag + clientX - deltaX : 15;
        deltaX = clientX;
        }
    }

    const onDown = (clientX)=>{
        deltaX = clientX;
        held = true;
    }

    const onUp = ()=>{
        held = false;
    }

</script>

<header transition:fly="{{ y: -200, opacity: 1, duration: 200}}">
    <h3 id="pullText" style="{displayPullText}">
    Pull -&gt;
    </h3>
    <div id="dragContainer"
        on:mousemove={(e)=>{onDrag(e.clientX);}}
        on:touchmove={(e)=>{onDrag(e.touches[0].clientX);}}
    >
    <div id='tap_handle' style="transform:rotate({totalDrag}deg);"
        on:mousedown={(e)=>{onDown(e.clientX);}}
        on:mouseup={(e)=>{onUp();}}
        on:touchstart={(e)=>{onDown(e.touches[0].clientX);}}
        on:touchend={(e)=>{onUp();}}
    ></div>
    <div id='tap_base'></div>
    </div>
</header>

<style>
    header{
        display: flex;
        justify-content: center;
        position: fixed;
        background: var(--primary);
        width: 100%;
        height: 130px;
        z-index: 99;
        top: 0px;
    }

    #dragContainer {
        width: 100px;
        height: 100px;
        margin-left: 20px;
    }
    #tap_base{
        background-image: url("/tap_base.png");
        background-position-y: -56px;
        height: 45px;
        width: 70px;
        position: relative;
        z-index: 2;
    }
    #tap_handle{
        background-image: url("/tap_handle.png");
        width: 70px;
        height: 57px;
        transform-origin: 26% 102%;
        position: relative;
        z-index: 0;
    }
    #pullText{
        align-self: center;
        position: relative;
        animation:  bounce 1s ease-out 0s infinite;
    }

    @keyframes bounce{
        0%{
            top: 0px;
        }
        50%{
            top: 5px;
        }
        100%{
            top:0px;
        }
    }

</style>