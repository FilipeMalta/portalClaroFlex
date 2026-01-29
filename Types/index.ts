import { Page } from '@playwright/test';

/**
 * Interfaces TypeScript para o projeto
 * Centraliza tipos reutilizáveis
 */

/**
 * Configuração de autenticação
 */
export interface AuthConfig {
  baseUrl: string;
  email: string;
  senha: string;
  timeout: number;
}

/**
 * Dados de teste para pesquisa
 */
export interface TestDateRange {
  dataInicio: string;
  dataFim: string;
}

/**
 * Dados de usuário para testes
 */
export interface TestUser {
  email: string;
  senha: string;
}

/**
 * Opções para screenshots
 */
export interface ScreenshotOptions {
  name: string;
  fullPage?: boolean;
  timeout?: number;
}

/**
 * Extensão do Page do Playwright com métodos customizados
 */
export interface CustomPage extends Page {
  // Adicione métodos customizados se necessário
}

// Adicione mais interfaces conforme necessário
