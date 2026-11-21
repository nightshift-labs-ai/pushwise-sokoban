f=require('fs')
H=j=>j/W>9|j%W>>2&2
A=q=>s[q]!='#'&(q/W>>0==8|k-H(q)>>>!G[q]<1)
for(i of f.readdirSync(D='/input/'))for(s=f.readFileSync(D+i+'/level.txt')+(o=''),W=s.indexOf`
`+1,P=s.indexOf`@`,G=[...s].map(c=>c>')'&c<'/'),k=0;s.replace(/[$*]/g,(c,j)=>H(j)-k||B.push(j),V=B=[]),Q=[[P,B,o]],k<4||f.writeFileSync(f.mkdirSync(O='/output/'+i)??O+'/solution.txt',o);k++)for([P,b,o]of Q){if(b.every(x=>G[x]))break;E={[P]:o};T=[];for(r of L=[P])[-1,1,-W,W].map((d,i)=>A(q=r+d)&&(c=E[r]+'lrud'[i],b.includes(q)?A(n=q+d)>b.includes(n)&&T.push([q,b.map(x=>x-q?x:n).sort(),c]):E[q]??=L.push(q)&&c));V[b+L.sort()[0]]||=Q.push(...T)}