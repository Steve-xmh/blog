import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,a as s,b as n,d as r,e as i}from"./app-be572551.js";const d={},l=s("p",null,"众所周知，因为一些内部开发人员对于使用 Python 有争议，最后协商选择使用 NodeJS 重新编写，同时和维护团队与阿尔法营的守护者老师深度讨论之后重新制定了第二个 WebAPI 版本。",-1),c=s("p",null,"该文档的内容以通过审核，现已可用。",-1),u={href:"https://www.sparrowhe.top/copyright/2020/03/06/redlist.html",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="api-文档" tabindex="-1"><a class="header-anchor" href="#api-文档" aria-hidden="true">#</a> API 文档</h2><p>所有链接均使用 <code>https://www.scpo.top:1120/v2</code> 为链接，调用方法为 <code>POST</code>。表单数据均为 JSON，FormData 或 URIEncodedForm。</p><p>所有表单以 <code>method</code> 确定调用功能类型和返回值，总共有以下值可以选择：</p><ul><li><code>isInList</code> 获取一个用户是否在红名单内</li><li><code>getList</code> 获取以 JSON 数组为格式的在红名单内的所有用户名单</li><li><code>getImportableList</code> 获取以 Scratch 链表文本为格式的在红名单内的所有用户名单</li></ul><p>以下为对应功能的参数集：</p><h3 id="isinlist" tabindex="-1"><a class="header-anchor" href="#isinlist" aria-hidden="true">#</a> isInList</h3><table><thead><tr><th>参数名称</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>platform</td><td></td><td>kada,acamp</td><td>社区平台，如不填则为所有平台</td></tr><tr><td>format</td><td>username</td><td>username,id</td><td>输入的名称类型，是用户名还是用户ID编号</td></tr><tr><td>value</td><td></td><td></td><td>需要检测的用户名或用户ID</td></tr></tbody></table><p>返回值：</p><table><thead><tr><th>参数名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message</td><td>string</td><td>返回 success 即成功，否则返回错误原因</td></tr><tr><td>status</td><td>boolean</td><td>返回用户状态，如果为 <code>true</code> 则在红名单内，<code>false</code> 反之亦然</td></tr><tr><td>reason</td><td>string/null</td><td>如果 status 为 <code> true</code> 时这里是被登记入红名单的原因，否则为 <code>null</code></td></tr></tbody></table><h3 id="getlist" tabindex="-1"><a class="header-anchor" href="#getlist" aria-hidden="true">#</a> getList</h3><table><thead><tr><th>参数名称</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>platform</td><td></td><td>kada,acamp</td><td>社区平台，如不填则为所有平台</td></tr></tbody></table><p>返回值：</p><table><thead><tr><th>参数名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message</td><td>string</td><td>返回 success 即成功，否则返回错误原因</td></tr><tr><td>list</td><td>见下表</td><td>在红名单内的所有用户名单</td></tr></tbody></table><p>数组成员类型结构：</p><table><thead><tr><th>成员名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>用户的名称</td></tr><tr><td>reason</td><td>string</td><td>用户被登记入红名单的原因</td></tr></tbody></table><h3 id="getimportablelist" tabindex="-1"><a class="header-anchor" href="#getimportablelist" aria-hidden="true">#</a> getImportableList</h3><table><thead><tr><th>参数名称</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>platform</td><td></td><td>kada,acamp</td><td>社区平台，如不填则为所有平台</td></tr><tr><td>type</td><td>username</td><td>username,id,reason</td><td>返回用户名称还是用户ID</td></tr></tbody></table><p>返回值：一个以 Scratch 链表文本为格式的在红名单内的所有用户名单，可以直接导入到 Scratch 的链表变量中。</p><h2 id="使用范例" tabindex="-1"><a class="header-anchor" href="#使用范例" aria-hidden="true">#</a> 使用范例</h2><h3 id="isinlist-1" tabindex="-1"><a class="header-anchor" href="#isinlist-1" aria-hidden="true">#</a> isInList</h3><p>客户端：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/v2</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">HOST</span><span class="token punctuation">:</span> <span class="token header-value">redlist.zerlight.top:1100</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
	<span class="token string-property property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;isInList&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;acamp&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Zerdot&quot;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;此为示例用户，当你看到这个永久名单，说明你的请求有问题或者你本来就是要测试才调用这个的，请更正你的请求数据后重试&quot;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getlist-1" tabindex="-1"><a class="header-anchor" href="#getlist-1" aria-hidden="true">#</a> getList</h3><p>客户端：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/v2</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">HOST</span><span class="token punctuation">:</span> <span class="token header-value">redlist.zerlight.top:1100</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
	<span class="token string-property property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getList&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;acamp&quot;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端（因列表数据太多所以只列举一个）：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Zerdot&quot;</span><span class="token punctuation">,</span>
		<span class="token string-property property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;此为示例用户，当你看到这个永久名单，说明你的请求有问题或者你本来就是要测试才调用这个的，请更正你的请求数据后重试&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getimportablelist-1" tabindex="-1"><a class="header-anchor" href="#getimportablelist-1" aria-hidden="true">#</a> getImportableList</h3><p>客户端：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/v2</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">HOST</span><span class="token punctuation">:</span> <span class="token header-value">redlist.zerlight.top:1100</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
	<span class="token string-property property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getImportableList&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;acamp&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;username&quot;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/plain</span></span>
<span class="token text-plain">
Umberto Unity
Carla Caring
Katie Kindness
Fred Friendship
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function v(k,m){const t=e("ExternalLinkIcon");return p(),o("div",null,[l,c,s("blockquote",null,[s("p",null,[n("注：旧版本的 API 仍然会保留，但是不建议继续使用，请尽快将请求链接转移至 v2！ "),s("a",u,[n("旧版 v1 API 链接"),r(t)])])]),h])}const y=a(d,[["render",v],["__file","2020-03-21-Libra 红名单 WebAPI v2 文档.html.vue"]]);export{y as default};
