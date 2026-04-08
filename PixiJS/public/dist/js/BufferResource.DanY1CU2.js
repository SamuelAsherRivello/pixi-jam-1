import{$ as e,C as t,D as n,E as r,G as i,H as a,I as o,K as s,L as c,M as l,N as u,P as d,S as ee,T as te,V as ne,W as re,X as f,Y as ie,Z as ae,_ as oe,a as p,at as se,ct as m,et as h,g,h as _,i as ce,it as v,k as y,lt as b,m as le,nt as x,st as S,tt as ue,ut as C,v as de,x as fe,y as pe,z as w}from"./localUniformBit.Def9Ba_9.js";var me={name:`texture-bit`,vertex:{header:`

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,main:`
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;

         
        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},he={name:`texture-bit`,vertex:{header:`
            uniform mat3 uTextureMatrix;
        `,main:`
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
        uniform sampler2D uTexture;

         
        `,main:`
            outColor = texture(uTexture, vUV);
        `}},T=[];C.handleByNamedList(b.Environment,T);async function ge(e){if(!e)for(let e=0;e<T.length;e++){let t=T[e];if(t.value.test()){await t.value.load();return}}}var E;function D(){if(typeof E==`boolean`)return E;try{E=Function(`param1`,`param2`,`param3`,`return param1[param2] === param3;`)({a:`b`},`a`,`b`)===!0}catch{E=!1}return E}var O=(e=>(e[e.NONE=0]=`NONE`,e[e.COLOR=16384]=`COLOR`,e[e.STENCIL=1024]=`STENCIL`,e[e.DEPTH=256]=`DEPTH`,e[e.COLOR_DEPTH=16640]=`COLOR_DEPTH`,e[e.COLOR_STENCIL=17408]=`COLOR_STENCIL`,e[e.DEPTH_STENCIL=1280]=`DEPTH_STENCIL`,e[e.ALL=17664]=`ALL`,e))(O||{}),k=class{constructor(e){this.items=[],this._name=e}emit(e,t,n,r,i,a,o,s){let{name:c,items:l}=this;for(let u=0,d=l.length;u<d;u++)l[u][c](e,t,n,r,i,a,o,s);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){let t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}},_e=[`init`,`destroy`,`contextChange`,`resolutionChange`,`reset`,`renderEnd`,`renderStart`,`render`,`update`,`postrender`,`prerender`],A=class e extends m{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;let t=[..._e,...this.config.runners??[]];this._addRunners(...t),this._unsafeEvalCheck()}async init(t={}){await ge(t.skipExtensionImports===!0?!0:t.manageImports===!1),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(let e in this._systemsHash)t={...this._systemsHash[e].constructor.defaultOptions,...t};t={...e.defaultOptions,...t},this._roundPixels=+!!t.roundPixels;for(let e=0;e<this.runners.init.items.length;e++)await this.runners.init.items[e].init(t);this._initOptions=t}render(e,t){let n=e;if(n instanceof a&&(n={container:n},t&&(h(ue,`passing a second argument is deprecated, please use render options instead`),n.target=t.renderTexture)),n.target||=this.view.renderTarget,n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor=this.background.colorRgba),n.clearColor){let e=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=e?n.clearColor:S.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(e,t,n){this.view.resize(e,t,n),this.emit(`resize`,this.view.screen.width,this.view.screen.height)}clear(e={}){let t=this;e.target||=t.renderTarget.renderTarget,e.clearColor||=this.background.colorRgba,e.clear??=O.ALL;let{clear:n,clearColor:r,target:i}=e;S.shared.setValue(r??this.background.colorRgba),t.renderTarget.clear(i,n,S.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(e=>{this.runners[e]=new k(e)})}_addSystems(e){let t;for(t in e){let n=e[t];this._addSystem(n.value,n.name)}}_addSystem(e,t){let n=new e(this);if(this[t])throw Error(`Whoops! The name "${t}" is already in use`);this[t]=n,this._systemsHash[t]=n;for(let e in this.runners)this.runners[e].add(n);return this}_addPipes(e,t){let n=t.reduce((e,t)=>(e[t.name]=t.value,e),{});e.forEach(e=>{let t=e.value,r=e.name,i=n[r];this.renderPipes[r]=new t(this,i?new i:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!D())throw Error(`Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.`)}};A.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};var ve=A,j=class{constructor(e){this._renderer=e}addRenderable(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&e.render(this._renderer)}destroy(){this._renderer=null}};j.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:`customRender`};function M(e,t){let n=e.instructionSet,r=n.instructions;for(let e=0;e<n.instructionSize;e++){let n=r[e];t[n.renderPipeId].execute(n)}}var N=class{constructor(e){this._renderer=e}addRenderGroup(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&(this._renderer.globalUniforms.push({worldTransformMatrix:e.worldTransform,worldColor:e.worldColorAlpha}),M(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop())}destroy(){this._renderer=null}};N.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:`renderGroup`};function ye(e,t){let n=e.root,r=e.instructionSet;r.reset(),t.batch.buildStart(r),t.blendMode.buildStart(),t.colorMask.buildStart(),n.sortableChildren&&n.sortChildren(),F(n,r,t,!0),t.batch.buildEnd(r),t.blendMode.buildEnd(r)}function P(e,t,n){e.globalDisplayStatus<7||!e.includeInBuild||(e.sortableChildren&&e.sortChildren(),e.isSimple?be(e,t,n):F(e,t,n,!1))}function be(e,t,n){if(e.renderPipeId&&(n.blendMode.setBlendMode(e,e.groupBlendMode,t),e.didViewUpdate=!1,n[e.renderPipeId].addRenderable(e,t)),!e.renderGroup){let r=e.children,i=r.length;for(let e=0;e<i;e++)P(r[e],t,n)}}function F(e,t,n,r){if(!r&&e.renderGroup)n.renderGroup.addRenderGroup(e.renderGroup,t);else{for(let r=0;r<e.effects.length;r++){let i=e.effects[r];n[i.pipe].push(i,e,t)}let r=e.renderPipeId;r&&(n.blendMode.setBlendMode(e,e.groupBlendMode,t),e.didViewUpdate=!1,n[r].addRenderable(e,t));let i=e.children;if(i.length)for(let e=0;e<i.length;e++)P(i[e],t,n);for(let r=e.effects.length-1;r>=0;r--){let i=e.effects[r];n[i.pipe].pop(i,e,t)}}}function I(e,t=[]){t.push(e);for(let n=0;n<e.renderGroupChildren.length;n++)I(e.renderGroupChildren[n],t);return t}function xe(e,t,n){let r=e>>16&255,i=e>>8&255,a=e&255,o=t>>16&255,s=t>>8&255,c=t&255,l=r+(o-r)*n,u=i+(s-i)*n,d=a+(c-a)*n;return(l<<16)+(u<<8)+d}var L=16777215;function R(e,t){return e===L||t===L?e+t-L:xe(e,t,.5)}var Se=new a,z=7;function Ce(e,t=!1){we(e);let n=e.childrenToUpdate,r=e.updateTick++;for(let t in n){let i=Number(t),a=n[t],o=a.list,s=a.index;for(let t=0;t<s;t++){let n=o[t];n.parentRenderGroup===e&&n.relativeRenderGroupDepth===i&&Te(n,r,0)}a.index=0}if(t)for(let n=0;n<e.renderGroupChildren.length;n++)Ce(e.renderGroupChildren[n],t)}function we(e){let t=e.root,n;if(e.renderGroupParent){let r=e.renderGroupParent;e.worldTransform.appendFrom(t.relativeGroupTransform,r.worldTransform),e.worldColor=R(t.groupColor,r.worldColor),n=t.groupAlpha*r.worldAlpha}else e.worldTransform.copyFrom(t.localTransform),e.worldColor=t.localColor,n=t.localAlpha;n=n<0?0:n>1?1:n,e.worldAlpha=n,e.worldColorAlpha=e.worldColor+((n*255|0)<<24)}function Te(e,t,n){if(t===e.updateTick)return;e.updateTick=t,e.didChange=!1;let r=e.localTransform;e.updateLocalTransform();let i=e.parent;if(i&&!i.renderGroup?(n|=e._updateFlags,e.relativeGroupTransform.appendFrom(r,i.relativeGroupTransform),n&z&&Ee(e,i,n)):(n=e._updateFlags,e.relativeGroupTransform.copyFrom(r),n&z&&Ee(e,Se,n)),!e.renderGroup){let r=e.children,i=r.length;for(let e=0;e<i;e++)Te(r[e],t,n);let a=e.parentRenderGroup;e.renderPipeId&&!a.structureDidChange&&a.updateRenderable(e)}}function Ee(e,t,n){if(n&1){e.groupColor=R(e.localColor,t.groupColor);let n=e.localAlpha*t.groupAlpha;n=n<0?0:n>1?1:n,e.groupAlpha=n,e.groupColorAlpha=e.groupColor+((n*255|0)<<24)}n&2&&(e.groupBlendMode=e.localBlendMode===`inherit`?t.groupBlendMode:e.localBlendMode),n&4&&(e.globalDisplayStatus=e.localDisplayStatus&t.globalDisplayStatus),e._updateFlags=0}function De(e,t){let{list:n,index:r}=e.childrenRenderablesToUpdate,i=!1;for(let e=0;e<r;e++){let r=n[e];if(i=t[r.renderPipeId].validateRenderable(r),i)break}return e.structureDidChange=i,i}var Oe=new v,ke=class{constructor(e){this._renderer=e}render({container:e,transform:t}){e.isRenderGroup=!0;let n=e.parent,r=e.renderGroup.renderGroupParent;e.parent=null,e.renderGroup.renderGroupParent=null;let i=this._renderer,a=I(e.renderGroup,[]),o=Oe;t&&(o=o.copyFrom(e.renderGroup.localTransform),e.renderGroup.localTransform.copyFrom(t));let s=i.renderPipes;for(let e=0;e<a.length;e++){let t=a[e];t.runOnRender(),t.instructionSet.renderPipes=s,t.structureDidChange||De(t,s),Ce(t),t.structureDidChange?(t.structureDidChange=!1,ye(t,s)):Ae(t),t.childrenRenderablesToUpdate.index=0,i.renderPipes.batch.upload(t.instructionSet)}i.globalUniforms.start({worldTransformMatrix:t?e.renderGroup.localTransform:e.renderGroup.worldTransform,worldColor:e.renderGroup.worldColorAlpha}),M(e.renderGroup,s),s.uniformBatch&&s.uniformBatch.renderEnd(),t&&e.renderGroup.localTransform.copyFrom(o),e.parent=n,e.renderGroup.renderGroupParent=r}destroy(){this._renderer=null}};ke.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:`renderGroup`};function Ae(e){let{list:t,index:n}=e.childrenRenderablesToUpdate;for(let r=0;r<n;r++){let n=t[r];n.didViewUpdate&&e.updateRenderable(n)}}var je=class{constructor(e){this._gpuSpriteHash=Object.create(null),this._renderer=e}addRenderable(e,t){let n=this._getGpuSprite(e);e._didSpriteUpdate&&this._updateBatchableSprite(e,n),this._renderer.renderPipes.batch.addToBatch(n)}updateRenderable(e){let t=this._gpuSpriteHash[e.uid];e._didSpriteUpdate&&this._updateBatchableSprite(e,t),t.batcher.updateElement(t)}validateRenderable(e){let t=e._texture,n=this._getGpuSprite(e);return n.texture._source===t._source?!1:!n.batcher.checkAndUpdateTexture(n,t)}destroyRenderable(t){let n=this._gpuSpriteHash[t.uid];e.return(n),this._gpuSpriteHash[t.uid]=null}_updateBatchableSprite(e,t){e._didSpriteUpdate=!1,t.bounds=e.bounds,t.texture=e._texture}_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}_initGPUSprite(t){let n=e.get(de);return n.renderable=t,n.texture=t._texture,n.bounds=t.bounds,n.roundPixels=this._renderer._roundPixels|t._roundPixels,this._gpuSpriteHash[t.uid]=n,t._didSpriteUpdate=!1,t.on(`destroyed`,()=>{this.destroyRenderable(t)}),n}destroy(){for(let t in this._gpuSpriteHash)e.return(this._gpuSpriteHash[t]);this._gpuSpriteHash=null,this._renderer=null}};je.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:`sprite`};var Me=class{static init(){globalThis.__PIXI_APP_INIT__?.(this)}static destroy(){}};Me.extension=b.Application;var Ne=class{constructor(e){this._renderer=e}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer)}destroy(){this._renderer=null}};Ne.extension={type:[b.WebGLSystem,b.WebGPUSystem],name:`initHook`,priority:-10};var Pe=class{constructor(e,t){this.state=ee.for2d(),this._batches=Object.create(null),this._geometries=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init(this)}buildStart(e){if(!this._batches[e.uid]){let r=new n;this._batches[e.uid]=r,this._geometries[r.uid]=new t}this._activeBatch=this._batches[e.uid],this._activeGeometry=this._geometries[this._activeBatch.uid],this._activeBatch.begin()}addToBatch(e){this._activeBatch.add(e)}break(e){this._activeBatch.break(e)}buildEnd(e){let t=this._activeBatch,n=this._activeGeometry;t.finish(e),n.indexBuffer.setDataWithSize(t.indexBuffer,t.indexSize,!0),n.buffers[0].setDataWithSize(t.attributeBuffer.float32View,t.attributeSize,!1)}upload(e){let t=this._batches[e.uid],n=this._geometries[t.uid];t.dirty&&(t.dirty=!1,n.buffers[0].update(t.attributeSize*4))}execute(e){if(e.action===`startBatch`){let t=e.batcher,n=this._geometries[t.uid];this._adaptor.start(this,n)}this._adaptor.execute(this,e)}destroy(){this.state=null,this.renderer=null,this._adaptor.destroy(),this._adaptor=null;for(let e in this._batches)this._batches[e].destroy();this._batches=null;for(let e in this._geometries)this._geometries[e].destroy();this._geometries=null}};Pe.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:`batch`};var Fe=class e extends ce{constructor(t){t={...e.defaultOptions,...t},super(t),this.enabled=!0,this._state=ee.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias==`boolean`?this.antialias=t.antialias?`on`:`off`:this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource(`uTexture`,0,1)}apply(e,t,n,r){e.applyFilter(this,t,n,r)}get blendMode(){return this._state.blendMode}set blendMode(e){this._state.blendMode=e}static from(t){let{gpu:n,gl:r,...i}=t,a,o;return n&&(a=le.from(n)),r&&(o=g.from(r)),new e({gpuProgram:a,glProgram:o,...i})}};Fe.defaultOptions={blendMode:`normal`,resolution:1,padding:0,antialias:`off`,blendRequired:!1};var Ie=Fe,Le=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha; 
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * uAlpha * clip);

    finalColor = original;
}
`,Re=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`,ze=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,  
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;

     var clip = step(3.5,
        step(maskClamp.x, filterUv.x) +
        step(maskClamp.y, filterUv.y) +
        step(filterUv.x, maskClamp.z) +
        step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);
    
    var npmAlpha = 0.0;

    var alphaMul = 1.0 - npmAlpha * (1.0 - mask.a);

    var a = (alphaMul * mask.r) * clip;

    return vec4(source.rgb, source.a) * a;
}`,Be=class extends Ie{constructor(e){let{sprite:t,...n}=e,r=new c(t.texture),i=new pe({uFilterMatrix:{value:new v,type:`mat3x3<f32>`},uMaskClamp:{value:r.uClampFrame,type:`vec4<f32>`},uAlpha:{value:1,type:`f32`}}),a=le.from({vertex:{source:ze,entryPoint:`mainVertex`},fragment:{source:ze,entryPoint:`mainFragment`}}),o=g.from({vertex:Re,fragment:Le,name:`mask-filter`});super({...n,gpuProgram:a,glProgram:o,resources:{filterUniforms:i,uMaskTexture:t.texture.source}}),this.sprite=t,this._textureMatrix=r}apply(e,t,n,r){this._textureMatrix.texture=this.sprite.texture,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.uMaskTexture=this.sprite.texture.source,e.applyFilter(this,t,n,r)}},Ve=new ie,He=class extends ae{constructor(){super(),this.filters=[new Be({sprite:new d(o.EMPTY),resolution:`inherit`,antialias:`inherit`})]}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].sprite=e}},Ue=class{constructor(e){this._activeMaskStage=[],this._renderer=e}push(e,t,n){let r=this._renderer;if(r.renderPipes.batch.break(n),n.add({renderPipeId:`alphaMask`,action:`pushMaskBegin`,mask:e,canBundle:!1,maskedContainer:t}),e.renderMaskToTexture){let t=e.mask;t.includeInBuild=!0,P(t,n,r.renderPipes),t.includeInBuild=!1}r.renderPipes.batch.break(n),n.add({renderPipeId:`alphaMask`,action:`pushMaskEnd`,mask:e,maskedContainer:t,canBundle:!1})}pop(e,t,n){this._renderer.renderPipes.batch.break(n),n.add({renderPipeId:`alphaMask`,action:`popMaskEnd`,mask:e,canBundle:!1})}execute(t){let n=this._renderer,r=t.mask.renderMaskToTexture;if(t.action===`pushMaskBegin`){let i=e.get(He);if(r){t.mask.mask.measurable=!0;let e=s(t.mask.mask,!0,Ve);t.mask.mask.measurable=!1,e.ceil();let r=n.renderTarget.renderTarget.colorTexture.source,a=oe.getOptimalTexture(e.width,e.height,r._resolution,r.antialias);n.renderTarget.push(a,!0),n.globalUniforms.push({offset:e,worldColor:4294967295});let o=i.sprite;o.texture=a,o.worldTransform.tx=e.minX,o.worldTransform.ty=e.minY,this._activeMaskStage.push({filterEffect:i,maskedContainer:t.maskedContainer,filterTexture:a})}else i.sprite=t.mask.mask,this._activeMaskStage.push({filterEffect:i,maskedContainer:t.maskedContainer})}else if(t.action===`pushMaskEnd`){let e=this._activeMaskStage[this._activeMaskStage.length-1];r&&(n.type===p.WEBGL&&n.renderTarget.finishRenderPass(),n.renderTarget.pop(),n.globalUniforms.pop()),n.filter.push({renderPipeId:`filter`,action:`pushFilter`,container:e.maskedContainer,filterEffect:e.filterEffect,canBundle:!1})}else if(t.action===`popMaskEnd`){n.filter.pop();let t=this._activeMaskStage.pop();r&&oe.returnTexture(t.filterTexture),e.return(t.filterEffect)}}destroy(){this._renderer=null,this._activeMaskStage=null}};Ue.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:`alphaMask`};var We=class{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,n){this._renderer.renderPipes.batch.break(n);let r=this._colorStack;r[this._colorStackIndex]=r[this._colorStackIndex-1]&e.mask;let i=this._colorStack[this._colorStackIndex];i!==this._currentColor&&(this._currentColor=i,n.add({renderPipeId:`colorMask`,colorMask:i,canBundle:!1})),this._colorStackIndex++}pop(e,t,n){this._renderer.renderPipes.batch.break(n);let r=this._colorStack;this._colorStackIndex--;let i=r[this._colorStackIndex-1];i!==this._currentColor&&(this._currentColor=i,n.add({renderPipeId:`colorMask`,colorMask:i,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._colorStack=null}};We.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:`colorMask`};var Ge=class{constructor(e){this._maskStackHash={},this._maskHash=new WeakMap,this._renderer=e}push(e,t,n){var r;let i=e,a=this._renderer;a.renderPipes.batch.break(n),a.renderPipes.blendMode.setBlendMode(i.mask,`none`,n),n.add({renderPipeId:`stencilMask`,action:`pushMaskBegin`,mask:e,canBundle:!1});let o=i.mask;o.includeInBuild=!0,this._maskHash.has(i)||this._maskHash.set(i,{instructionsStart:0,instructionsLength:0});let s=this._maskHash.get(i);s.instructionsStart=n.instructionSize,P(o,n,a.renderPipes),o.includeInBuild=!1,a.renderPipes.batch.break(n),n.add({renderPipeId:`stencilMask`,action:`pushMaskEnd`,mask:e,canBundle:!1}),s.instructionsLength=n.instructionSize-s.instructionsStart-1;let c=a.renderTarget.renderTarget.uid;(r=this._maskStackHash)[c]??(r[c]=0)}pop(e,t,n){let r=e,i=this._renderer;i.renderPipes.batch.break(n),i.renderPipes.blendMode.setBlendMode(r.mask,`none`,n),n.add({renderPipeId:`stencilMask`,action:`popMaskBegin`,canBundle:!1});let a=this._maskHash.get(e);for(let e=0;e<a.instructionsLength;e++)n.instructions[n.instructionSize++]=n.instructions[a.instructionsStart++];n.add({renderPipeId:`stencilMask`,action:`popMaskEnd`,canBundle:!1})}execute(e){var t;let n=this._renderer,r=n.renderTarget.renderTarget.uid,i=(t=this._maskStackHash)[r]??(t[r]=0);e.action===`pushMaskBegin`?(n.renderTarget.ensureDepthStencil(),n.stencil.setStencilMode(y.RENDERING_MASK_ADD,i),i++,n.colorMask.setMask(0)):e.action===`pushMaskEnd`?(n.stencil.setStencilMode(y.MASK_ACTIVE,i),n.colorMask.setMask(15)):e.action===`popMaskBegin`?(n.colorMask.setMask(0),i===0?(n.renderTarget.clear(null,O.STENCIL),n.stencil.setStencilMode(y.DISABLED,i)):n.stencil.setStencilMode(y.RENDERING_MASK_REMOVE,i),i--):e.action===`popMaskEnd`&&(n.stencil.setStencilMode(y.MASK_ACTIVE,i),n.colorMask.setMask(15)),this._maskStackHash[r]=i}destroy(){this._renderer=null,this._maskStackHash=null,this._maskHash=null}};Ge.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:`stencilMask`};var B=class e{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new S(0),this.color=this._backgroundColor,this.alpha=1}init(t){t={...e.defaultOptions,...t},this.clearBeforeRender=t.clearBeforeRender,this.color=t.background||t.backgroundColor||this._backgroundColor,this.alpha=t.backgroundAlpha,this._backgroundColor.setAlpha(t.backgroundAlpha)}get color(){return this._backgroundColor}set color(e){this._backgroundColor.setValue(e)}get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}get colorRgba(){return this._backgroundColor.toArray()}destroy(){}};B.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:`background`,priority:0},B.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};var Ke=B,V={};C.handle(b.BlendMode,e=>{if(!e.name)throw Error(`BlendMode extension must have a name property`);V[e.name]=e.ref},e=>{delete V[e.name]});var qe=class{constructor(e){this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e}setBlendMode(e,t,n){if(this._activeBlendMode===t){this._isAdvanced&&this._renderableList.push(e);return}this._activeBlendMode=t,this._isAdvanced&&this._endAdvancedBlendMode(n),this._isAdvanced=!!V[t],this._isAdvanced&&(this._beginAdvancedBlendMode(n),this._renderableList.push(e))}_beginAdvancedBlendMode(e){this._renderer.renderPipes.batch.break(e);let t=this._activeBlendMode;if(!V[t]){i(`Unable to assign BlendMode: '${t}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);return}let n=this._filterHash[t];n||(n=this._filterHash[t]=new ae,n.filters=[new V[t]]);let r={renderPipeId:`filter`,action:`pushFilter`,renderables:[],filterEffect:n,canBundle:!1};this._renderableList=r.renderables,e.add(r)}_endAdvancedBlendMode(e){this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({renderPipeId:`filter`,action:`popFilter`,canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){this._renderer=null,this._renderableList=null;for(let e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}};qe.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:`blendMode`};var H={png:`image/png`,jpg:`image/jpeg`,webp:`image/webp`},U=class e{constructor(e){this._renderer=e}_normalizeOptions(e,t={}){return e instanceof a||e instanceof o?{target:e,...t}:{...t,...e}}async image(e){let t=new Image;return t.src=await this.base64(e),t}async base64(t){t=this._normalizeOptions(t,e.defaultImageOptions);let{format:n,quality:r}=t,i=this.canvas(t);if(i.toBlob!==void 0)return new Promise((e,t)=>{i.toBlob(n=>{if(!n){t(Error(`ICanvas.toBlob failed!`));return}let r=new FileReader;r.onload=()=>e(r.result),r.onerror=t,r.readAsDataURL(n)},H[n],r)});if(i.toDataURL!==void 0)return i.toDataURL(H[n],r);if(i.convertToBlob!==void 0){let e=await i.convertToBlob({type:H[n],quality:r});return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}throw Error(`Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented`)}canvas(e){e=this._normalizeOptions(e);let t=e.target,n=this._renderer;if(t instanceof o)return n.texture.generateCanvas(t);let r=n.textureGenerator.generateTexture(e),i=n.texture.generateCanvas(r);return r.destroy(),i}pixels(e){e=this._normalizeOptions(e);let t=e.target,n=this._renderer,r=t instanceof o?t:n.textureGenerator.generateTexture(e),i=n.texture.getPixels(r);return t instanceof a&&r.destroy(),i}texture(e){return e=this._normalizeOptions(e),e.target instanceof o?e.target:this._renderer.textureGenerator.generateTexture(e)}download(e){e=this._normalizeOptions(e);let t=this.canvas(e),n=document.createElement(`a`);n.download=e.filename??`image.png`,n.href=t.toDataURL(`image/png`),document.body.appendChild(n),n.click(),document.body.removeChild(n)}log(e){let t=e.width??200;e=this._normalizeOptions(e);let n=this.canvas(e),r=n.toDataURL();console.log(`[Pixi Texture] ${n.width}px ${n.height}px`);let i=[`font-size: 1px;`,`padding: ${t}px 300px;`,`background: url(${r}) no-repeat;`,`background-size: contain;`].join(` `);console.log(`%c `,i)}destroy(){this._renderer=null}};U.extension={type:[b.WebGLSystem,b.WebGPUSystem],name:`extract`},U.defaultImageOptions={format:`png`,quality:1};var Je=U,Ye=class extends o{static create(e){return new o({source:new w(e)})}resize(e,t,n){return this.source.resize(e,t,n),this}},Xe=new f,Ze=new ie,Qe=[0,0,0,0],$e=class{constructor(e){this._renderer=e}generateTexture(e){e instanceof a&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});let t=e.resolution||this._renderer.resolution,n=e.antialias||this._renderer.view.antialias,r=e.target,i=e.clearColor;i=i?Array.isArray(i)&&i.length===4?i:S.shared.setValue(i).toArray():Qe;let o=e.frame?.copyTo(Xe)||re(r,Ze).rectangle;o.width=Math.max(o.width,1/t)|0,o.height=Math.max(o.height,1/t)|0;let s=Ye.create({...e.textureSourceOptions,width:o.width,height:o.height,resolution:t,antialias:n}),c=v.shared.translate(-o.x,-o.y);return this._renderer.render({container:r,transform:c,target:s,clearColor:i}),s.source.updateMipmaps(),s}destroy(){this._renderer=null}};$e.extension={type:[b.WebGLSystem,b.WebGPUSystem],name:`textureGenerator`};var et=class{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({size:e,projectionMatrix:t,worldTransformMatrix:n,worldColor:r,offset:i}){let a=this._renderer.renderTarget.renderTarget,o=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{projectionData:a,worldTransformMatrix:new v,worldColor:4294967295,offset:new se},s={projectionMatrix:t||this._renderer.renderTarget.projectionMatrix,resolution:e||a.size,worldTransformMatrix:n||o.worldTransformMatrix,worldColor:r||o.worldColor,offset:i||o.offset,bindGroup:null},c=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(c);let u=c.uniforms;u.uProjectionMatrix=s.projectionMatrix,u.uResolution=s.resolution,u.uWorldTransformMatrix.copyFrom(s.worldTransformMatrix),u.uWorldTransformMatrix.tx-=s.offset.x,u.uWorldTransformMatrix.ty-=s.offset.y,fe(s.worldColor,u.uWorldColorAlpha,0),c.update();let d;this._renderer.renderPipes.uniformBatch?d=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(c,!1):(d=this._bindGroupPool.pop()||new l,this._activeBindGroups.push(d),d.setResource(c,0)),s.bindGroup=d,this._currentGlobalUniformData=s}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1],this._renderer.type===p.WEBGL&&this._currentGlobalUniformData.bindGroup.resources[0].update()}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new pe({uProjectionMatrix:{value:new v,type:`mat3x3<f32>`},uWorldTransformMatrix:{value:new v,type:`mat3x3<f32>`},uWorldColorAlpha:{value:new Float32Array(4),type:`vec4<f32>`},uResolution:{value:[0,0],type:`vec2<f32>`}},{isStatic:!0})}destroy(){this._renderer=null}};et.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:`globalUniforms`};var tt=!1,W=`8.2.5`;function nt(e){if(!tt){if(ne.get().getNavigator().userAgent.toLowerCase().indexOf(`chrome`)>-1){let t=[`%c  %c  %c  %c  %c PixiJS %c v${W} (${e}) http://www.pixijs.com/

