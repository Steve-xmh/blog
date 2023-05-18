import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as n,a as e,b as a,d as t,e as r}from"./app-be572551.js";const l="/blog/assets/images/2019/11/10/08b59101a18b87d6fa4fc5340a0828381f30fd32.png",d="/blog/assets/images/2019/11/10/05a07d63f6246b6001f0d95fe6f81a4c500fa24c.png",g="/blog/assets/images/2019/11/10/d0cae0246b600c338987b5e3174c510fd8f9a14c.png",f="/blog/assets/images/2019/11/10/4d8d7d600c338744e43b44575c0fd9f9d62aa04c.png",p="/blog/assets/images/2019/11/10/b9a16df40ad162d9d5a176331cdfa9ec8b13cdff.png",h="/blog/assets/images/2019/11/10/c05d1cd162d9f2d37f5e30c0a4ec8a136227ccff.png",b="/blog/assets/images/2019/11/10/b17874d9f2d3572c38ad88f38713632763d0c3ff.png",_="/blog/assets/images/2019/11/10/d970e4d3572c11df839eab0c6e2762d0f603c2ff.png",m="/blog/assets/images/2019/11/10/497a412c11dfa9eca16142386fd0f703908fc1ff.png",u="/blog/assets/images/2019/11/10/0da92cf33a87e9506b60e5431d385343faf2b4d7.png",x="/blog/assets/images/2019/11/10/e106b20f4bfbfbed5988275075f0f736aec31f71.png",S="/blog/assets/images/2019/11/10/1fa65dfbfbedab64f0a35ceffa36afc378311e71.png",F="/blog/assets/images/2019/11/10/a63c1c7b02087bf416c248c6ffd3572c11dfcf18.png",D="/blog/assets/images/2019/11/10/f052ededab64034f8c1cd329a2c379310b551d71.png",v="/blog/assets/images/2019/11/10/4044bd64034f78f002da8bdc74310a55b2191c71.png",z="/blog/assets/images/2019/11/10/b1d214087bf40ad17fcad8cc5a2c11dfa9ecce18.png",y="/blog/assets/images/2019/11/10/d0cae0246b600c33c197cde7174c510fd8f9a158.png",k="/blog/assets/images/2019/11/10/4d8d7d600c338744ac2b3c535c0fd9f9d62aa058.png",A="/blog/assets/images/2019/11/10/2ca3264e251f95ca73809e99c4177f3e660952d5.png",K="/blog/assets/images/2019/11/10/8be7331f95cad1c804cef008723e6709c83d51d5.png",I="/blog/assets/images/2019/11/10/b8e66ef0f736afc398d3304abe19ebc4b645126f.png",R="/blog/assets/images/2019/11/10/c359e136afc37931e8b78906e6c4b74542a9116f.png",C="/blog/assets/images/2019/11/10/1aedbb345982b2b7866830eb3cadcbef77099b57.png",w={},L={href:"http://tieba.baidu.com/p/5868178050",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),a(" 前言")],-1),N=e("p",null,"你还在为 Flash Builder 的破解验证而烦恼吗？ 你还在为 Flash Builder 的超长加载而感到心烦吗？ 你还在为找不到 FlashDevelop 二次开发 Scratch 的教程而感到心累吗？ 一切都结束了！ 小萧经历千辛万苦终于集合了各位大佬的教程，成功的使用 FlashDevelop （以下简称FD）进行编译和 AIR 签名打包操作！ 那么既然炫耀了（划掉）成功了结果，那么这里就开始告诉大家我的二次开发方式吧！",-1),B=e("h2",{id:"第一步-安装独立版-flex-sdk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第一步-安装独立版-flex-sdk","aria-hidden":"true"},"#"),a(" 第一步：安装独立版 Flex SDK")],-1),M={href:"http://flex.apache.org/download-binaries.html",target:"_blank",rel:"noopener noreferrer"},T={href:"http://flex.apache.org/installer.html",target:"_blank",rel:"noopener noreferrer"},j=e("em",null,"为什么我要先安装 Flex？因为这个玩意下的速度太##慢了",-1),P=e("h2",{id:"第二步-安装-java",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第二步-安装-java","aria-hidden":"true"},"#"),a(" 第二步：安装 Java")],-1),V={href:"https://java.com/zh_CN/",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"第三步-下载-flashdevelop-fd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第三步-下载-flashdevelop-fd","aria-hidden":"true"},"#"),a(" 第三步：下载 FlashDevelop (FD)")],-1),H={href:"http://www.flashdevelop.org/",target:"_blank",rel:"noopener noreferrer"},G=r('<figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这下子你就可以选择好路径开始安装了~</p><h2 id="第四步-配置-flashdevelop" tabindex="-1"><a class="header-anchor" href="#第四步-配置-flashdevelop" aria-hidden="true">#</a> 第四步：配置 FlashDevelop</h2><p>等待 SDK 安装完毕后，记住你存放 SDK 的文件夹，然后启动 FD，你可能会看到如下页面：</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>虽然我们在安装程序已经选中了中文组件，但是我们还是需要在设置中设置显示语言。 打开 Tools 菜单，打开 Program Settings：</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在打开的设置里找到 Selected Locale 修改成 zh_CN 后重启即可 如果配置项太多，右上角有个过滤设置 Filter settings，搜索 locale 就找到了：</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="第五步-下载-scratch-2-0-源代码" tabindex="-1"><a class="header-anchor" href="#第五步-下载-scratch-2-0-源代码" aria-hidden="true">#</a> 第五步：下载 Scratch 2.0 源代码</h2>',10),J={href:"https://github.com/LLK/scratch-flash",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/LLK/scratch-flash/archive/develop.zip",target:"_blank",rel:"noopener noreferrer"},W=r('<h2 id="第六步-新建和配置工程" tabindex="-1"><a class="header-anchor" href="#第六步-新建和配置工程" aria-hidden="true">#</a> 第六步：新建和配置工程</h2><p>那么回到 FD ，我们要开始新建在 FD 的 Scratch 工程了。 首先点击“项目”菜单栏，找到“新建项目”并打开：</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么你打开的时候页面应该是这样的：</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>首先还是选择你喜欢的位置，名称也是随意的，包名留空。项目类型的话选择 &quot;AIR AS3 Projector&quot; 然后确定创建工程： 第一次创建工程的话会出现一点点模板配置，按自己喜好填写即可~ 那么我们看到右边的项目已经多出了一点东西，这个就是我们的工程目录了：</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么新建工程已经完毕，接下来我们需要进行部分的配置了。 首先还是在项目菜单栏里，找到底下的属性：</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在里面一部分修改项是不能用的，需要在源码中修改才可以，那么首先打开 SDK 选项卡，找到“自定义 SDK”，把我们刚刚下载的独立 Flex SDK 路径填入：</p><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么再打开“编译器选项”选项卡，找到&quot;Additional Compiler Options&quot;（编译器参数选项），因为我们的 Scratch 源码有一部分常量需要在编译器启动时提供，源码内不提供，而且不提供这些常量的话 Scratch 反而还无法编译(WTH)。 所以点击省略号打开，填入以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-define+=SCRATCH::allow3d,false
-define+=SCRATCH::revision,&#39;e267f37&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（注：如果你的 Flex SDK 中的 Flash Player 版本大于或等于 11.6 的话，你可以把 allow3d 的常量值修改为 true（虽然没啥用）） 这两个是必要内容，其他的教程会填入其他内容，这里就不需要了，最后应该是这样的：</p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="第七步-转移源码到工程" tabindex="-1"><a class="header-anchor" href="#第七步-转移源码到工程" aria-hidden="true">#</a> 第七步：转移源码到工程</h2><p>配置工程完毕后，我们就要把 Scratch 的源代码合并到我们的工程里。 那么首先看到 FD 的工程目录，右键我们的工程，选择“资源管理器”打开工程文件夹：</p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将第五步下好的源码包解压，将其中的 libs 文件夹和 src 文件夹解压到工程目录内：</p><p><img src="'+S+'" alt="" loading="lazy"><img src="'+F+'" alt="" loading="lazy"></p><p>完成之后可以看到 FD 内的工程目录被刷新了：</p><figure><img src="'+D+'" alt="因为原帖的问题，图里没有 libs 文件夹 :( " tabindex="0" loading="lazy"><figcaption>因为原帖的问题，图里没有 libs 文件夹 😦 </figcaption></figure>',22),Q={href:"http://Main.as",target:"_blank",rel:"noopener noreferrer"},U={href:"http://Scratch.as",target:"_blank",rel:"noopener noreferrer"},X={href:"http://Scratch.as",target:"_blank",rel:"noopener noreferrer"},Y={href:"http://Main.as",target:"_blank",rel:"noopener noreferrer"},Z=r('<figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后将 Scratch 2.0 需要使用的几个库添加到库中，在工程浏览器中展开 libs 文件夹，将内部的 .swc 文件选中，右键选择 “添加到库”</p><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="第八步-调试和编译" tabindex="-1"><a class="header-anchor" href="#第八步-调试和编译" aria-hidden="true">#</a> 第八步：调试和编译</h2><p>终于要见到自己亲手编译的 Scratch 了（大开心） 首先我们看一下是否可以进行编译，这里是各种编译的方法：</p><ol><li>点击蓝色的小箭头直接测试程序：</li></ol><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>在项目菜单栏里点击“运行项目”或“编译项目”（这里不能真正打包成 AIR 程序）：</li></ol><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>按下 F5 或 F8 快速测试或编译</li></ol><p>如果无法编译的话，请确定你的 Flex SDK 是否下载完整，并前往第一步重新安装。</p><p>最终结果应该是这样的：</p><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>倘若你能够打开上面的页面，恭喜你！你可以立即开始二次开发了！ 但是如果你在调试的时候出错了的话，比如说出现这个错误：</p><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果出现了这个错误，请继续往下看 ↓</p><h3 id="第八步·2-修正标识符" tabindex="-1"><a class="header-anchor" href="#第八步·2-修正标识符" aria-hidden="true">#</a> 第八步·2：修正标识符</h3><p>大家如果都下载了最新版本那么肯定会遇到如同上面的错误，虽然不知道原因，但是为了可以顺利编译，我们需要对其稍作修改以进行调试 首先还是来到工程文件夹，找到 application.xml 文件（这个步骤可以在 FD 操作），然后第二行就可以看到如上错误中出现的那个链接 我们要修改的就是这个链接尾巴的那串数字，实际上那个是 AIR 的版本号 如果这个版本号不和我们所用的 AIR 版本号一样的话，就会出现这个问题 所以如果你还记得 AIR 的版本的话就替换这个版本，那就直接替换版本号即可 但是如果你忘记了的话，就随我继续往下做： 打开你的 Flex SDK 目录，找到 bin 文件夹，这里你就可以找到 AIR 的调试启动器了：</p><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>右键，打开属性，在详细信息选项卡里你就能看到产品版本号了：</p><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么替换版本号，保存之后尝试编译一下，应该就成功了~</p><h2 id="最终步-打包工程为-air-程序" tabindex="-1"><a class="header-anchor" href="#最终步-打包工程为-air-程序" aria-hidden="true">#</a> 最终步：打包工程为 AIR 程序</h2><p>当然最终我们是需要把它编译成发行版本的，只是自己玩算啥呢 那么为了可以打包成 AIR，我们首先需要一个签名文件，这个签名文件只需要生成一次就可以了（实际上每隔一年就需要重新生成一份） 而且为了方便，FD 为我们生成了一些 .bat 批处理文件来帮助我们打包和生成签名 这些批处理存放在你的工程文件夹中的 bat 文件夹里：</p><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>而下面的那个 .p12 文件就是我们待会需要的签名文件了 需要获取新的签名文件，直接双击 CreateCertificate.bat 运行批处理即可 生成完毕后就剩下最终的打包文件了 双击 PackageApp.bat 来全自动打包文件，稍等片刻后，在工程文件夹中的 air 文件夹里就会出现我们需要的 .air 打包文件了 唯一剩下的就是你如何去发布了~</p>',26);function $(aa,ea){const i=c("ExternalLinkIcon");return o(),n("div",null,[e("blockquote",null,[e("p",null,[a("本文原本是发在 "),e("a",L,[a("Scratch 贴吧"),t(i)]),a(" 里的，但是因为比较凌乱所以正好开了博客就稍作整理之后发在这里了。")])]),q,N,B,e("blockquote",null,[e("p",null,[a("注意：此步骤可能需要科学上网 如果你不喜欢使用安装器下载 Flex SDK，你可以直接从"),e("a",M,[a("此处"),t(i)]),a("下载离线归档包")])]),e("p",null,[a("Flex SDK 用于对 Flash 或者 ActionScript 的包装和组合调试，包括我们待会要进行的 AIR 签名和包装也要在 Flex SDK 完成。 那么我们先前往 Apache Flex 官网来下载 Flex SDK Installer："),e("a",T,[a("http://flex.apache.org/installer.html"),t(i)]),a(" 当然，因为 Flash 和 AIR 引擎的更新换代，开发者需要自行选择安装的版本，所以我们下载的是安装器。 那么安装完毕后，你需要选择安装版本。 那么前往 Scratch 的 Github 源码库看看，最低支持 Flash 10.2 ，那么我们就选择这个版本，然后 Flex 和 AIR 的版本也会自动变更（这里小萧是选择了最新的版本来安装）。 那么下一步，你需要准备一个干净的文件夹（没有任何文件！）来存放 SDK，接着就开始下载了。 "),j]),P,e("p",null,[a("这个就不说了，"),e("a",V,[a("链接在此"),t(i)]),a(" 玩 MC 的就忽略此步")]),E,e("p",null,[a("在安装 Flex SDK 的期间，我们可以开始安装 FD 了 首先进入官网："),e("a",H,[a("点我进入"),t(i)]),a(" 然后有个原谅色的下载按钮就可以进入论坛了 进入论坛往下翻就能找到“FlashDevelop *.*.* Setup”了 下载完之后，在安装组件步骤中选中中文语言（否则没有中文语言）")]),G,e("p",null,[a("直接从 "),e("a",J,[a("Scratch 2.0 源码库"),t(i)]),a(" 下载即可（或者 "),e("a",O,[a("直接点我下载压缩包"),t(i)]),a("） 下载完毕后先放着，下面会用到。")]),W,e("p",null,[a("接下来，我们要设置主运行程序，FD 默认会创建 "),e("a",Q,[a("Main.as"),t(i)]),a(" 作为第一个运行的程序。 但是在 Scratch 的源码中，"),e("a",U,[a("Scratch.as"),t(i)]),a(" 才是主程序。 所以我们右击 "),e("a",X,[a("Scratch.as"),t(i)]),a(" ，选择“设为文档类”（奇怪的翻译？），然后删除 "),e("a",Y,[a("Main.as"),t(i)]),a(" 即可（如果你不需要了的话）：")]),Z])}const ra=s(w,[["render",$],["__file","2019-11-10-如何二次开发-Scratch-2-0.html.vue"]]);export{ra as default};
