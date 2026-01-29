import { Page, Locator } from '@playwright/test';
import { ScreenshotOptions } from '../Types';

/**
 * Classe base para Page Objects
 * Contém métodos comuns que podem ser reutilizados por outras páginas
 * 
 * Padrões:
 * - Métodos públicos representam ações do usuário
 * - Seletores são encapsulados como propriedades privadas
 * - Métodos auxiliares são privados
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navega para uma URL específica
   * @param url URL relativa ou absoluta
   */
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
    await this.waitForLoadState();
  }

  /**
   * Obtém o título da página
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Aguarda o carregamento completo da página
   * Prefere esperas inteligentes ao invés de timeout fixo
   * Usa estratégia robusta que não falha com requisições contínuas
   */
  async waitForLoadState(): Promise<void> {
    try {
      await this.page.waitForLoadState('networkidle', { timeout: 10000 });
    } catch {
      // Se networkidle falhar (requisições contínuas), aguarda apenas load state básico
      await this.page.waitForLoadState('load', { timeout: 5000 });
    }
  }

  /**
   * Aguarda um elemento ficar visível
   * @param locator Locator do elemento
   * @param timeout Timeout em milissegundos (padrão: 10000)
   */
  async waitForElement(locator: Locator, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  /**
   * Clica em um elemento
   * @param locator Locator do elemento
   */
  async clickElement(locator: Locator): Promise<void> {
    await locator.click();
    // Aguarda após cliques importantes para garantir que a ação foi processada
    await this.page.waitForTimeout(500);
  }

  /**
   * Preenche um campo de input
   * @param locator Locator do campo
   * @param text Texto a ser preenchido
   */
  async fillInput(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  /**
   * Obtém o texto de um elemento
   * @param locator Locator do elemento
   */
  async getText(locator: Locator): Promise<string> {
    return (await locator.textContent()) || '';
  }

  /**
   * Tira screenshot da página
   * @param options Opções do screenshot (name é obrigatório)
   */
  async tirarScreenshot(options: ScreenshotOptions): Promise<void> {
    const { name, fullPage = false, timeout = 5000 } = options;
    await this.page.screenshot({
      path: `test-results/screenshots/${name}.png`,
      fullPage,
      timeout,
    });
  }


  /**
   * Verifica se um elemento está visível
   * @param locator Locator do elemento
   */
  async isElementVisible(locator: Locator): Promise<boolean> {
    try {
      return await locator.isVisible({ timeout: 5000 });
    } catch {
      return false;
    }
  }

  /**
   * Aguarda timeout apenas quando necessário (ex: animações Material-UI)
   * @param ms Milissegundos a aguardar
   */
  async waitForTimeout(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);
  }
}