`,`background: #E72264; padding:5px 0;`,`background: #6CA2EA; padding:5px 0;`,`background: #B5D33D; padding:5px 0;`,`background: #FED23F; padding:5px 0;`,`color: #FFFFFF; background: #E72264; padding:5px 0;`,`color: #E72264; background: #FFFFFF; padding:5px 0;`];globalThis.console.log(...t)}else globalThis.console&&globalThis.console.log(`PixiJS ${W} - ${e} - http://www.pixijs.com/`);tt=!0}}var G=class{constructor(e){this._renderer=e}init(e){if(e.hello){let e=this._renderer.name;this._renderer.type===p.WEBGL&&(e+=` ${this._renderer.context.webGLVersion}`),nt(e)}}};G.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:`hello`,priority:-2},G.defaultOptions={hello:!1};var K=class e{constructor(e){this._renderer=e,this.count=0,this.checkCount=0}init(t){t={...e.defaultOptions,...t},this.checkCountMax=t.textureGCCheckCountMax,this.maxIdle=t.textureGCAMaxIdle,this.active=t.textureGCActive}postrender(){this._renderer.renderingToScreen&&(this.count++,this.active&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){let e=this._renderer.texture.managedTextures;for(let t=0;t<e.length;t++){let n=e[t];n.autoGarbageCollect&&n.resource&&n._touched>-1&&this.count-n._touched>this.maxIdle&&(n._touched=-1,n.unload())}}destroy(){this._renderer=null}};K.extension={type:[b.WebGLSystem,b.WebGPUSystem],name:`textureGC`},K.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:3600,textureGCCheckCountMax:600};var rt=K;C.add(rt);var q=class e{constructor(t={}){if(this.uid=x(`renderTarget`),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...e.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures==`number`){this._managedColorTextures=!0;for(let e=0;e<t.colorTextures;e++)this.colorTextures.push(new w({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(e=>e.source)];let e=this.colorTexture.source;this.resize(e.width,e.height,e._resolution)}this.colorTexture.source.on(`resize`,this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof o||t.depthStencilTexture instanceof w?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){let e=this._size;return e[0]=this.pixelWidth,e[1]=this.pixelHeight,e}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(e){this.resize(e.width,e.height,e._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||=new w({width:this.width,height:this.height,resolution:this.resolution,format:`depth24plus-stencil8`,autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1})}resize(e,t,n=this.resolution,r=!1){this.dirtyId++,this.colorTextures.forEach((i,a)=>{r&&a===0||i.source.resize(e,t,n)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(e,t,n)}destroy(){this.colorTexture.source.off(`resize`,this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(e=>{e.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};q.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};var J=q,Y=new Map;function it(e,t){if(!Y.has(e)){let n=new o({source:new u({resource:e,...t})}),r=()=>{Y.get(e)===n&&Y.delete(e)};n.once(`destroy`,r),n.source.once(`destroy`,r),Y.set(e,n)}return Y.get(e)}var X=class e{get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}init(t){t={...e.defaultOptions,...t},t.view&&(h(ue,`ViewSystem.view has been renamed to ViewSystem.canvas`),t.canvas=t.view),this.screen=new f(0,0,t.width,t.height),this.canvas=t.canvas||ne.get().createCanvas(),this.antialias=!!t.antialias,this.texture=it(this.canvas,t),this.renderTarget=new J({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.multiView=!!t.multiView,this.autoDensity&&(this.canvas.style.width=`${this.texture.width}px`,this.canvas.style.height=`${this.texture.height}px`),this.resolution=t.resolution}resize(e,t,n){this.texture.source.resize(e,t,n),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height,this.autoDensity&&(this.canvas.style.width=`${e}px`,this.canvas.style.height=`${t}px`)}destroy(e=!1){(typeof e==`boolean`?e:e?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};X.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:`view`,priority:0},X.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};var at=[Ke,et,G,X,ke,rt,$e,Je,Ne],ot=[qe,Pe,je,N,Ue,Ge,We,j];function st(e,t){for(let n in e.attributes){let r=e.attributes[n],a=t[n];a?(r.location??=a.location,r.format??=a.format,r.offset??=a.offset,r.instance??=a.instance):i(`Attribute ${n} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`)}ct(e)}function ct(e){let{buffers:t,attributes:n}=e,r={},i={};for(let e in t){let n=t[e];r[n.uid]=0,i[n.uid]=0}for(let e in n){let t=n[e];r[t.buffer.uid]+=_(t.format).stride}for(let e in n){let t=n[e];t.stride??=r[t.buffer.uid],t.start??=i[t.buffer.uid],i[t.buffer.uid]+=_(t.format).stride}}var Z=[];Z[y.NONE]=void 0,Z[y.DISABLED]={stencilWriteMask:0,stencilReadMask:0},Z[y.RENDERING_MASK_ADD]={stencilFront:{compare:`equal`,passOp:`increment-clamp`},stencilBack:{compare:`equal`,passOp:`increment-clamp`}},Z[y.RENDERING_MASK_REMOVE]={stencilFront:{compare:`equal`,passOp:`decrement-clamp`},stencilBack:{compare:`equal`,passOp:`decrement-clamp`}},Z[y.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:`equal`,passOp:`keep`},stencilBack:{compare:`equal`,passOp:`keep`}};var lt=class{constructor(e){this._syncFunctionHash=Object.create(null),this._adaptor=e,this._systemCheck()}_systemCheck(){if(!D())throw Error(`Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.`)}ensureUniformGroup(e){let t=this.getUniformGroupData(e);e.buffer||=new te({data:new Float32Array(t.layout.size/4),usage:r.UNIFORM|r.COPY_DST})}getUniformGroupData(e){return this._syncFunctionHash[e._signature]||this._initUniformGroup(e)}_initUniformGroup(e){let t=e._signature,n=this._syncFunctionHash[t];if(!n){let r=Object.keys(e.uniformStructures).map(t=>e.uniformStructures[t]),i=this._adaptor.createUboElements(r),a=this._generateUboSync(i.uboElements);n=this._syncFunctionHash[t]={layout:i,syncFunction:a}}return this._syncFunctionHash[t]}_generateUboSync(e){return this._adaptor.generateUboSync(e)}syncUniformGroup(e,t,n){let i=this.getUniformGroupData(e);return e.buffer||=new te({data:new Float32Array(i.layout.size/4),usage:r.UNIFORM|r.COPY_DST}),t||=e.buffer.data,n||=0,i.syncFunction(e.uniforms,t,n),!0}updateUniformGroup(e){if(e.isStatic&&!e._dirtyId)return!1;e._dirtyId=0;let t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){this._syncFunctionHash=null}},Q=[{type:`mat3x3<f32>`,test:e=>e.value.a!==void 0,ubo:`
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,uniform:`
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `},{type:`vec4<f32>`,test:e=>e.type===`vec4<f32>`&&e.size===1&&e.value.width!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `},{type:`vec2<f32>`,test:e=>e.type===`vec2<f32>`&&e.size===1&&e.value.x!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `},{type:`vec4<f32>`,test:e=>e.type===`vec4<f32>`&&e.size===1&&e.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `},{type:`vec3<f32>`,test:e=>e.type===`vec3<f32>`&&e.size===1&&e.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `}];function ut(e,t,n,r){let i=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `],a=0;for(let o=0;o<e.length;o++){let s=e[o],c=s.data.name,l=!1,u=0;for(let e=0;e<Q.length;e++)if(Q[e].test(s.data)){u=s.offset/4,i.push(`name = "${c}";`,`offset += ${u-a};`,Q[e][t]||Q[e].ubo),l=!0;break}if(!l)if(s.data.size>1)u=s.offset/4,i.push(n(s,u-a));else{let e=r[s.data.type];u=s.offset/4,i.push(`
                    v = uv.${c};
                    offset += ${u-a};
                    ${e};
                `)}a=u}let o=i.join(`
`);return Function(`uv`,`data`,`offset`,o)}function $(e,t){return`
        for (let i = 0; i < ${e*t}; i++) {
            data[offset + (((i / ${e})|0) * 4) + (i % ${e})] = v[i];
        }
    `}var dt={f32:`
        data[offset] = v;`,i32:`
        data[offset] = v;`,"vec2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];`,"vec3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,"vec4<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,"mat4x4<f32>":`
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,"mat3x2<f32>":$(3,2),"mat4x2<f32>":$(4,2),"mat2x3<f32>":$(2,3),"mat4x3<f32>":$(4,3),"mat2x4<f32>":$(2,4),"mat3x4<f32>":$(3,4)},ft={...dt,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `};function pt(e,t,n,r,i,a){let o=a?1:-1;return e.identity(),e.a=1/r*2,e.d=o*(1/i*2),e.tx=-1-t*e.a,e.ty=-o-n*e.d,e}function mt(e){let t=e.colorTexture.source.resource;return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement&&document.body.contains(t)}var ht=class{constructor(e){this.rootViewPort=new f,this.viewport=new f,this.onRenderTargetChange=new k(`onRenderTargetChange`),this.projectionMatrix=new v,this.defaultClearColor=[0,0,0,0],this._renderSurfaceToRenderTargetHash=new Map,this._gpuRenderTargetHash=Object.create(null),this._renderTargetStack=[],this._renderer=e}finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget)}renderStart({target:e,clear:t,clearColor:n,frame:r}){this._renderTargetStack.length=0,this.push(e,t,n,r),this.rootViewPort.copyFrom(this.viewport),this.rootRenderTarget=this.renderTarget,this.renderingToScreen=mt(this.rootRenderTarget)}bind(e,t=!0,n,r){let i=this.getRenderTarget(e),a=this.renderTarget!==i;this.renderTarget=i,this.renderSurface=e;let s=this.getGpuRenderTarget(i);(i.pixelWidth!==s.width||i.pixelHeight!==s.height)&&(this.adaptor.resizeGpuRenderTarget(i),s.width=i.pixelWidth,s.height=i.pixelHeight);let c=i.colorTexture,l=this.viewport,u=c.pixelWidth,d=c.pixelHeight;if(!r&&e instanceof o&&(r=e.frame),r){let e=c._resolution;l.x=r.x*e+.5|0,l.y=r.y*e+.5|0,l.width=r.width*e+.5|0,l.height=r.height*e+.5|0}else l.x=0,l.y=0,l.width=u,l.height=d;return pt(this.projectionMatrix,0,0,l.width/c.resolution,l.height/c.resolution,!i.isRoot),this.adaptor.startRenderPass(i,t,n,l),a&&this.onRenderTargetChange.emit(i),i}clear(e,t=O.ALL,n){t&&(e&&=this.getRenderTarget(e),this.adaptor.clear(e||this.renderTarget,t,n,this.viewport))}contextChange(){this._gpuRenderTargetHash=Object.create(null)}push(e,t=O.ALL,n,r){let i=this.bind(e,t,n,r);return this._renderTargetStack.push({renderTarget:i,frame:r}),i}pop(){this._renderTargetStack.pop();let e=this._renderTargetStack[this._renderTargetStack.length-1];this.bind(e.renderTarget,!1,null,e.frame)}getRenderTarget(e){return e.isTexture&&(e=e.source),this._renderSurfaceToRenderTargetHash.get(e)??this._initRenderTarget(e)}copyToTexture(e,t,n,r,i){n.x<0&&(r.width+=n.x,i.x-=n.x,n.x=0),n.y<0&&(r.height+=n.y,i.y-=n.y,n.y=0);let{pixelWidth:a,pixelHeight:o}=e;return r.width=Math.min(r.width,a-n.x),r.height=Math.min(r.height,o-n.y),this.adaptor.copyToTexture(e,t,n,r,i)}ensureDepthStencil(){this.renderTarget.stencil||(this.renderTarget.stencil=!0,this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport))}destroy(){this._renderer=null,this._renderSurfaceToRenderTargetHash.forEach((e,t)=>{e!==t&&e.destroy()}),this._renderSurfaceToRenderTargetHash.clear(),this._gpuRenderTargetHash=Object.create(null)}_initRenderTarget(e){let t=null;return u.test(e)&&(e=it(e).source),e instanceof J?t=e:e instanceof w&&(t=new J({colorTextures:[e]}),u.test(e.source.resource)&&(t.isRoot=!0),e.once(`destroy`,()=>{t.destroy();let e=this._gpuRenderTargetHash[t.uid];e&&(this._gpuRenderTargetHash[t.uid]=null,this.adaptor.destroyGpuRenderTarget(e))})),this._renderSurfaceToRenderTargetHash.set(e,t),t}getGpuRenderTarget(e){return this._gpuRenderTargetHash[e.uid]||(this._gpuRenderTargetHash[e.uid]=this.adaptor.initGpuRenderTarget(e))}},gt=class extends m{constructor({buffer:e,offset:t,size:n}){super(),this.uid=x(`buffer`),this._resourceType=`bufferResource`,this._touched=0,this._resourceId=x(`resource`),this._bufferResource=!0,this.destroyed=!1,this.buffer=e,this.offset=t|0,this.size=n,this.buffer.on(`change`,this.onBufferChange,this)}onBufferChange(){this._resourceId=x(`resource`),this.emit(`change`,this)}destroy(e=!1){this.destroyed=!0,e&&this.buffer.destroy(),this.emit(`change`,this),this.buffer=null}};export{me as _,ut as a,Z as c,at as d,W as f,O as g,ve as h,ft as i,st as l,Me as m,ht as n,Q as o,Ie as p,dt as r,lt as s,gt as t,ot as u,he as v};