import { defineConfig, devices } from '@playwright/test';

/**
 * Configuração do Playwright para automação de testes E2E
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /* Tempo máximo para execução de um teste */
  timeout: 120 * 1000, // Aumentado para 120 segundos (2 minutos)

  /* Tempo de espera para asserções */
  expect: {
    timeout: 10000 // Aumentado para 10 segundos
  },

  /* Executa testes em paralelo */
  fullyParallel: false, // Desabilitado para facilitar debug

  /* Falha o build se houver testes com .only */
  forbidOnly: !!process.env.CI,

  /* Retry em caso de falha */
  retries: process.env.CI ? 2 : 0,

  /* Workers para execução paralela */
  /* Definido como 1 para facilitar mapeamento e debug */
  workers: 1,

  /* Configuração do reporter */
  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright'],
  ],

  /* Configurações compartilhadas para todos os projetos */
  use: {
    /* URL base para os testes */
    baseURL: 'https://flex.claro.com.br/',

    /* Headless desabilitado para visualizar o navegador durante mapeamento */
    headless: false,

    /* Coleta trace em caso de falha */
    trace: 'on-first-retry',

    /* Screenshot - opções: 'on', 'off', 'only-on-failure' */
    screenshot: 'on',

    /* Video - opções: 'on', 'off', 'retain-on-failure', 'on-first-retry' */
    video: 'off',

    /* Viewport padrão */
    viewport: { width: 1920, height: 1080 },

    /* Timeout para ações */
    actionTimeout: 15000,
    navigationTimeout: 60000, // Aumentado para 60 segundos
  },

  /* Configuração dos projetos (navegadores) */
  /* Começando apenas com Chromium para simplificar */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Configurações específicas do Chromium
        channel: 'chrome', // Usa Chrome instalado se disponível
      },
    },

    // Comente os outros navegadores inicialmente para simplificar
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  /* Servidor de desenvolvimento (se necessário) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
