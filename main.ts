f=require('fs')
H=j=>(j%W>7)*2+(j/W>9)
for(i of f.readdirSync(D='/input/')){s=f.readFileSync(D+i+'/level.txt')+'';W=s.indexOf`
`+1;P=s.indexOf`@`;o='';G=[...s].map(c=>c>')'&c<'/')
for(k=0;k<4;k++){B=[];s.replace(/[$*]/g,(c,j)=>H(j)-k||B.push(j))
A=q=>s[q]!='#'&&((q/W|0)==8||k-H(q)>>>0<=!G[q])
Q=[[P,B,o]];V={};for([P,b,o]of Q){if(b.every(x=>G[x]))break;E={[P]:o};L=[P];T=[];for(r of L)[-1,1,-W,W].map((d,i)=>{q=r+d;c=E[r]+'lrud'[i];A(q)&&(b.includes(q)?A(n=q+d)&&!b.includes(n)&&T.push([q,b.map(x=>x-q?x:n).sort(),c]):E[q]??(E[q]=c,L.push(q)))});V[g=[Math.min(...L),b]]||(V[g]=Q.push(...T))}}
f.mkdirSync(O='/output/'+i);f.writeFileSync(O+'/solution.txt',o)}