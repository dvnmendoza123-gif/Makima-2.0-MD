import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.sendMessage(m.chat, { text: '☆ Ingresa un texto para hablar con gmp.' });
  }

  try {
    const response = await axios.get(`http://node.deluxehost.cl:3032/api/ai/geminis`);
    const respuesta = response.data.response;
    conn.sendMessage(m.chat, { text: respuesta });
  } catch (error) {
    conn.sendMessage(m.chat, { text: 'No se pudo generar una respuesta. Intenta de nuevo.' });
  }
};

handler.help = ['gmp + <texto>'];
handler.tags = ['ai'];
handler.command = ['gmp'];

export default handler;