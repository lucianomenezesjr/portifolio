// Baixa a foto e as capturas de tela do seu portfólio atual para a pasta assets/.
// Uso (Node 18 ou mais novo), dentro da pasta do projeto:   node download-assets.mjs

import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const BASE = "https://lucianojr-portifolio.vercel.app/";

// caminho no site atual  ->  caminho local
const FILES = {
  "me2.jpeg": "public/assets/me.jpg",

  "CdaImagens/home_cda.png": "public/assets/cda/home_cda.png",
  "CdaImagens/cadastro_cda.png": "public/assets/cda/cadastro_cda.png",
  "CdaImagens/login_cda.png": "public/assets/cda/login_cda.png",

  "alureImgs/alure_home.png": "public/assets/alure/alure_home.png",
  "alureImgs/alure_produtos.png": "public/assets/alure/alure_produtos.png",
  "alureImgs/alure_produto_detalhes.png": "public/assets/alure/alure_produto_detalhes.png",
  "alureImgs/alure_avaliacao.png": "public/assets/alure/alure_avaliacao.png",
  "alureImgs/cadastro_produtos.png": "public/assets/alure/cadastro_produtos.png",
  "alureImgs/alure_login.png": "public/assets/alure/alure_login.png",
  "alureImgs/alure_cadastro.png": "public/assets/alure/alure_cadastro.png",

  "GeminiAPI/methodPostv2.png": "public/assets/api/methodPostv2.png",
  "GeminiAPI/methodPost.png": "public/assets/api/methodPost.png",
  "GeminiAPI/methodGet.png": "public/assets/api/methodGet.png"
};

let ok = 0;
let failed = 0;

for (const [remote, local] of Object.entries(FILES)) {
  const url = new URL(remote, BASE).href;
  const dest = fileURLToPath(new URL(local, import.meta.url));
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log("ok     ", local);
    ok++;
  } catch (err) {
    console.log("falhou ", local, "-", err.message);
    failed++;
  }
}

console.log(`\n${ok} arquivo(s) baixado(s), ${failed} falha(s).`);
