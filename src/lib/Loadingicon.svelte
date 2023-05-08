<div id="loader">
    <div id="potGroup">
        <div id="pot">
            <div id="potShading"></div>
            <div id="potReflection"></div>
        </div>
        <div id="handle1" class="potHandle"></div>
        <div id="handle2" class="potHandle"></div>
        <div id="shadow"></div>
        <div id="chiliText">Cooking Chili</div>
    </div>
    <div id="smokeGroup">
        <div class="smoke"></div>
        <div class="smoke"></div>
        <div class="smoke"></div>
        <div class="smoke"></div>
    </div>
</div>




<style>
    :root {
        --smoke: #D1D1D1;; 
    }

    #loader{
        width: 320px;
        height: 380px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    } 
    #pot{
        width: 300px;
        height: 200px;
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        background-color: #8b9bb3;
        z-index: 2;
        border-radius: 0px 0px 115px 115px;
        overflow: hidden;
    }
    #potShading{
        position: absolute;
        width: 181px;
        height: 297px;
        background-color: #6f7c8f;
        z-index: 2;
        left: 172px;
        transform: rotate(27deg);
    }
    #potReflection{
        width: 34px;
        height: 27px;
        background: #b3c7e5;
        position: absolute;
        left: 14px;
        border-radius: 19px;
        top: 16px;
        transform: rotate(-56deg);
        display: none;
    }
    .potHandle{
        width: 50px;
        height: 25px;
        background: black;
        position: absolute;
    }
    #handle1{
        top: 107px;
        left: -25px;
        transform: rotate(17deg);
        border-radius: 10px 0px 0px 10px;
    }
    #handle2{
        left: 295px;
        top: 107px;
        transform: rotate(-17deg);
        border-radius: 0px 10px 10px 0px;
    }
    #shadow{
        width: 335px;
        height: 5px;
        background: black;
        position: absolute;
        top: 287px;
        border-radius: 40px;
        opacity: .3;
    }
    #chiliText{
        position: absolute;
        top: 300px;
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
    }
    #smokeGroup{
        width: 50px;
        height: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .smoke{
        width: 50px;
        height: 50px;
        background: var(--smoke);
        border-radius: 40px;
        position: absolute; 
    }

    #smokeGroup .smoke:nth-child(1){
        animation: rise 1s ease-out 0s infinite normal, shiftLeft 1s ease-out 0s infinite normal;
    }

    #smokeGroup .smoke:nth-child(2){
        animation: rise 1s ease-out .2s infinite normal, shiftRight 1s ease-out .2s infinite normal;
    }

    #smokeGroup .smoke:nth-child(3){
        animation: rise 1s ease-out .5s infinite normal, shiftLeft 1s ease-out .5s infinite normal;
    }
    #smokeGroup .smoke:nth-child(4){
        animation: rise 1s ease-out .9s infinite normal, shiftLeft 1s ease-out .9s infinite normal;
    }

    @keyframes rise {
        from {
            top:0px;
            opacity: .8;
            transform: scale(.5);
        }
        to {
            top:-100px;
            opacity: 0;
            transform: scale(1.5);
        }
    }

    @keyframes shiftLeft {
        from {
            left:0px;
        }
        to {
            left:-20px;
        }
    }

    @keyframes shiftRight {
        from {
            left:0px;
        }
        to {
            left:20px;
        }
    }

</style>