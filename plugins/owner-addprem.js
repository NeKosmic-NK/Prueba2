import fs from 'fs'
let handler = async (m, { conn, text }) => {
let who
const json = JSON.parse(fs.readFileSync('./src/premium.json'))
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[βππππβ] πΈπ½πΆππ΄ππ° π΄π» @πππ π³π΄ π»π° πΏπ΄πππΎπ½π° πππ΄ π³π΄ππ΄π΄ π°πΆππ΄πΆπ°π π° π»πΎπ ππππ°ππΈπΎπ πΏππ΄πΌπΈππΌ*`
if (global.prems.includes(who.split`@`[0])) throw '*[βππππβ] π΄π» ππππ°ππΈπΎ πΈπ½πΆππ΄ππ°π³πΎ ππ° π΄π ππππ°ππΈπΎ πΏππ΄πΌπΈππΌ*'
global.prems.push(`${who.split`@`[0]}`)
json.push(`${who.split`@`[0]}`)
fs.writeFileSync('./src/premium.json', JSON.stringify(json))
conn.reply(m.chat, `*[βππππβ] @${who.split`@`[0]} π°π·πΎππ° π΄π ππ½ ππππ°ππΈπΎ πΏππ΄πΌπΈππΌ, π½πΎ ππ΄π½π³ππ° π»πΈπΌπΈππ΄π π°π» πππ°π π΄π» π±πΎπ*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.rowner = true
export default handler
