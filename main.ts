f=require('fs')
H=j=>j/W>9|j%W>>2&2
A=q=>s[q]!='#'&(q/W>>0==8|k-H(q)>>>0<=!G[q])
for(i of f.readdirSync(D='/input/')){s=f.readFileSync(D+i+'/level.txt')+(o='');W=s.indexOf`
`+1;P=s.indexOf`@`;G=[...s].map(c=>c>')'&c<'/')
for(k=0;s.replace(/[$*]/g,(c,j)=>H(j)-k||B.push(j),Q=[[P,B=[],o]],V={}),k<4;k++)for([P,b,o]of Q){if(b.every(x=>G[x]))break;E={[P]:o};T=[];for(r of L=[P])[-1,1,-W,W].map((d,i)=>A(q=r+d)&&(c=E[r]+'lrud'[i],b.includes(q)?A(n=q+d)&&!b.includes(n)&&T.push([q,b.map(x=>x-q?x:n).sort(),c]):E[q]??=L.push(q)&&c));V[[L.sort()[0],b]]||=Q.push(...T)}
f.mkdirSync(O='/output/'+i);f.writeFileSync(O+'/solution.txt',o)}