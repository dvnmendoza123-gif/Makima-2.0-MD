import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botNumber = '' 

global.owner = [
  ['573136379995', '☆ Propietario ☆', true],
  ['573235915041', '🌹 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 🌹', true]
]

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.owner_lid = [
  [' 243349189566583', '🌹 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 🌹 (LID)', true],
  ['149963665342644', 'Número 2 (LID)', true]
]

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['5215211111111'] 
global.prems = []

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '2.0.0'
global.languaje = 'Español'
global.nameqr = 'Daymon Tanjiro Bot'
global.sessions = 'Session'
global.jadi = 'JadiBot'
global.makiJadibts = true

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.packsticker = `⏤͟͞ू⃪  ̸̷͢𝗗𝗮𝘆𝗺𝗼𝗻 𝗧𝗮𝗻𝗷𝗶𝗿𝗼-𝗕𝗼𝘁𑁯ᰍ\n`
global.packname = `⏤͟͞ू⃪  ̸̷͢𝗗𝗮𝘆𝗺𝗼𝗻 𝗧𝗮𝗻𝗷𝗶𝗿𝗼-𝗕𝗼𝘁𑁯ᰍ`
global.author = `Stickers by Mendoza × Daymon Tanjiro`;
global.wm = '⏤͟͞ू⃪  ̸̷͢𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 Dairo mendoza';
global.titulowm = '⏤͟͞ू⃪𝘿𝙖𝙮𝙢𝙤𝙣 𝙏𝙖𝙣𝙟𝙞𝙧𝙤-𝘽𝙤𝙩𑁯ᰍ';
global.igfg = 'Mendoza'
global.botname = '🌹Daymon Tanjiro-Bot🌹'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ Mendoza'
global.textbot = 'Made With ❤️ by Mendoza'
global.gt = '͟͞𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 Mendoza ❤️';
global.namechannel = 'Made With ❤️ by Mendoza'

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.moneda = '¥'

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺  𝑫𝑬𝒀𝑴𝑶𝑶𝑵 𝑪𝑳𝑼𝑩◞ • 🌹
global.gp4 = 'https://chat.whatsapp.com/ETZduk7trjG9xgTXVCRHYK?mode=ac_t' //Grupo Oficial De Makima 
global.gp1 = 'https://chat.whatsapp.com/ETZduk7trjG9xgTXVCRHYK?mode=ac_t'
global.channel = 'https://whatsapp.com/channel/0029Vb7SzJj9MF8xpQqp8D24' //Canal test 
global.yt = 'https://dash.kurayamihost.dpdns.org/home' //Canal De Youtube
global.md = 'https://dash.kurayamihost.dpdns.org/home' //Github Oficial
global.correo = 'https://dash.kurayamihost.dpdns.org/home'
global.cn ='https://whatsapp.com/channel/0029VbAa5sNCsU9Hlzsn651S';

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363402362088282@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
