(this.webpackJsonpreact_bootcamp_15=this.webpackJsonpreact_bootcamp_15||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),l=n(1),c=n(2),s=n(4),d=n(3),p=n(5),u=n(6),h=n.n(u),m=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleKeyPress=function(e){27===e.keyCode&&n.props.onClose()},n.handleBackdropClick=function(e){e.target===e.currentTarget&&n.props.onClose()},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.children;return o.a.createElement("div",{className:h.a.backdrop,onClick:this.handleBackdropClick,role:"presentation"},o.a.createElement("div",{className:h.a.modal},e))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={isModalOpen:!1},n.openModal=function(){return n.setState({isModalOpen:!0})},n.closeModal=function(){return n.setState({isModalOpen:!1})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.isModalOpen;return o.a.createElement("div",{className:"App"},o.a.createElement("button",{type:"button",onClick:this.openModal},"Open Modal"),e&&o.a.createElement(m,{onClose:this.closeModal},o.a.createElement("h1",null,"Modal Content"),o.a.createElement("p",null,"In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. It creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box."),o.a.createElement("button",{type:"button",onClick:this.closeModal},"Close Modal")))}}]),t}(a.Component);r.a.render(o.a.createElement(w,null),document.getElementById("root"))},6:function(e,t,n){e.exports={backdrop:"Modal_backdrop__1HQtT",modal:"Modal_modal__2KyUr"}},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.6db5b172.chunk.js.map