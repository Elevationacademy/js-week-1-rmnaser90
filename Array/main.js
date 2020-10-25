
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const newGenes =genes.slice(2,5).reverse();
genes.splice(2,3,...newGenes);
genes.push(...genes.splice(3,1));
genes.push(genes[genes.length-1]);
genes.unshift('FXT');
console.log(genes);
