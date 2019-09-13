const fs = require('fs');

if (fs.existsSync('missing-cards.txt')) {
	fs.unlinkSync('missing-cards.txt');
}
fs.writeFileSync('missing-cards.txt', "Missing Cards:\r\n");

const proxyList = fs.readFileSync("list.txt", 'utf8');
const lines = proxyList.split("\r\n");
const imagesPath = 'D:/Downloads/All_Cards/All_Cards/';

for (var i = 0; i < lines.length; i++) {
	let cardName = lines[i].split(/[0-9] /)[1].replace(/,|'/gm, "");
	console.log(cardName);
	let sourceCardPath = imagesPath + cardName + '.png';
	let targetCardPath = 'target/' + cardName + '.png';
	
	try {
		fs.copyFileSync(sourceCardPath, targetCardPath)
	} catch (err) {
		fs.appendFileSync('missing-cards.txt', cardName + '\r\n', 'utf8');
	}
	
}