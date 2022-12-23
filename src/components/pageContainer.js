var pageContainer = {
  view: (vnode)=>{
    return m("#pageContainer",{
      onclick: ()=>{
        //animate menu out
        var menu = document.querySelector("#mobile .menu");
        if(menu.classList.contains("slideIn")){
          menu.classList.remove("slideIn");
          menu.classList.add("slideOut");
        }
      },
      ontouchstart: ()=>{
        //animate menu out
        var menu = document.querySelector("#mobile .menu");
        if(menu.classList.contains("slideIn")){
          menu.classList.remove("slideIn");
          menu.classList.add("slideOut");
        }
      }
    },[vnode.children])
  }
}

export{pageContainer};
