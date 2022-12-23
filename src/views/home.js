import {pageContainer} from '../components/pageContainer.js';


var home = {
  view: ()=>{
    return m(pageContainer,[
      m("#pageContent",[
        m("img#jake",{src: "../../assets/jake.png"}),
        m("#blackBox"),
        m("#overflowBox",[
          m("img#chili",{src:"../../assets/chili.png"})
        ])
      ])
    ])
  }
}

var catering = {
  view: ()=>{
    return m(pageContainer,[
      m("#pageContent",[
        m("div","NO")
      ])
    ])
  }
}

var reservations = {
  view: ()=>{
    return m(pageContainer,[
      m("#pageContent",[
        m("div","NO")
      ])
    ])
  }
}


export{home,catering,reservations};
