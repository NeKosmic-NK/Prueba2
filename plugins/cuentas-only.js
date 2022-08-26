let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 KEEPSOLID 」─*\n*“${pickRandom(global.only)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['only']
handler.tags = ['fun']
handler.command = /^only/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.only = [
  "Correo: ueedylk847@tormails.com Contraseña: COMPARTE EL GRUPO EN 5 GRUPOS Y LUEGO RECLAMA LA CUENTA A MI PRIV ",

] 
