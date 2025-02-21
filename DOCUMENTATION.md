# Documentação do Projeto VSL Next

## 📌 1. Introdução

Este documento apresenta as decisões técnicas tomadas no desenvolvimento do projeto **VSL Next**, além das estratégias de otimização implementadas e métricas de desempenho analisadas através do Lighthouse.

---

## 🚀 2. Decisões Técnicas

### 2.1. Next.js

O projeto foi desenvolvido utilizando **Next.js**, pelos seguintes motivos:

- **Renderização Híbrida:** Uso de **SSR** (Server-Side Rendering) para conteúdo dinâmico e **SSG** (Static Site Generation) para conteúdo estático.
- **Roteamento Automático:** Implementação eficiente de rotas baseadas em arquivos.
- **Otimização de Performance:** Recursos nativos como **image optimization** e **lazy loading**.
- **SEO-friendly:** Suporte integrado a metatags dinâmicas via `next/head`.

### 2.2. TypeScript

O uso do **TypeScript** garante maior segurança e manutenibilidade do código. Os principais benefícios incluem:

- **Tipagem Estática:** Redução de erros em tempo de execução.
- **Melhor Autocompletar e IntelliSense:** Aumento na produtividade dos desenvolvedores.
- **Refatoração Segura:** Possibilita mudanças no código com menor risco de introdução de bugs.
- **Compatibilidade com JavaScript:** Adaptação progressiva e suporte a bibliotecas existentes.

### 2.3. Tailwind CSS

Para a estilização do projeto, utilizamos **Tailwind CSS**, devido aos seguintes fatores:

- **Classes Utilitárias:** Permitem estilização rápida e modular.
- **Performance Aprimorada:** Geração de CSS otimizado, removendo classes não utilizadas (Purging CSS).
- **Flexibilidade:** Facilita a adaptação a diferentes designs sem necessidade de escrever estilos personalizados.

### 2.4. Frameworks e Bibliotecas Utilizadas

- **`next/image`** → Para carregamento otimizado de imagens.
- **Eslint + Prettier** → Padronização e qualidade do código.

---

## ⚡ 3. Estratégias de Otimização

### 3.1. Performance

- **Lazy Loading de Imagens:** Utilização do `next/image` com `loading="lazy"`.
- **Minificação e Compressão:** Uso de **Brotli** junto a **Vercel** para compressão de arquivos.
- **Remoção de CSS Não Utilizado:** Configuração do Tailwind para eliminar classes desnecessárias em produção.
- **Code Splitting:** Carregamento dinâmico de componentes apenas quando necessário (`import()` e `dynamic()` do Next.js).
- **Pre-fetching de Páginas:** O Next.js carrega automaticamente páginas vinculadas via `<Link>` antes da interação do usuário, reduzindo o tempo de carregamento.

### 3.2. Acessibilidade

- **Uso correto de semântica HTML** (`<main>`, `<footer>`, etc.).
- **Botões de acessibilidade.**
- **Contraste adequado de cores.**

### 3.3. SEO

- **Meta tags dinâmicas** utilizando `next/head`.

---

## 📊 4. Métricas do Lighthouse

Abaixo estão os resultados obtidos nas análises de performance realizadas com o **Lighthouse**:

- **Performance:** 94
- **Acessibilidade:** 93
- **Melhores Práticas:** 100
- **SEO:** 100

📌 _(Print anexado no PDF.)_

---

## 🔗 5. Implementação do Código UTM

Para garantir o rastreamento eficiente de campanhas de tráfego e a correta atribuição de conversões, foi implementado um sistema de captura e armazenamento de UTMs.

### **5.1 Como funciona?**

- Quando um usuário acessa o site com parâmetros UTM (`utm_source`, `utm_medium`, `utm_campaign`, etc.), esses valores são **armazenados localmente**.
- As UTMs persistem mesmo que o usuário **navegue para outras páginas**, garantindo rastreamento contínuo.
- Os dados são utilizados em formulários de conversão para identificar a origem de leads.

Essa estratégia permite uma análise detalhada do desempenho de campanhas pagas e aprimora a **eficácia das estratégias de marketing digital**.

---

## 🎨 6. UI/UX

### **6.1 Diretrizes no Figma**

A estrutura visual do projeto foi desenvolvida no **Figma**, garantindo uma experiência fluida e alinhada às melhores práticas de conversão

---

## 🤖 7. Estratégias de IA Aplicadas

A inteligência artificial foi utilizada para aprimorar **a experiência do usuário** e **a conversão** do projeto. Entre as aplicações implementadas, destacam-se:

🔹 **Geração de Copy Persuasiva:** Uso de IA para otimizar textos de vendas e testar diferentes abordagens.  
🔹 **Performance** Ajuda para implementar e buscar uma melhor performance.

---

## 🏁 8. Considerações Finais

O projeto **VSL Next** foi desenvolvido com foco em **performance, acessibilidade e conversão**. A integração entre **Next.js, TypeScript e Tailwind CSS** proporcionou uma aplicação **leve, rápida e otimizada**.

Futuras melhorias podem incluir:

- 📌 **Refatoração do código** para aprimorar ainda mais o desempenho.
- 📌 **Melhorias na usabilidade**, baseadas no feedback dos usuários.

---

✍ **Autor:** _[Lucas Paiva]_
