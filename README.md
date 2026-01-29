# Portal Claro Flex - Automação de Testes E2E# Portal Claro Flex - Automação de Testes E2E



Automação de testes end-to-end para validação dos planos de telefonia do Portal Claro Flex, utilizando **Playwright** e **TypeScript** com o padrão **Page Object Model**.Projeto de automação de testes end-to-end utilizando Playwright e TypeScript, seguindo o padrão Page Objects e arquitetura baseada no Portal de Identificação.



## 🎯 Objetivo## 📚 Documentação



Validar automaticamente a composição completa de todos os planos de telefonia (25GB, 30GB, 40GB, 70GB PASSAPORTE), incluindo:- **[AGENTE_AUTOMACAO.md](./AGENTE_AUTOMACAO.md)** - Guia completo do agente de automação

- ✅ Títulos e detalhes dos planos- **[PADROES_PROJETO.md](./PADROES_PROJETO.md)** - Padrões e convenções do projeto

- ✅ Apps inclusos no bônus- **[MAPEAMENTO.md](./MAPEAMENTO.md)** - Guia de mapeamento de elementos

- ✅ Serviços ilimitados- **[INSTALACAO.md](./INSTALACAO.md)** - Guia de instalação

- ✅ Assinaturas incluídas- **[SOLUCAO_PROBLEMAS.md](./SOLUCAO_PROBLEMAS.md)** - Solução de problemas comuns

- ✅ Cupons de desconto

- ✅ Valores e preços## 📋 Pré-requisitos



## 📋 Pré-requisitos- Node.js (versão 18 ou superior)

- npm ou yarn

- **Node.js** 18+ 

- **npm** 7+## 🚀 Instalação

- Navegador Chrome (para execução dos testes)

1. Instale as dependências:

## 🚀 Instalação```bash

npm install

```bash```

# 1. Instalar dependências

npm install2. Instale os navegadores do Playwright:

```bash

# 2. Instalar navegadores do Playwrightnpx playwright install

npx playwright install```

```

## 🧪 Executando os Testes

## 🧪 Executando os Testes

### Executar todos os testes

### Executar todos os testes```bash

```bashnpm test

npm test```

```

### Executar testes em modo visual (headed)

### Executar em modo visual (headless: false)```bash

```bashnpm run test:headed

npm run test:headed```

```

### Executar testes em modo debug

### Executar em modo debug```bash

```bashnpm run test:debug

npm run test:debug```

```

### Executar testes com UI interativa

### Executar com UI interativa```bash

```bashnpm run test:ui

npm run test:ui```

```

### Visualizar relatório de testes

### Listar todos os testes disponíveis```bash

```bashnpm run test:report

npm run test:list```

```

## 📁 Estrutura do Projeto

## 📊 Relatórios

```

### Playwright Report (Nativo).

```bash├── pages/              # Page Objects

npm run test:report│   ├── BasePage.ts     # Classe base com métodos comuns

```│   ├── PortalPage.ts   # Classe principal centralizada

Gera relatório HTML interativo em `playwright-report/`│   └── HomePage.ts     # Exemplo de Page Object

├── Fixtures/           # Fixtures customizadas

### Allure Report (Profissional)│   └── PortalFixture.ts # Fixture que fornece portalPage

```bash├── Helpers/            # Funções auxiliares

npm run test:allure│   └── TestData.ts     # Dados de teste centralizados

```├── Types/              # Interfaces TypeScript

Gera e abre relatório Allure em tempo real│   └── index.ts

├── tests/              # Testes

Limpar resultados anteriores:│   ├── portal.spec.ts  # Testes usando PortalFixture (recomendado)

```bash│   └── teste.spec.ts   # Testes para mapeamento

npm run test:allure:clean├── playwright.config.ts

```├── tsconfig.json

├── package.json

## 📁 Estrutura do Projeto└── .env.example        # Template de variáveis de ambiente

```

```

PortalClaroFlexE2E/## 📝 Padrão Page Objects

├── pages/

│   ├── BasePage.ts           # Classe base com métodos comunsO projeto segue o padrão Page Objects, onde cada página da aplicação é representada por uma classe que encapsula:

│   ├── HomePage.ts           # Validações dos planos- Locators dos elementos da página

│   └── PortalPage.ts         # Navegação e screenshots- Métodos que representam ações do usuário

├── tests/- Métodos auxiliares para validações

│   └── portal.spec.ts        # Suite de testes principal

├── Fixtures/### Exemplo de uso com PortalFixture (recomendado):

│   └── PortalFixture.ts      # Fixture reutilizável

├── Helpers/```typescript

│   └── TestData.ts           # Dados de teste centralizadosimport { test, expect } from '../Fixtures/PortalFixture';

├── Types/import { HomePage } from '../pages/HomePage';

│   └── index.ts              # Tipos TypeScript

├── playwright.config.ts      # Configuração do Playwrighttest('exemplo - validar planos', async ({ portalPage }) => {

├── tsconfig.json             # Configuração do TypeScript  const homePage = new HomePage(portalPage.page);

└── package.json              # Dependências e scripts  

```  await test.step('📋 Navegar para home', async () => {

    await portalPage.navegarParaHome();

## 🧩 Padrões e Arquitetura  });

  

### Page Object Model (POM)  await test.step('✅ Validar planos visíveis', async () => {

- **BasePage**: Classe base com métodos reutilizáveis    await homePage.verificarPlanosVisiveis();

- **HomePage**: Métodos específicos para validação dos planos  });

