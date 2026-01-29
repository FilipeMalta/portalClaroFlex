import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * PortalPage - Centraliza operações de navegação e captura de evidências
 * 
 * Responsabilidades:
 * - Navegação para a página inicial
 * - Captura de screenshots (página inteira, com scroll, ou elemento específico)
 * - Validações básicas de página (URL, carregamento)
 * 
 * Métodos de Screenshot:
 * - tirarScreenshot() → Página inteira
 * - tirarScreenshotComScroll() → Página inteira com scroll até elemento
 * - capturarCardPlano() → Card específico do plano (ideal para apresentações)
 */
export class PortalPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ========== NAVEGAÇÃO ==========

  async navegarParaHome(): Promise<void> {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    try {
      await this.page.waitForLoadState('networkidle', { timeout: 10000 });
    } catch {
      await this.page.waitForLoadState('load', { timeout: 5000 });
    }
    await this.page.waitForTimeout(1500);
  }

  async validarTelaHome(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  // ========== VALIDAÇÕES ==========

  async validarElementoVisivel(locator: Locator, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async validarURL(pattern: string | RegExp): Promise<void> {
    await this.page.waitForURL(pattern, { timeout: 10000 });
  }

  // ========== SCREENSHOTS ==========

  async waitForLoadState(): Promise<void> {
    try {
      await this.page.waitForLoadState('networkidle', { timeout: 10000 });
    } catch {
      await this.page.waitForLoadState('load', { timeout: 5000 });
    }
  }

  /**
   * Captura a página inteira em fullpage screenshot
   */
  async tirarScreenshot(nome: string): Promise<void> {
    await this.page.screenshot({
      path: `test-results/screenshots/${nome}.png`,
      fullPage: true,
    });
  }

  /**
   * Captura a página após scroll até o elemento especificado
   * Ideal para garantir visibilidade do elemento no screenshot
   */
  async tirarScreenshotComScroll(locator: Locator, nome: string): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({
      path: `test-results/screenshots/${nome}.png`,
      fullPage: true,
    });
  }

  /**
   * Captura apenas o card do plano (elemento específico)
   * Ideal para apresentações - imagem limpa e focada
   * @param textSelector Identificador do plano (ex: '25GB15GB do plano + 5GB de bô')
   * @param nome Nome do arquivo (ex: 'card-plano-25gb')
   */
  async capturarCardPlano(textSelector: string, nome: string): Promise<void> {
    const cardLocator = this.page.getByText(textSelector).locator('xpath=ancestor::div[@class or @data-testid][1]');
    await cardLocator.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
    await cardLocator.screenshot({
      path: `test-results/screenshots/${nome}.png`,
    });
  }

  // ========== UTILITÁRIOS ==========

  async waitForTimeout(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async clickElement(locator: Locator): Promise<void> {
    await locator.click();
    await this.page.waitForTimeout(500);
  }

  async fillInput(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  async getText(locator: Locator): Promise<string> {
    return (await locator.textContent()) || '';
  }
}
