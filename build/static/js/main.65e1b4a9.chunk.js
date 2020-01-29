(this["webpackJsonpreact-games"]=this["webpackJsonpreact-games"]||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),i=a(10),l=(a(28),a(4)),u=a(5),o=a(7),m=a(6),h=a(8),b=a(11),p=a(22);a(29);function v(e){return r.a.createElement("button",{className:"square "+e.value,id:e.value,onClick:e.onClick},e.value)}var d=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(v,{value:this.props.squares[e],onClick:function(){return t.props.SquareOnClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(r.a.Component),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,whoIsNext:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"SquareOnClick",value:function(e){var t=this.state.history,a=t[t.length-1].squares.slice();this.calculateWinner()||a[e]||(a[e]=this.state.whoIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:this.state.stepNumber+1,whoIsNext:!this.state.whoIsNext}))}},{key:"calculateWinner",value:function(){for(var e=this.state.history[this.state.stepNumber].squares,t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(p.a)(t[a],3),r=n[0],c=n[1],s=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[s])return e[r]}return null}},{key:"jumpToMove",value:function(e){var t=this.state.history.slice(0,e+1);this.setState({history:t,stepNumber:e,whoIsNext:e%2===0})}},{key:"render",value:function(){var e=this,t=this.state.history,a=t[this.state.stepNumber].squares,n=this.calculateWinner(),c=n?"Winner Is ".concat(n):"Next player: ".concat(this.state.whoIsNext?"X":"O"),s=t.map((function(t,a){var n=a?"Go to move #".concat(a):"Game is start";return r.a.createElement("li",{key:a},r.a.createElement("button",{onClick:function(){return e.jumpToMove(a)}},n))}));return r.a.createElement("div",{className:"content"},r.a.createElement(i.b,{to:"/GamesList/"},"Back To List"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(d,{SquareOnClick:function(t){return e.SquareOnClick(t)},squares:a,whoIsNext:this.state.whoIsNext})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,c),r.a.createElement("ol",null,s))),r.a.createElement("div",null))}}]),t}(r.a.Component),E=(a(35),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,whoIsNext:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement(i.b,{to:"/GamesList/"},"Back To List"),r.a.createElement("div",{className:"game"}),r.a.createElement("div",null))}}]),t}(r.a.Component)),O=[{path:"/Game/TicTacToe",name:"Tic-Tac-Toe",component:function(){return r.a.createElement(f,null)}},{path:"/Game/SurroundTheTerritory",name:"SurroundTheTerritory",component:function(){return r.a.createElement(E,null)}}],j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=O.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(i.b,{to:e.path},e.name))}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Games List"),r.a.createElement("ol",null,e))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/GamesList"},"GamesList"))))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"noGameStyle"},"No This Game")}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=[r.a.createElement(b.a,{path:"/",key:"index",exact:!0,component:y})].concat([r.a.createElement(b.a,{path:"/GamesList",key:"GamesList",component:j})]).concat(O.map((function(e){return r.a.createElement(b.a,{key:e.name,path:e.path,component:e.component})}))).concat([r.a.createElement(b.a,{key:"NoGame",component:N})]);return r.a.createElement("div",{className:"container"},r.a.createElement(b.c,null,e))}}]),t}(n.Component);s.a.render(r.a.createElement(i.a,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.65e1b4a9.chunk.js.map