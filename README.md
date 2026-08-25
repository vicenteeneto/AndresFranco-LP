# Andrés Franco — site pessoal

Site multilíngue de marca pessoal. Next.js 16 (App Router) · TypeScript · Tailwind v4 · next-intl.
Espanhol é o idioma padrão (`/`), português é o secundário (`/pt`), e o inglês entra depois sem redesenho.

---

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start
```

Deploy recomendado: **Vercel** (importar o repositório, sem configuração extra).

---

## 1. O que precisa ser preenchido antes de publicar

| Onde | O quê |
| --- | --- |
| `src/content/site.ts` → `SITE_URL` | domínio final (hoje `https://andresfranco.com`) |
| `.env.local` → `NEXT_PUBLIC_CONTACT_FORM_KEY` | chave do formulário de contato (ver seção 4) |
| `src/content/media.ts` → `PULSO.episodes` | IDs dos episódios do YouTube a destacar |

Tudo o mais já está preenchido com informação verificada.

---

## 2. Idiomas

```
src/i18n/routing.ts     ← lista de idiomas, padrão, rótulos ES | PT
messages/es.json        ← todo o texto em espanhol
messages/pt.json        ← todo o texto em português
```

Nenhum texto está escrito dentro dos componentes: tudo vem dos arquivos de mensagens.

**Para adicionar inglês:**

1. `src/i18n/routing.ts` → `locales = ["es", "pt", "en"]`
2. copiar `messages/es.json` para `messages/en.json` e traduzir
3. no mesmo arquivo, acrescentar `en: "EN"` em `localeLabels`, `en: "English"` em `localeNames` e `en: "en"` em `localeTags`

O seletor de idioma, as tags `hreflang`, o sitemap e os metadados passam a incluir o inglês automaticamente. Nenhuma outra alteração é necessária.

---

## 3. Conteúdo que muda com frequência

A estrutura fica em `src/content/` e o texto correspondente em `messages/*.json`. Sempre os dois.

### Insights & Media — `src/content/media.ts`

```ts
{
  id: "entrevistaExpansion",     // chave da tradução
  category: "interview",         // event | video | article | interview | impact
  date: "2026-03",               // opcional
  photo: "eventRoadshow",        // opcional, ver src/content/images.ts
  href: "https://…",             // opcional
  feature: true,                 // opcional: ocupa duas colunas
}
```

E em cada `messages/*.json`, dentro de `media.items`:

```json
"entrevistaExpansion": {
  "title": "…",
  "excerpt": "…",
  "meta": "…"
}
```

Os filtros de categoria aparecem sozinhos — só são exibidas as categorias que têm conteúdo.

### Trajetória — `src/content/journey.ts`

```ts
{ id: "novoMarco", period: "2024" }   // `current: true` marca o cargo atual
```

mais o bloco `journey.items.novoMarco` com `title`, `role` e `body` em cada idioma.

### El Pulso del Poder — `src/content/media.ts`

```ts
export const PULSO = {
  channelUrl: "https://www.youtube.com/@ELPULSODELPODERTV",
  episodes: [
    { videoId: "AbCdEfG1234", title: "…", date: "2026-05-12" },
  ],
};
```

O primeiro episódio vira o player principal; os seguintes formam a trilha abaixo. Com a lista vazia, a seção exibe o painel do programa com o botão “Ver programa”. O player é *click-to-load*: nada é pedido ao YouTube antes do clique.

### Temas, pilares e redes

`src/content/speaking.ts` (temas de palestra, pilares de liderança, categorias do formulário) e `src/content/site.ts` (LinkedIn, Instagram, YouTube). Um link com `href: ""` simplesmente não é renderizado.

---

## 4. Formulário de contato

Em `src/content/site.ts`:

```ts
export const CONTACT_FORM = {
  provider: "web3forms",   // ou "formspree"
  key: process.env.NEXT_PUBLIC_CONTACT_FORM_KEY ?? "",
};
```

**Web3Forms** (recomendado, grátis, sem conta): pegar a access key em <https://web3forms.com> e criar `.env.local`:

```
NEXT_PUBLIC_CONTACT_FORM_KEY=sua-access-key
```

**Formspree**: trocar `provider` para `"formspree"` e usar o ID do formulário (a parte depois de `/f/`).

Enquanto não houver chave, o formulário envia por `mailto:` se `CONTACT_EMAIL` estiver preenchido em `site.ts`; sem nenhum dos dois, exibe a mensagem de erro com o convite a escrever pelo LinkedIn. Há um honeypot anti-spam no formulário.

---

## 5. Fotografia

Manifesto em `src/content/images.ts` — cada foto tem `src`, dimensões reais e `position` (o ponto focal do corte).

Para trocar uma foto: colocar o arquivo em `public/images/` com o mesmo nome, atualizar `width`/`height` no manifesto e, se necessário, ajustar `position`. O texto alternativo é traduzido e fica em `messages/*.json` → `images.<id>`.

`next/image` gera AVIF e WebP nos tamanhos certos automaticamente; só o retrato do hero carrega com prioridade, o resto é lazy.

A imagem de compartilhamento social (`public/images/og.jpg`, 1200×630) e os ícones (`src/app/icon.png`, `apple-icon.png`) foram gerados a partir das fotos reais.

---

## 6. Design

Os tokens ficam todos no topo de `src/app/globals.css`: paleta (branco quente, carvão, azul-marinho, azul médio), tipografia (**Instrument Serif** para títulos, **Inter** para texto — ambas auto-hospedadas via `@fontsource`, sem requisições externas) e as utilidades editoriais (`display`, `t-hero`, `t-h2`, `eyebrow`, `lead`, `shell`, `section-y`, `frame`).

As animações são um único `IntersectionObserver` (`src/components/ui/Reveal.tsx`): qualquer elemento com `data-reveal` aparece ao entrar na tela, e nada anima para quem tem `prefers-reduced-motion`.

Ritmo das seções: branco quente → branco → branco quente → branco → areia → branco quente → branco → azul-marinho → branco quente → branco → carvão.

---

## 7. SEO

- títulos e descrições por idioma, `canonical` e `hreflang` (incluindo `x-default`)
- OpenGraph e Twitter card com imagem própria
- dados estruturados `Person` (cargo, organização, áreas de conhecimento, perfis sociais)
- `sitemap.xml` e `robots.txt` gerados a partir da lista de idiomas
- títulos semânticos: um `h1` no hero, um `h2` por seção

Atualizar `SITE_URL` em `src/content/site.ts` antes de publicar — é dele que saem todas as URLs absolutas.

---

## 8. Estrutura

```
messages/                 es.json · pt.json  (todo o texto)
public/images/            fotos + og.jpg
src/app/[locale]/         layout (metadata, JSON-LD) e página
src/app/globals.css       design system
src/components/           SiteHeader · SiteFooter
  sections/               as 11 seções da página
  ui/                     Photo · Reveal · LiteYouTube · LanguageSwitcher · icons
src/content/              site · images · media · journey · speaking · sections
src/i18n/                 routing · request · navigation
src/proxy.ts              roteamento de idioma
```

---

## 9. Nota sobre marcas de terceiros

O site é pessoal. SS&C Blue Prism, Cisco e John Maxwell aparecem como referências à trajetória profissional de Andrés Franco — o rodapé traz o aviso explícito de que o site não é comunicação oficial dessas organizações. Nenhum logotipo de terceiros é utilizado.
