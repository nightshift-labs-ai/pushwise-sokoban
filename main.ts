f=require('fs')
for(i of f.readdirSync(D='/input/')){s=f.readFileSync(D+i+'/level.txt')+'';W=s.indexOf`
`+1;P=s.search(/[@+]/);o='';G=[];[...s].map((c,j)=>G[j]=c>')'&c<'/')
for(k=0;k<4;k++){B=[];[...s].map((c,j)=>(c=='$'|c=='*')&&(j%W>7)*2+(j/W>9)==k&&B.push(j))
A=q=>((e=s[q])>"#"|e==" ")&&((q/W|0)==8||(t=(q%W>7)*2+(q/W>9))==k||t==k-1&&!G[q])
Q=[[P,B,'']];V={};for([p,b,m]of Q){if(b.every(x=>G[x])){o+=' '+m;P=p;break}E={[p]:m};L=[p];T=[];for(r of L)[-1,1,-W,W].map((d,i)=>{q=r+d;A(q)&&(b.includes(q)?A(n=q+d)&&!b.includes(n)&&T.push([q,b.map(x=>x-q?x:n).sort(),E[r]+'lrud'[i]]):E[q]??(E[q]=E[r]+'lrud'[i],L.push(q)))});V[g=[Math.min(...L),b]]||(V[g]=Q.push(...T))}}
f.mkdirSync(O='/output/'+i);f.writeFileSync(O+'/solution.txt',o)}
