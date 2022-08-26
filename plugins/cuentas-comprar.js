let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇     「 COMPRAR 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇ 🔰📤VENTA DE CUENTAS PERSONALES📤🔰
*┇ 
*┇ 🏷PRIME VIDEO 3 MESES 
*┇ 🏷HBO MAX 2 MESES 
*┇ 🏷CRUNCHYROLL PAGO UNICO
*┇ 🏷TIDAL PAGO UNICO
*┇ 🏷PARAMOUNT+ 2 MESES  
*┇ 🏷COMBO+ 1 MES
*┇ 
*┇ 📤TAMBIEN CONTAMOS CON HITS
*┇ ⚠️STAR+
*┇ ⚠️VIKI RAKUTEN
*┇ ⚠️PARAMOUNT+
*┇ ⚠️CLARO VIDEO
*┇ ⚠️DISNEY+
*┇ ⚠️TELCENTRO
*┇ ⚠️IZZIGO
*┇ 
*┇ 📤| METODOS DE PAGO:
*┇ PayPal
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/NeKosmicOFC', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['comprar4']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
