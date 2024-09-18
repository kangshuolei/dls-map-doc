import{c as e,j as t,a as s,I as i,aS as n,o as d,D as l}from"./chunks/framework.pVLthVjP.js";const o=t("h1",{id:"markdown-extension-examples",tabindex:"-1"},[s("Markdown Extension Examples "),t("a",{class:"header-anchor vp-link",href:"#markdown-extension-examples","aria-label":'Permalink to "Markdown Extension Examples"'},"​")],-1),p=t("p",null,"This page demonstrates some of the built-in markdown extensions provided by VitePress.",-1),h=t("h2",{id:"syntax-highlighting",tabindex:"-1"},[s("Syntax Highlighting "),t("a",{class:"header-anchor vp-link",href:"#syntax-highlighting","aria-label":'Permalink to "Syntax Highlighting"'},"​")],-1),r={href:"https://github.com/shikijs/shiki",class:"vp-link",target:"_blank",rel:"noreferrer"},c=n(`<p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`js{4}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor vp-link" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: info</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is an info box.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a tip.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a warning.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a dangerous warning.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: details</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a details block.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="more" tabindex="-1">More <a class="header-anchor vp-link" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2>`,14),k={href:"https://vitepress.dev/guide/markdown",class:"vp-link",target:"_blank",rel:"noreferrer"},u=n('<p>当然，这是转换成 Markdown 格式的中文版：</p><h2 id="button-api" tabindex="-1">Button API <a class="header-anchor vp-link" href="#button-api" aria-label="Permalink to &quot;Button API&quot;">​</a></h2><h3 id="button-属性" tabindex="-1">Button 属性 <a class="header-anchor vp-link" href="#button-属性" aria-label="Permalink to &quot;Button 属性&quot;">​</a></h3><div class="vp-table"><table><thead><tr><th>名称</th><th>描述</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>按钮尺寸</td><td><code>enum</code></td><td>—</td></tr><tr><td>type</td><td>按钮类型</td><td><code>enum</code></td><td>—</td></tr><tr><td>plain</td><td>是否为朴素按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>text <span class="vp-tag">2.2.0</span></td><td>是否为文字按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>bg <span class="vp-tag">2.2.0</span></td><td>是否始终显示文字按钮的背景色</td><td><code>boolean</code></td><td>false</td></tr><tr><td>link <span class="vp-tag">2.2.1</span></td><td>是否为链接按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>round</td><td>是否为圆角按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>circle</td><td>是否为圆形按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>loading</td><td>是否显示加载状态</td><td><code>boolean</code></td><td>false</td></tr><tr><td>loading-icon</td><td>自定义加载图标组件</td><td><code>string</code> / <code>Component</code></td><td>Loading</td></tr><tr><td>disabled</td><td>是否禁用按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>icon</td><td>图标组件</td><td><code>string</code> / <code>Component</code></td><td>—</td></tr><tr><td>autofocus</td><td>是否自动获取焦点，和原生按钮的 <code>autofocus</code> 属性相同</td><td><code>boolean</code></td><td>false</td></tr><tr><td>native-type</td><td>与原生按钮的 <code>type</code> 属性相同</td><td><code>enum</code></td><td>button</td></tr><tr><td>auto-insert-space</td><td>是否自动在两个中文字符之间插入空格</td><td><code>boolean</code></td><td>—</td></tr><tr><td>color</td><td>自定义按钮颜色，自动计算 <code>hover</code> 和 <code>active</code> 状态的颜色</td><td><code>string</code></td><td>—</td></tr><tr><td>dark</td><td>暗色模式，自动将 <code>color</code> 转换为暗色模式</td><td><code>boolean</code></td><td>false</td></tr><tr><td>tag <span class="vp-tag">2.3.4</span></td><td>自定义元素标签</td><td><code>string</code> / <code>Component</code></td><td>button</td></tr></tbody></table></div><h3 id="button-插槽" tabindex="-1">Button 插槽 <a class="header-anchor vp-link" href="#button-插槽" aria-label="Permalink to &quot;Button 插槽&quot;">​</a></h3><div class="vp-table"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>default</td><td>自定义默认内容</td></tr><tr><td>loading</td><td>自定义加载组件</td></tr><tr><td>icon</td><td>自定义图标组件</td></tr></tbody></table></div><h3 id="button-exposes" tabindex="-1">Button Exposes <a class="header-anchor vp-link" href="#button-exposes" aria-label="Permalink to &quot;Button Exposes&quot;">​</a></h3><div class="vp-table"><table><thead><tr><th>名称</th><th>描述</th><th>类型</th></tr></thead><tbody><tr><td>ref</td><td>按钮 HTML 元素</td><td><code>Ref&lt;HTMLButtonElement&gt;</code></td></tr><tr><td>size</td><td>按钮尺寸</td><td><code>ComputedRef&lt;&#39;&#39; | &gt;</code></td></tr><tr><td>type</td><td>按钮类型</td><td><code>ComputedRef&lt;&#39;&#39; | &gt;</code></td></tr><tr><td>disabled</td><td>按钮禁用状态</td><td><code>ComputedRef&lt;boolean&gt;</code></td></tr><tr><td>shouldAddSpace</td><td>是否自动添加空格</td><td><code>ComputedRef&lt;boolean&gt;</code></td></tr></tbody></table></div><h2 id="buttongroup-api" tabindex="-1">ButtonGroup API <a class="header-anchor vp-link" href="#buttongroup-api" aria-label="Permalink to &quot;ButtonGroup API&quot;">​</a></h2><h3 id="buttongroup-属性" tabindex="-1">ButtonGroup 属性 <a class="header-anchor vp-link" href="#buttongroup-属性" aria-label="Permalink to &quot;ButtonGroup 属性&quot;">​</a></h3><div class="vp-table"><table><thead><tr><th>名称</th><th>描述</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>控制该按钮组内按钮的尺寸</td><td><code>enum</code></td><td>—</td></tr><tr><td>type</td><td>控制该按钮组内按钮的类型</td><td><code>enum</code></td><td>—</td></tr></tbody></table></div><h3 id="buttongroup-插槽" tabindex="-1">ButtonGroup 插槽 <a class="header-anchor vp-link" href="#buttongroup-插槽" aria-label="Permalink to &quot;ButtonGroup 插槽&quot;">​</a></h3><div class="vp-table"><table><thead><tr><th>名称</th><th>描述</th><th>子标签</th></tr></thead><tbody><tr><td>default</td><td>自定义按钮组的内容</td><td>Button</td></tr></tbody></table></div>',13),v=JSON.parse('{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"Syntax Highlighting","slug":"syntax-highlighting","link":"#syntax-highlighting","children":[]},{"level":2,"title":"Custom Containers","slug":"custom-containers","link":"#custom-containers","children":[]},{"level":2,"title":"More","slug":"more","link":"#more","children":[]},{"level":2,"title":"Button API","slug":"button-api","link":"#button-api","children":[{"level":3,"title":"Button 属性","slug":"button-属性","link":"#button-属性","children":[]},{"level":3,"title":"Button 插槽","slug":"button-插槽","link":"#button-插槽","children":[]},{"level":3,"title":"Button Exposes","slug":"button-exposes","link":"#button-exposes","children":[]}]},{"level":2,"title":"ButtonGroup API","slug":"buttongroup-api","link":"#buttongroup-api","children":[{"level":3,"title":"ButtonGroup 属性","slug":"buttongroup-属性","link":"#buttongroup-属性","children":[]},{"level":3,"title":"ButtonGroup 插槽","slug":"buttongroup-插槽","link":"#buttongroup-插槽","children":[]}]}],"relativePath":"components/layer/index.md","filePath":"components/layer/index.md"}'),g={name:"components/layer/index.md"},_=Object.assign(g,{setup(E){return(b,m)=>{const a=l("i-ri-external-link-line");return d(),e("div",null,[o,p,h,t("p",null,[s("VitePress provides Syntax Highlighting powered by "),t("a",r,[s("Shiki"),i(a,{class:"link-icon"})]),s(", with additional features like line-highlighting:")]),c,t("p",null,[s("Check out the documentation for the "),t("a",k,[s("full list of markdown extensions"),i(a,{class:"link-icon"})]),s(".")]),u])}}});export{v as __pageData,_ as default};
