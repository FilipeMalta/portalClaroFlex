import { test as base, expect } from '@playwright/test';
import { PortalPage } from '../pages/PortalPage';

/**
 * Fixture customizada do Playwright
 * Fornece portalPage para todos os testes
 * 
 * Uso:
 * import { test, expect } from '../Fixtures/PortalFixture';
 * 
 * test('meu teste', async ({ portalPage }) => {
 *   await portalPage.navegarParaHome();
 * });
 */

type PortalFixture = {
  portalPage: PortalPage;
};

/**
 * Extensão do test base do Playwright
 * Fornece portalPage pronto para uso
 */
export const test = base.extend<PortalFixture>({
  portalPage: async ({ page }, use) => {
    // Navega para a página inicial
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    
    // Aguarda o DOM estar pronto (mais confiável que networkidle)
    // networkidle pode falhar em páginas com requisições contínuas (analytics, websockets, etc.)
    try {
      // Tenta aguardar networkidle com timeout menor
      await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
        // Se falhar, aguarda apenas o load state básico
        console.log('⚠️ networkidle não alcançado, usando load state básico');
      });
    } catch {
      // Se ainda falhar, aguarda apenas domcontentloaded (já garantido pelo goto)
      await page.waitForLoadState('load', { timeout: 5000 }).catch(() => {
        // Último recurso: aguarda um tempo fixo curto
        console.log('⚠️ Usando timeout fixo como fallback');
      });
    }

    // Cria instância do PortalPage
    const portalPage = new PortalPage(page);

    // Fornece para o teste
    await use(portalPage);

    // Cleanup após o teste (se necessário)
    // Por exemplo: limpar dados de teste, etc.
  },
});

// Exporta expect também para manter compatibilidade
export { expect };
