import{aW as c,X as u,Y as f,aj as g,c as m,o as i,m as h,a as r,G as t,t as s,F as v,x as y,p as b,bH as T}from"./CWc7XYsS.js";var l=c(),w=u`
    .p-terminal {
        height: dt('terminal.height');
        overflow: auto;
        background: dt('terminal.background');
        color: dt('terminal.color');
        border: 1px solid dt('terminal.border.color');
        padding: dt('terminal.padding');
        border-radius: dt('terminal.border.radius');
    }

    .p-terminal-prompt {
        display: flex;
        align-items: center;
    }

    .p-terminal-prompt-value {
        flex: 1 1 auto;
        border: 0 none;
        background: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
    }

    .p-terminal-prompt-label {
        margin-inline-end: dt('terminal.prompt.gap');
    }

    .p-terminal-input::-ms-clear {
        display: none;
    }

    .p-terminal-command-response {
        margin: dt('terminal.command.response.margin');
    }
`,k={root:"p-terminal p-component",welcomeMessage:"p-terminal-welcome-message",commandList:"p-terminal-command-list",command:"p-terminal-command",commandValue:"p-terminal-command-value",commandResponse:"p-terminal-command-response",prompt:"p-terminal-prompt",promptLabel:"p-terminal-prompt-label",promptValue:"p-terminal-prompt-value"},L=f.extend({name:"terminal",style:w,classes:k}),x={name:"BaseTerminal",extends:g,props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},style:L,provide:function(){return{$pcTerminal:this,$parentInstance:this}}},M={name:"Terminal",extends:x,inheritAttrs:!1,data:function(){return{commandText:null,commands:[]}},mounted:function(){l.on("response",this.responseListener),this.$refs.input.focus()},updated:function(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount:function(){l.off("response",this.responseListener)},methods:{onClick:function(){this.$refs.input.focus()},onKeydown:function(n){n.key==="Enter"&&this.commandText&&(this.commands.push({text:this.commandText}),l.emit("command",this.commandText),this.commandText="")},responseListener:function(n){this.commands[this.commands.length-1].response=n}}};function S(e,n,V,B,p,o){return i(),m("div",t({class:e.cx("root"),onClick:n[2]||(n[2]=function(){return o.onClick&&o.onClick.apply(o,arguments)})},e.ptmi("root")),[e.welcomeMessage?(i(),m("div",t({key:0,class:e.cx("welcomeMessage")},e.ptm("welcomeMessage")),s(e.welcomeMessage),17)):h("",!0),r("div",t({class:e.cx("commandList")},e.ptm("content")),[(i(!0),m(v,null,y(p.commands,function(a,d){return i(),m("div",t({key:a.text+d.toString(),class:e.cx("command"),ref_for:!0},e.ptm("commands")),[r("span",t({class:e.cx("promptLabel"),ref_for:!0},e.ptm("prompt")),s(e.prompt),17),r("span",t({class:e.cx("commandValue"),ref_for:!0},e.ptm("command")),s(a.text),17),r("div",t({class:e.cx("commandResponse"),"aria-live":"polite",ref_for:!0},e.ptm("response")),s(a.response),17)],16)}),128))],16),r("div",t({class:e.cx("prompt")},e.ptm("container")),[r("span",t({class:e.cx("promptLabel")},e.ptm("prompt")),s(e.prompt),17),b(r("input",t({ref:"input","onUpdate:modelValue":n[0]||(n[0]=function(a){return p.commandText=a}),class:e.cx("promptValue"),type:"text",autocomplete:"off",onKeydown:n[1]||(n[1]=function(){return o.onKeydown&&o.onKeydown.apply(o,arguments)})},e.ptm("commandText")),null,16),[[T,p.commandText]])],16)],16)}M.render=S;export{M as default};
