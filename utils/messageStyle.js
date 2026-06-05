import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "✿🌸𝑴𝒂𝒕𝒉𝒊𝒂𝒔 𝑵𝒐𝒓𝒎𝒂𝒏 bot",
        body: "𝔻𝕚𝕞𝕖𝕟𝕤𝕚𝕠𝕟",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}