- **PortalPage**: Navegação, validações e captura de screenshots  

  await test.step('📸 Capturar screenshot', async () => {

### Fixtures    await portalPage.tirarScreenshot('planos-validados');

Reutilização de recursos entre testes sem duplicação:  });

});

```typescript```

test('Teste exemplo', async ({ portalPage }) => {

  // portalPage já está configurado e pronto para usar### Exemplo de uso sem PortalFixture:

});

``````typescript

import { test } from '@playwright/test';

## 📸 Métodos de Captura de Evidênciaimport { PortalPage } from '../pages/PortalPage';



### 1. Página Inteiratest('exemplo', async ({ page }) => {

```typescript  const portalPage = new PortalPage(page);

await portalPage.tirarScreenshot('nome-do-screenshot');  await portalPage.navegarParaHome();

```});

Captura a página completa em fullpage```



### 2. Página com Scroll até Elemento## 🔧 Configuração

```typescript

await portalPage.tirarScreenshotComScroll(As configurações do Playwright podem ser ajustadas no arquivo `playwright.config.ts`.

  portalPage.page.getByRole('heading', { name: '25GB' }).first(),

  'plano-25gb-validado'## 📚 Documentação

);

```- [Playwright Documentation](https://playwright.dev/)

Scroll até o elemento e captura a página- [TypeScript Documentation](https://www.typescriptlang.org/)


### 3. Card Específico (Ideal para Apresentações)
```typescript
await portalPage.capturarCardPlano(
  '25GB15GB do plano + 5GB de bô',
  'card-plano-25gb'
);
```
Captura apenas o card do plano sem distrações

## 🧪 Testes Disponíveis

### 1. Validação Completa (Recomendado)
```bash
npm test
```
**Teste**: `Deve validar a composição completa de todos os planos`
- ✅ Carrega página inicial uma única vez
- ✅ Valida composição de cada plano
- ✅ Captura screenshots com scroll
- ⏱️ Tempo: ~25-30 segundos

### 2. Navegação e Carregamento
**Teste**: `Deve navegar para a página inicial e validar carregamento`
- Valida navegação e URL
- Smoke test rápido

### 3. Captura de Cards Individuais
**Teste**: `Deve capturar cards individuais dos planos`
- Captura apenas os cards (ideal para apresentações)
- Gera 4 imagens PNG limpas dos planos

## 🎯 Seletores e Estratégia

Prioridade de seletores (do mais robusto para fallback):
1. `getByRole()` - Acessibilidade (recomendado)
2. `getByLabel()` - Formulários
3. `getByText()` - Texto visível
4. `locator()` - Atributos específicos
5. `nth()` - Última opção (documentada)

## 📊 Performance

| Métrica | Valor |
|---------|-------|
| Tempo de execução | ~25-30 segundos |
| Planos validados | 4 |
| Screenshots gerados | 5+ |
| Taxa de sucesso | 100% |

## 🛠️ Troubleshooting

### Testes com erro de timeout
```bash
# Aumentar timeout na configuração (playwright.config.ts)
timeout: 120 * 1000 // 120 segundos
```

### Screenshots não aparecem
```bash
# Verificar pasta
ls test-results/screenshots/
```

### Allure Report não abre
```bash
# Instalar Allure globalmente (opcional)
npm install -g allure-commandline
```

## 📝 Configuração

### playwright.config.ts
- **headless**: `false` (visualizar navegador)
- **workers**: `1` (execução sequencial)
- **screenshot**: `'on'` (captura todas as ações)
- **video**: `'off'` (desabilitado por performance)
- **viewport**: `1920x1080`

## 🔄 Fluxo de Execução

```
npm test
  ↓
[Carregar página inicial] (1x)
  ↓
[Validar plano 25GB] → Screenshot com scroll
  ↓
[Validar plano 30GB] → Screenshot com scroll
  ↓
[Validar plano 40GB] → Screenshot com scroll
  ↓
[Validar plano 70GB] → Screenshot com scroll
  ↓
[Gerar relatórios] (Playwright + Allure)
  ↓
✅ Testes concluídos
```

## 📈 Próximos Passos

- [ ] Integração CI/CD (GitHub Actions)
- [ ] Testes em múltiplos navegadores (Firefox, Safari)
- [ ] Testes de performance
- [ ] Testes de responsividade mobile
- [ ] Integração com Jira/Azure DevOps

## 📞 Contato

Para dúvidas ou sugestões sobre este projeto, entre em contato com o time de QA.

---

**Última atualização**: Janeiro 2026
**Versão**: 1.0.0
**Status**: ✅ Produção
