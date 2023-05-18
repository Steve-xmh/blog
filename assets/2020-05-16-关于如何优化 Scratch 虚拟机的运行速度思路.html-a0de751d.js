import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as o,a as s,b as n,d as e,e as p}from"./app-be572551.js";const l={},r={href:"https://github.com/steve-xmh/scratch-script",target:"_blank",rel:"noopener noreferrer"},d=s("p",null,"注：下文仅为个人见解，如果有误请在评论区指出，谢谢！",-1),u={href:"https://steve-xmh.github.io/blog/",target:"_blank",rel:"noopener noreferrer"},v=s("h2",{id:"短板在哪",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#短板在哪","aria-hidden":"true"},"#"),n(" 短板在哪？")],-1),k={href:"https://github.com/LLK/scratch-vm",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/LLK/scratch-blocks",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/LLK/scratch-flash/blob/develop/src/interpreter/Interpreter.as",target:"_blank",rel:"noopener noreferrer"},h=s("p",null,"也许是我的错觉，因为 3.0 的虚拟机代码附上了大量的注释，尽可能地解释了代码的功能（虽然我还是看不懂（巨雾））",-1),g=s("h2",{id:"立刻掀了-3-0-的调度器",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#立刻掀了-3-0-的调度器","aria-hidden":"true"},"#"),n(" 立刻掀了 3.0 的调度器？")],-1),_=s("p",null,"至少人力成本是不允许的，代码的耦合度太强，强行替换会出现连锁反应，所以我的想法是基于原有调度器添加类似预编译的功能，从我的思路想法上应该不会有太大的难度，难点在于如何进行预编译。",-1),f=s("h2",{id:"预编译",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#预编译","aria-hidden":"true"},"#"),n(" 预编译？")],-1),y={href:"https://forkphorus.github.io/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://phosphorus.github.io/",target:"_blank",rel:"noopener noreferrer"},T=p(`<p>举个栗子：</p><p>这是我们的运动模块中的 前进 （　）步 的模块实现：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Scratch3MotionBlocks</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token function">moveSteps</span> <span class="token punctuation">(</span><span class="token parameter">args<span class="token punctuation">,</span> util</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> steps <span class="token operator">=</span> Cast<span class="token punctuation">.</span><span class="token function">toNumber</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span><span class="token constant">STEPS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> radians <span class="token operator">=</span> MathUtil<span class="token punctuation">.</span><span class="token function">degToRad</span><span class="token punctuation">(</span><span class="token number">90</span> <span class="token operator">-</span> util<span class="token punctuation">.</span>target<span class="token punctuation">.</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> dx <span class="token operator">=</span> steps <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> dy <span class="token operator">=</span> steps <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span><span class="token punctuation">;</span>
        util<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">setXY</span><span class="token punctuation">(</span>util<span class="token punctuation">.</span>target<span class="token punctuation">.</span>x <span class="token operator">+</span> dx<span class="token punctuation">,</span> util<span class="token punctuation">.</span>target<span class="token punctuation">.</span>y <span class="token operator">+</span> dy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，因为我们的运行时在注册模块的时候，会给每个模块的实现使用 <code>Function.bind</code> 固定 <code>this</code>，所以导致了不能直接对执行模块实现使用 <code>Function.toString</code> 获取原代码，不然只会返回 <code>[Native Code]</code>，所以为了能够在不修改原代码的前提下添加预编译的方案，也许只有添加一个新的属性用于描述用于嵌入的代码块了：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Scratch3MotionBlocks</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">get</span> <span class="token function">jitcodes</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token comment">// 对照模块实现的 moveSteps</span>
            <span class="token literal-property property">motion_movesteps</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                const steps = Cast.toNumber(args.STEPS);
                const radians = MathUtil.degToRad(90 - util.target.direction);
                const dx = steps * Math.cos(radians);
                const dy = steps * Math.sin(radians);
                util.target.setXY(util.target.x + dx, util.target.y + dy);
            </span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也许我们还可以在注册前使用 <code>Function.toString</code> 获取到函数实现代码，获得了实现代码之后，我们就可以尝试进行组合然后使用 <code>new Function(code)</code> 生成新包装的函数了。但是如此直接复制的话难免会变得繁杂，因为原本的实现参数并不能直接用，那么我们可不可以用一种特殊的参数以暴露所需的接口呢？</p><p>答案是肯定的，每个模块实现里的第二个参数是一个抽象对象，可以让模块实现访问到很多的接口。我们也可以定义一个 <code>util</code> 参数来包装几个 JIT 代码会用到的东西，之后的实现代码都可以用得到。</p><p>顺带一提，我们的 JIT 代码会自深到浅进行预编译，类似于脏检查，如果有代码出现了变动，就只更新那一段的 JIT 代码，然后和原来已经生成过的 JIT 代码重新组合，减少函数生成消耗。</p><h2 id="模块参数" tabindex="-1"><a class="header-anchor" href="#模块参数" aria-hidden="true">#</a> 模块参数？</h2><p>这个的难度还是有一点的，为了最大化性能肯定要做成内嵌形式的模块才可以正确获取参数，但是那么多的数据转换难免有点受不了，所以我想到了一个字符串的替换方案，用<code>[=[InputName]=]</code>用来表达要嵌入的参数，我们便可以把上面的 JIT 代码如此改动：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Scratch3MotionBlocks</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">get</span> <span class="token function">jitcodes</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token comment">// 对照模块实现的 moveSteps</span>
            <span class="token literal-property property">motion_movesteps</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                const steps = util.Cast.toNumber([=[STEPS]=]);
                const radians = util.MathUtil.degToRad(90 - util.target.direction);
                const dx = steps * Math.cos(radians);
                const dy = steps * Math.sin(radians);
                util.target.setXY(util.target.x + dx, util.target.y + dy);
            </span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后在生成的时候，根据模块的原型进行字符串转换，把常量或者嵌入的模块嵌入进去即可，但是部分地方可能需要注意一下优先级和语法问题，例如运算符的代码转换，还有数学函数的代码转换，如果遇到了同代码的不同模块实现，为了能更好的进行嵌入可以把 JIT 代码做成一个函数，传递模块参数并返回对应的 JIT 代码，可以更好的优化 JIT 代码量。</p><h2 id="舞台刷新" tabindex="-1"><a class="header-anchor" href="#舞台刷新" aria-hidden="true">#</a> 舞台刷新？</h2><p>正常情况下我们的舞台角色通常会需要移动，等待，或者用画笔绘制图像，所以我们需要在一些模块里嵌入一种用于暂时停止的功能，以防止无止境的等待卡顿或不让出的问题。</p><p>我的想法是使用 ES2017 的 <code>AsyncFunction</code> 来做到这个效果（IE：我####），然后在 <code>util</code> 参数里加上一个 <code>yield</code> 异步函数，调用时把目前的状态（当前的模块ID）和是否需要等待舞台刷新传递给调度器，然后调度器返回一个 Promise 并保存 <code>resolve</code> 函数到当前线程里，等待调度器处理完其他线程并更新舞台后再调用，即可继续运行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Scratch3ControlBlocks</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">get</span> <span class="token function">jitcodes</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token comment">// 对照模块实现的 wait</span>
            <span class="token literal-property property">control_wait</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                if (util.stackTimerNeedsInit()) {
                    const duration = Math.max(0, 1000 * util.Cast.toNumber([=[DURATION]=]));

                    util.startStackTimer(duration);
                    util.runtime.requestRedraw();
                    await util.yield({
                        currentBlockId: &#39;abcd&#39;,
                        waitStageUpdate: true
                    });
                } else if (!util.stackTimerFinished()) {
                    await util.yield({
                        currentBlockId: &#39;abcd&#39;,
                        waitStageUpdate: true
                    });
                }
            </span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块？</h2><p>代码块例如 <code>如果＜　＞那么｛　｝</code> 模块需要嵌入一段代码树，其实在 VM 里分支模块树本质也是一个参数，所以我们可以使用 <code>SUBSTACK</code>,<code>SUBSTACK2</code> 等参数进行嵌入，甚至我们可以自己定义一个 <code>NEXT</code> 参数用于连接下一个模块：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Scratch3ControlBlocks</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">get</span> <span class="token function">jitcodes</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token comment">// 对照模块实现的 wait</span>
            <span class="token literal-property property">control_if</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                const condition = Cast.toBoolean([=[CONDITION]=]);
                if (condition) {
                    [=[SUBSTACK]=];
                }
                [=[NEXT]=];
            </span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="那扩展作者也得一个个加-jit-代码" tabindex="-1"><a class="header-anchor" href="#那扩展作者也得一个个加-jit-代码" aria-hidden="true">#</a> 那扩展作者也得一个个加 JIT 代码？</h2><p>我们是基于原有的调度器进行改造，如果遇到没有 JIT 代码的模块，我们就按照原版的执行方式去执行，直到下一个模块包含了 JIT 代码才会继续调用。</p><h2 id="热更新" tabindex="-1"><a class="header-anchor" href="#热更新" aria-hidden="true">#</a> 热更新？</h2><p>难免会有刁难人的事情，比如执行时代码被更换了（模块拖拽过了），但是介于 VM 是单线程的，且模块更新和调度器不会并行运行，所以这个问题不会有太大的影响。一般情况下我们的 JIT 代码会在让出和结束执行时记录下当前的模块ID，所以我们可以检测当前线程的当前模块是否存在，是否有可用的 JIT 代码供调用，还有后面是否有其他模块链接，等等，如果没有 JIT 代码，就按照原版的调度器来执行代码，如果有则继续工作，我们的 JIT 代码会在热更新时自动更新，不会有出现 JIT 代码没有完全生成就被执行的问题。</p><h2 id="说的好听-做起来还是很累。。。" tabindex="-1"><a class="header-anchor" href="#说的好听-做起来还是很累。。。" aria-hidden="true">#</a> 说的好听，做起来还是很累。。。</h2><p>学生党依然是没有时间的，所以上面提供的思路，也许真正的大佬就可以做得出来，期待能有这样的新 VM 出现。</p><p>有什么意见建议就发在评论区吧！周末我会回来看的哦！</p>`,26);function x(I,w){const a=i("ExternalLinkIcon");return c(),o("div",null,[s("p",null,[n("开学一周了，也有一阵子没有写过博客了，正好最近在自制 "),s("a",r,[n("ScratchScript"),e(a)]),n(" ，脑袋里想到了些关于优化性能的思路，就写在这里留作记忆了。")]),s("blockquote",null,[d,s("p",null,[n("本文仅在 "),s("a",u,[n("SteveXMH 的个人博客"),e(a)]),n(" 里发布，请勿复制本文！")])]),v,s("p",null,[n("看过 "),s("a",k,[n("Scratch 3.0 虚拟机源码"),e(a)]),n(" 的都知道，官方 VM 为了扩展性和与 "),s("a",m,[n("ScratchBlocks"),e(a)]),n(" 的交互性整出了不少的接口，一环套一环，而且为了适应不严谨的 JavaScript 和难看的扩展文档在扩展调用方面做了大堆的语法糖，执行一个模块的逻辑都没有 "),s("a",b,[n("Scratch 2.0 的虚拟机"),e(a)]),n(" 来的简洁，尽管 3.0 相对于 2.0 性能快了不少，但是如果如此设计虚拟机，无疑会大大降低可以利用的性能。")]),h,g,_,f,s("p",null,[n("我的思路来源于这个"),s("a",y,[n("预编译型虚拟机 forkphorus"),e(a)]),n(" 和它的原版 "),s("a",S,[n("phosphorus"),e(a)]),n("，二者都是通过将模块预先转译成 JavaScript 后再执行，所以我有想把类似的转移方式塞进 3.0 运行时里（不是把 forkphorus 照搬进去！）。")]),T])}const M=t(l,[["render",x],["__file","2020-05-16-关于如何优化 Scratch 虚拟机的运行速度思路.html.vue"]]);export{M as default};
