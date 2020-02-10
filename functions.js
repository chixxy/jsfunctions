const prompt = require('prompt')

prompt.start()
// console personalities calculator 

const personalities = {
	a:"She who is worthy of love. Her smile, her eyes, everything about her is just absolutely breath taking. If you are ever lucky enough to meet an Amanda, be sure to keep her in your life. Amandas make perfect girlfriends and are very loving. Amandas are loyal, nice, and beautiful. She is a great person and is very very friendly to everyone. Amandas are very good looking too. Amanda is definitely the ideal girl of the world. Anyone would be dumb enough to let such an amazing and beautiful person go. You can easily lose an Amanda's trust by hurting her though, so just because she seems very nice, once she's hurt she can be a bit rude at times, but who could blame her? Amanda is the exact definition of what perfect is. Even though no one is perfect, Amandas surely are",
	b:" maybe you are ever lucky enough to meet an Amanda, be sure to keep her in your life. Amandas make perfect girlfriends,They are normally quite tall and skinny tho they may not realise. Collins are very rare and extremely hard to find but trust me, if you find one",
	c:"Collins are good friends and boyfriends bucause they understand you and give you good advice. They are normally quite tall and skinny tho they may not realise. Collins are very rare and extremely hard to find but trust me, if you find one, keep him safe and listen to him, because if you listen to him, he will listen back and give you good advice when he can"

} 

function main(){

prompt.get(['name'],function(err,result){
	console.log(personalities[result.name[0]])
})

}

main()