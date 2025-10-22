import moment from 'moment-timezone';
import fs from 'fs';
import { xpRange } from '../lib/levelling.js';
import path from 'path';

const cwd = process.cwd();

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;


  let name = await conn.getName(userId);

  let user = global.db.data.users[userId];
  let exp = user.exp || 0;
  let level = user.level || 0;
  let role = user.role || 'Sin Rango';
  let coins = user.coin || 0;

  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let totalreg = Object.keys(global.db.data.users).length;
  let totalCommands = Object.values(global.plugins).filter(v => v.help && v.tags).length;

  const gifVideosDir = path.join(cwd, 'src', 'menu');
  if (!fs.existsSync(gifVideosDir)) {
    console.error('El directorio no existe:', gifVideosDir);
    return;
  }

  const gifVideos = fs.readdirSync(gifVideosDir)
    .filter(file => file.endsWith('.mp4'))
    .map(file => path.join(gifVideosDir, file));

  const randomGif = gifVideos[Math.floor(Math.random() * gifVideos.length)];

  let txt = `Hola ${name} Soy  *Makima* ${(conn.user.jid == global.conn.user.jid ? '(OficialBot)' : '(SubBot)')}

╭━━I N F O-B O T━━
┃Creador: 𓆩‌۫᷼ ִֶָღܾ݉͢ғ꯭ᴇ꯭፝ℓɪ꯭ͨא𓆪
┃Tiempo activo: ${uptime}
┃Baileys: Multi device
┃Moneda actual: Coins
┃Registros: ${totalreg}
╰━━━━━━━━━━━━━

╭━━INFO USUARIO━╮
┃Nombre: ${name}
┃Coins: ${coins}
┃Exp: ${exp}
┃Rango: ${role}
┃Nivel: ${level}
╰━━━━━━━━━━━━━

➪ 𝗟𝗜𝗦𝗧𝗔 
       ➪  𝗗𝗘 
           ➪ 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮SISTEMA
┃ ┈➤ #formarpareja5
┃ ┈➤ #afk [alasan]
┃ ┈➤ #runtime
┃ ┈➤ #blocklist
┃ ┈➤ #owner
┃ ┈➤ #menu
┃ ┈➤ #menú
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮GRUPOS
┃ ┈➤ #desbanearbot
┃ ┈➤ #banearbot
┃ ┈➤ #enable <opción>
┃ ┈➤ #disable <opción>
┃ ┈➤ #staff
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮SUB BOTS
┃ ┈➤ #qr
┃ ┈➤ #code
┃ ┈➤ #setname [nombre]
┃ ┈➤ #setbanner [link]
┃ ┈➤ #setprimary [@Bot]
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮AI
┃ ┈➤ #gemini
┃ ┈➤ #chatgpt <texto>
┃ ┈➤ #ia <texto>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮ANIME
┃ ┈➤ #animelink
┃ ┈➤ #infoanime
┃ ┈➤ #topwaifus [página]
┃ ┈➤ #wvideo <nombre del personaje>
┃ ┈➤ #wimage <nombre del personaje>
┃ ┈➤ #charinfo <nombre del personaje>
┃ ┈➤ #winfo <nombre del personaje>
┃ ┈➤ #waifuinfo <nombre del personaje>
┃ ┈➤ #alisa
┃ ┈➤ #aihoshino
┃ ┈➤ #remcham
┃ ┈➤ #akira
┃ ┈➤ #akiyama
┃ ┈➤ #anna
┃ ┈➤ #asuna
┃ ┈➤ #ayuzawa
┃ ┈➤ #boruto
┃ ┈➤ #chiho
┃ ┈➤ #chitoge
┃ ┈➤ #deidara
┃ ┈➤ #erza
┃ ┈➤ #elaina
┃ ┈➤ #eba
┃ ┈➤ #emilia
┃ ┈➤ #hestia
┃ ┈➤ #hinata
┃ ┈➤ #inori
┃ ┈➤ #isuzu
┃ ┈➤ #itachi
┃ ┈➤ #itori
┃ ┈➤ #kaga
┃ ┈➤ #kagura
┃ ┈➤ #kaori
┃ ┈➤ #keneki
┃ ┈➤ #kotori
┃ ┈➤ #kurumitokisaki
┃ ┈➤ #madara
┃ ┈➤ #mikasa
┃ ┈➤ #miku
┃ ┈➤ #minato
┃ ┈➤ #naruto
┃ ┈➤ #nezuko
┃ ┈➤ #sagiri
┃ ┈➤ #sasuke
┃ ┈➤ #sakura
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮AUDIO
┃ ┈➤ #bass [vn]
┃ ┈➤ #blown [vn]
┃ ┈➤ #deep [vn]
┃ ┈➤ #earrape [vn]
┃ ┈➤ #fast [vn]
┃ ┈➤ #fat [vn]
┃ ┈➤ #nightcore [vn]
┃ ┈➤ #reverse [vn]
┃ ┈➤ #robot [vn]
┃ ┈➤ #slow [vn]
┃ ┈➤ #smooth [vn]
┃ ┈➤ #tupai [vn]
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮BUSCADOR
┃ ┈➤ #pornhubsearch
┃ ┈➤ #githubsearch
┃ ┈➤ #google <búsqueda>
┃ ┈➤ #mercadolibre <búsqueda>
┃ ┈➤ #npmjs
┃ ┈➤ #tweetposts
┃ ┈➤ #tiktoksearch <txt>
┃ ┈➤ #xnxxsearch <query>
┃ ┈➤ #imagen <query>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮IMG
┃ ┈➤ #pinterest <término>
┃ ┈➤ #waifu
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮TRANSFORMADOR
┃ ┈➤ #tovideo
┃ ┈➤ #togifaud
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮STICKER
┃ ┈➤ #toimg (reply)
┃ ┈➤ #qc
┃ ┈➤ #take *<nombre>|<autor>*
┃ ┈➤ #sticker <imagen|video|url>
┃ ┈➤ #stiker <imagen|video|url>
┃ ┈➤ #s <imagen|video|url>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮TOOLS
┃ ┈➤ #tts <lang> <teks>
┃ ┈➤ #fake
┃ ┈➤ #hd
┃ ┈➤ #ssweb
┃ ┈➤ #ss
┃ ┈➤ #trad
┃ ┈➤ #spamwa <number>|<mesage>|<no of messages>
┃ ┈➤ #IPdoxx
┃ ┈➤ #nuevafotochannel
┃ ┈➤ #nosilenciarcanal
┃ ┈➤ #silenciarcanal
┃ ┈➤ #noseguircanal
┃ ┈➤ #seguircanal
┃ ┈➤ #avisoschannel
┃ ┈➤ #resiviravisos
┃ ┈➤ #inspect
┃ ┈➤ #inspeccionar
┃ ┈➤ #eliminarfotochannel
┃ ┈➤ #reactioneschannel
┃ ┈➤ #reaccioneschannel
┃ ┈➤ #nuevonombrecanal
┃ ┈➤ #nuevadescchannel
┃ ┈➤ #tourl
┃ ┈➤ #tourl2
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮DESCARGAS
┃ ┈➤ #hentai
┃ ┈➤ #mediafire
┃ ┈➤ #ytmp4 <url>
┃ ┈➤ #facebook
┃ ┈➤ #fb
┃ ┈➤ #gitclone *<url git>*
┃ ┈➤ #instagram
┃ ┈➤ #ig
┃ ┈➤ #apkmod
┃ ┈➤ #spotify *<nombre>*
┃ ┈➤ #imagen <query>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮DOWNLOADER
┃ ┈➤ #undefined
┃ ┈➤ #musica *<búsqueda>*
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮YTMP3
┃ ┈➤ #ytmp3
┃ ┈➤ #ytmp3doc
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮DL
┃ ┈➤ #tiktok
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮FUN
┃ ┈➤ #acertijo
┃ ┈➤ #gay <@tag> | <nombre>
┃ ┈➤ #lesbiana <@tag> | <nombre>
┃ ┈➤ #pajero <@tag> | <nombre>
┃ ┈➤ #pajera <@tag> | <nombre>
┃ ┈➤ #puto <@tag> | <nombre>
┃ ┈➤ #puta <@tag> | <nombre>
┃ ┈➤ #manco <@tag> | <nombre>
┃ ┈➤ #manca <@tag> | <nombre>
┃ ┈➤ #rata <@tag> | <nombre>
┃ ┈➤ #prostituta <@tag> | <nombre>
┃ ┈➤ #prostituto <@tag> | <nombre>
┃ ┈➤ #apostar *<cantidad>*
┃ ┈➤ #consejo
┃ ┈➤ #dance *<@user>*
┃ ┈➤ #doxear
┃ ┈➤ #formarpareja5
┃ ┈➤ #enamorada @tag
┃ ┈➤ #math
┃ ┈➤ #meme
┃ ┈➤ #personalidad
┃ ┈➤ #piropo
┃ ┈➤ #pokedex *<pokemon>*
┃ ┈➤ #ppt
┃ ┈➤ #pregunta
┃ ┈➤ #reto
┃ ┈➤ #ruleta *<cantidad> <color>*
┃ ┈➤ #ship
┃ ┈➤ #love
┃ ┈➤ #simi
┃ ┈➤ #bot
┃ ┈➤ #top *<texto>*
┃ ┈➤ #zodiac *2002 02 25*
┃ ┈➤ #amistad
┃ ┈➤ #facto
┃ ┈➤ #memev
┃ ┈➤ #pajeame
┃ ┈➤ #formartrio @usuario1 @usuario2
┃ ┈➤ #verdad
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮EMOX
┃ ┈➤ #agarrarnalgas @tag
┃ ┈➤ #anal/culiar @tag
┃ ┈➤ #angry/enojado @tag
┃ ┈➤ #bath/bañarse @tag
┃ ┈➤ #blowjob/mamada @tag
┃ ┈➤ #blush/sonrojarse @tag
┃ ┈➤ #chuparpata @tag
┃ ┈➤ #cry/llorar @tag
┃ ┈➤ #cuddle/acurrucarse @tag
┃ ┈➤ #drunk/borracho @tag
┃ ┈➤ #grabboobs/agarrartetas @tag
┃ ┈➤ #hello/hola @tag
┃ ┈➤ #hug/abrazar @tag
┃ ┈➤ #kill/matar @tag
┃ ┈➤ #kiss/besar @tag
┃ ┈➤ #kiss2/besar2 @tag
┃ ┈➤ #love2/enamorada @tag
┃ ┈➤ #patt/acariciar @tag
┃ ┈➤ #penetrar @user
┃ ┈➤ #punch/golpear @tag
┃ ┈➤ #sad/triste @tag
┃ ┈➤ #scared/asustada @tag
┃ ┈➤ #seduce/seducir @tag
┃ ┈➤ #sexo/sex @tag
┃ ┈➤ #sleep/dormir @tag
┃ ┈➤ #violar/perra @tag
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮NSFWS
┃ ┈➤ #follar @tag
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮GRUPO
┃ ┈➤ #add
┃ ┈➤ #group open / close
┃ ┈➤ #grupo abrir / cerrar
┃ ┈➤ #delete
┃ ┈➤ #demote
┃ ┈➤ #encuesta <text|text2>
┃ ┈➤ #undefined
┃ ┈➤ #hidetag
┃ ┈➤ #infogrupo
┃ ┈➤ #invite *<numero>*
┃ ┈➤ #link
┃ ┈➤ #listadv
┃ ┈➤ #promote
┃ ┈➤ #revoke
┃ ┈➤ #tagall *<mesaje>*
┃ ┈➤ #invocar *<mesaje>*
┃ ┈➤ #kick
┃ ┈➤ #rentar
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮INFO
┃ ┈➤ #reglas
┃ ┈➤ #ds
┃ ┈➤ #fixmsgespera
┃ ┈➤ #ping
┃ ┈➤ #sistema
┃ ┈➤ #speed
┃ ┈➤ #speedtest
┃ ┈➤ #status
┃ ┈➤ #grupos
┃ ┈➤ #script
┃ ┈➤ #reportar
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮OWNER
┃ ┈➤ #expired *<días>*
┃ ┈➤ #addprem [@user] <days>
┃ ┈➤ #autoadmin
┃ ┈➤ #copia
┃ ┈➤ #banuser <@tag> <razón>
┃ ┈➤ #broadcast
┃ ┈➤ #bc
┃ ┈➤ #broadcastgroup
┃ ┈➤ #bcgc
┃ ┈➤ #bcgc2
┃ ┈➤ #bcg
┃ ┈➤ #cheat
┃ ┈➤ #cleartmp
┃ ┈➤ #delprem <@user>
┃ ┈➤ #dsowner
┃ ┈➤ #>
┃ ┈➤ #=>
┃ ┈➤ #$
┃ ┈➤ #fetch
┃ ┈➤ #get
┃ ┈➤ #ip <alamat ip>
┃ ┈➤ #join <link>
┃ ┈➤ #grupocrear <nombre>
┃ ┈➤ #nuevabiobot <teks>
┃ ┈➤ #nuevafotobot *<imagen>*
┃ ┈➤ #nuevonombrebot <teks>
┃ ┈➤ #resetpersonajes
┃ ┈➤ #undefined
┃ ┈➤ #restart
┃ ┈➤ #unbanuser <@tag>
┃ ┈➤ #update
┃ ┈➤ #actualizar
┃ ┈➤ #enable <opción>
┃ ┈➤ #disable <opción>
┃ ┈➤ #añadirmonedas @usuario cantidad
┃ ┈➤ #groups
┃ ┈➤ #grouplist
┃ ┈➤ #reunion
┃ ┈➤ #meeting
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮FIX
┃ ┈➤ #dsowner
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮RPG
┃ ┈➤ #duelo @usuario <apuesta> [tuPersonaje] [personajeRival]
┃ ┈➤ #sacrificar <nombre>
┃ ┈➤ #cazar
┃ ┈➤ #daily
┃ ┈➤ #claim
┃ ┈➤ #cambiarexp <cantidad>
┃ ┈➤ #explorar
┃ ┈➤ #invocacion
┃ ┈➤ #levelup
┃ ┈➤ #listarpersonajes
┃ ┈➤ #logros
┃ ┈➤ #minar
┃ ┈➤ #miestatus
┃ ┈➤ #mimonedas
┃ ┈➤ #miexp
┃ ┈➤ #mispersonajes
┃ ┈➤ #mispjs
┃ ┈➤ #inventario
┃ ┈➤ #comprarpersonaje <nombre>
┃ ┈➤ #reinado
┃ ┈➤ #reinado reset
┃ ┈➤ #rob2
┃ ┈➤ #rob
┃ ┈➤ #toppersonajes
┃ ┈➤ #trabajar
┃ ┈➤ #work
┃ ┈➤ #invasionzombie
┃ ┈➤ #menurpg
┃ ┈➤ #tenertodo
┃ ┈➤ #lb [página]
┃ ┈➤ #bank
┃ ┈➤ #banco
┃ ┈➤ #cajamisteriosa
┃ ┈➤ #transferirmonedas *@user cantidad*
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮ECON
┃ ┈➤ #cambiarexp <cantidad>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮ECONOMÍA
┃ ┈➤ #listarpersonajes
┃ ┈➤ #miestatus
┃ ┈➤ #mimonedas
┃ ┈➤ #miexp
┃ ┈➤ #mispersonajes
┃ ┈➤ #mispjs
┃ ┈➤ #inventario
┃ ┈➤ #trabajar
┃ ┈➤ #work
┃ ┈➤ #cajamisteriosa
┃ ┈➤ #transferirmonedas *@user cantidad*
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮RANKING
┃ ┈➤ #reinado
┃ ┈➤ #reinado reset
┃ ┈➤ #toppersonajes
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮SEARCH
┃ ┈➤ #ytsearch *<texto>*
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮GACHA
┃ ┈➤ #claim
┃ ┈➤ #ver
┃ ┈➤ #rw
┃ ┈➤ #rollwaifu
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮GRUPOS
┃ ┈➤ #rentar2 *<link>*
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮JADIBOT
┃ ┈➤ #bots
┃ ┈➤ #token
┃ ┈➤ #gettoken
┃ ┈➤ #serbottoken
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮RG
┃ ┈➤ #profile
┃ ┈➤ #unreg
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮PREMIUM
┃ ┈➤ #comprarpremium <cantidad> <unidad>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮JUEGOS
┃ ┈➤ #cajamisteriosa
╰━━━━━━━━━━━━━

> ${dev}
  `.trim();

    await conn.reply(m.chat, '*ꪹ͜𓂃⌛͡ Cargando Comandos...𓏲੭*', m, { 
        contextInfo: { 
            forwardingScore: 2022, 
            isForwarded: true, 
            externalAdReply: {
                title: packname,
                body: '¡𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨! (˵•̀ᴗ - ˵ )',
                sourceUrl: redes,
                thumbnail: icons, 
            }
        }
    });

    await m.react('💜');

    await conn.sendMessage(m.chat, { 
        video: { url: randomGif },
        caption: txt,
        gifPlayback: true,
        contextInfo: {
            mentionedJid: [m.sender, userId],
            isForwarded: true,
            forwardingScore: 999,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363423924272086@newsletter',
                newsletterName: '⏤͟͞ू⃪፝͜⁞⟡『 Makima Bot 』࿐⟡',
                serverMessageId: -1,
            },
            externalAdReply: {
                title: 'ׄMakima MD',
                body: dev,
                thumbnail: icons,
                sourceUrl: redes,
                mediaType: 1,
                renderLargerThumbnail: false,
            }
        }
    }, { quoted: m });

};

handler.help = ['menu'];
handler.register = true;
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help'];

export default handler;

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}