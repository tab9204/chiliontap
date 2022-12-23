var navigation = {
  view: ()=>{
    return m("#navigation",[
      m("#desktop",[
        m(".icon","Chili on Tap"),
        m(".menu",[
          m("div","Home"),
          m("div","Menu"),
          m("div","Catering"),
          m("div","Reservations")
        ])
      ]),
      m("#mobile",[
        m(".icon","Chili on Tap"),
        m(".menuBtn",{
          onclick: ()=>{
            //animate the menu in
            var menu = document.querySelector("#mobile .menu");
            menu.classList.add("slideIn");
            menu.classList.remove("slideOut");
          }
        },[
          m.trust('<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg>')
        ]),
        m(".menu",[
          m("div","Home"),
          m("div","Menu"),
          m("div","Catering"),
          m("div","Reservations")
        ])
      ])
    ])
  }
}

export{navigation};
