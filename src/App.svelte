<script>
  import '@picocss/pico';
  import {onMount} from 'svelte';
  import {loadImages} from './lib/loader.js';
  import Header from './lib/Header.svelte';
  import Chilijake from './lib/Chilijake.svelte';
  import Loadingicon from "./lib/Loadingicon.svelte";
  import Bowl from "./lib/Bowl.svelte";
  let pageHeight = 0;
  let scrollY = 0;
  let chiliFlowing = false;//toggles the chili animation 
  const imagesToLoad = [
    "./pixel-jake.png",
    "./pixel-jake.gif",
    "./chili_stream.png",
    "./chili_tip.png",
    "./bowl_of_chili.png",
    "./tap_base.png",
    "./tap_handle.png",
    "./wave.png",
    "./bowl.png",
    "./bowl.gif"
  ]
  let allImagesLoaded = false;
  //dynamic css styling 
  $: loadingImages =  !allImagesLoaded ? "display:none" : "display:block";

  onMount(async()=>{
    const load = await loadImages(imagesToLoad);
    setTimeout(()=>{
      setTimeout(()=>{
        allImagesLoaded = true;
      },2000);
      console.log("done");
    },1000);

  })

</script>

<svelte:window bind:scrollY={scrollY}/>

{#if !allImagesLoaded}
  <div id="loadingScreen">
    <Loadingicon/>
  </div>
{/if}
<div id="contentScreen" style={loadingImages}>
  {#if scrollY <= 200}
    <Header bind:chiliFlowing></Header>
  {/if}
  <main class="container" bind:clientHeight={pageHeight}>
    <!--Add a red chili spash background to break up each section-->
    <section>
      <Chilijake {chiliFlowing} {pageHeight}></Chilijake>
    </section>
    <section class="bringToFront">
      <div class="dripWave topWave"></div>
      <h3>Menu</h3>
      <p>Check out our variety of chilis on tap!</p>
      <div class="grid">
        <div>
          <img class="menuItems" alt="Bowl of Chili" src="bowl_of_chili.png">
          <h5>Classic Chili</h5>
        </div>
        <div>
          <img class="menuItems" alt="Another Bowl of chili" src="./404.png">
          <h5>Supreme Chili</h5>
        </div>
      </div>
      <div class="dripWave botWave"></div>
    </section>
    <section class="bringToFront">
      <div class="dripWave topWave"></div>
      <h3>Testimonials</h3>
      <p>See our customers rave reviews!</p>
      <div class="grid">
        <div>
          <div>“I just couldn't get past the strange concept and subpar chili. I don't think I'll be back to Chili on Tap anytime soon.”</div>
          <div>- David L</div>
        </div>
        <div>
          <div>
            “The fact that there were no other menu options - just chili - made the whole experience even more bizarre.”
          </div>
          <div>- Jessica K</div>
        </div>
        <div>
          <div>“I mean, you never know what you're going to get when you come to Chili on Tap.”</div>
          <div>- Samantha J</div>
        </div>
      </div>
      <div class="dripWave botWave"></div>
    </section>
    <section class="bringToFront">
      <div class="dripWave topWave"></div>
      <div class="grid">
        <div>
          <h4>Contact Us</h4>
          <p>chili@chiliontap.com</p>
          <p>(241) 748-4174</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>102 Chestnut St, Coudersport, PA 16915</p>
        </div>
        <div>
          <h4>Hours</h4>
          <p>Monday: 11&nbsp;PM&nbsp;-&nbsp;7&nbsp;AM</p>
          <p>Tuesday: 11&nbsp;PM&nbsp;-&nbsp;7&nbsp;AM</p>
          <p>Wednesday: 11&nbsp;PM&nbsp;-&nbsp;7&nbsp;AM</p>
          <p>Thursday: 11&nbsp;PM&nbsp;-&nbsp;7&nbsp;AM</p>
          <p>Friday: 11&nbsp;PM&nbsp;-&nbsp;7&nbsp;AM</p>
          <p>Saturday: 11&nbsp;PM&nbsp;-&nbsp;7&nbsp;AM</p>
          <p>Sunday: 11&nbsp;PM&nbsp;-&nbsp;7&nbsp;AM</p>
        </div>
      </div>
      <div class="dripWave botWave"></div>
    </section>
  </main>
  <Bowl {chiliFlowing}></Bowl>
</div>
  

<style>
  section{
    margin-bottom: 200px !important;
  }
  #loadingScreen{
    height: 100%;
    width: 100%;
    background: var(--primary);
    overflow: hidden;
  }

  .menuItems{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 20px 0;
  }

  .bringToFront{
    position: relative;
    z-index: 5;
    padding: 30px;
    background-color: var(--primary);
  }
  .bringToFront .dripWave{
    background-image: url("/wave.png");
    background-repeat: repeat;
    position: relative;
    width: calc(100% + 60px);
    height: 100px;
    left: -30px;
  }

  .bringToFront .botWave{
    top: 100px;
  }

  .bringToFront .topWave{
    top: -100px;
    transform: rotate(180deg);
  }

  main .bringToFront:nth-child(3) > .dripWave{
    background-position-x: 300px;
  }

  main .bringToFront:nth-child(4) > .dripWave{
    background-position-x: 150px;
  }



  main{
    margin-top: 130px;
    max-width: 100%;
    padding: 0px;
  }

  h5{
    text-align: center;
  }

  .grid > div{
    padding: 10px 0;
  }

  .grid > div div {
    padding: 10px 0;
  }

</style>
