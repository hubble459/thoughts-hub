import{Z as u,a as c,x as r,S as l,f as d,a8 as h,C as i,aj as m,a1 as g,H as f,a2 as p}from"./vS0iocr7.js";function x(t){throw u({fatal:!0,statusCode:500,statusMessage:`${t} is provided by @nuxt/image. Check your console to install it or run 'npx nuxi@latest module add @nuxt/image'`})}const S={setup:()=>x("<NuxtImg>")},w=c({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const n=r().public.mdc.useNuxtImage?S:"img",e=t,o=l(()=>{var s;if((s=e.src)!=null&&s.startsWith("/")&&!e.src.startsWith("//")){const a=g(f(r().app.baseURL));if(a!=="/"&&!e.src.startsWith(a))return p(a,e.src)}return e.src});return(s,a)=>(d(),h(m(i(n)),{src:i(o),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{w as default};
