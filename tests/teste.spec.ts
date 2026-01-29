/**
 * ============================================================================
 * TESTES PARA MAPEAMENTO DE ELEMENTOS
 * ============================================================================
 * 
 * ESTE ARQUIVO É PARA MAPEAMENTO INICIAL DE ELEMENTOS
 * 
 * OBJETIVO:
 * Facilitar o mapeamento inicial de elementos usando as ferramentas do Playwright.
 * 
 * QUANDO USAR:
 * - No início do projeto, quando ainda não há elementos mapeados
 * - Para mapear novos elementos usando "Pick locator"
 * - Para testar seletores antes de adicionar aos Page Objects
 * 
 * FERRAMENTAS DISPONÍVEIS:
 * 1. Pick locator: Identifica e copia seletores de elementos
 * 2. Record new: Grava interações automaticamente
 * 3. Record at cursor: Grava a partir de um ponto específico no código
 * 
 * ⚠️ IMPORTANTE:
 * - Este arquivo usa o padrão antigo (sem PortalFixture) para facilitar debug
 * - Após mapear os elementos, migre para usar PortalFixture (ver portal.spec.ts)
 * - Este arquivo pode ser removido após mapeamento completo
 * 
 * COMO USAR:
 * 1. Execute: npm run test:ui
 * 2. Clique em "Pick locator" na barra lateral
 * 3. Clique nos elementos da página para copiar seletores
 * 4. Cole os seletores nos Page Objects (PortalPage.ts ou HomePage.ts)
 * ============================================================================
 */

import { test, expect } from '@playwright/test';
import { PortalPage } from '../pages/PortalPage';

/**
 * Grupo de testes para mapeamento
 */
test.describe('Mapeamento - Portal Claro Flex', () => {
  // Variável compartilhada entre os testes deste grupo
  let portalPage: PortalPage;

  /**
   * Hook executado ANTES de cada teste
   * Cria uma nova instância do PortalPage para cada teste
   */
  test.beforeEach(async ({ page }) => {
    // Cria instância do PortalPage para este teste
    portalPage = new PortalPage(page);
  });

  /**
   * Teste: Mapeamento de Elementos da Página Inicial
   * 
   * OBJETIVO:
   * Abrir a página e aguardar para que você possa mapear elementos usando
   * as ferramentas do Playwright.
   * 
   * COMO USAR:
   * 1. Execute este teste em modo UI: npm run test:ui
   * 2. Quando o navegador abrir, clique em "Pick locator" na barra lateral
   * 3. Clique nos elementos da página que deseja mapear
   * 4. O seletor será copiado automaticamente
   * 5. Cole o seletor no arquivo apropriado (PortalPage.ts ou HomePage.ts)
   * 
   * DICA:
   * - O teste aguarda 5 segundos para dar tempo de mapear
   * - Você pode aumentar esse tempo se necessário
   * - Remova o waitForTimeout após mapear todos os elementos
   */
  test('mapear elementos da página inicial', async ({ page }) => {
    // Etapa 1: Navegação
    await test.step('📋 Navegar para página inicial', async () => {
      // Navega para a home usando o método do PortalPage
      await portalPage.navegarParaHome();
      // Aguarda carregamento completo antes de começar a mapear
      await portalPage.waitForLoadState();
    });

    // Etapa 2: Mapeamento
    // Este é o momento para usar as ferramentas do Playwright
    await test.step('🗺️ Mapear elementos com Pick locator', async () => {
      // INSTRUÇÕES PARA MAPEAMENTO:
      // 
      // 1. Na interface do Playwright UI, clique no ícone "Pick locator"
      //    (ícone de cursor com mira na barra lateral)
      // 
      // 2. Clique nos elementos da página que deseja mapear
      //    O seletor será copiado automaticamente para a área de transferência
      // 
      // 3. Cole os seletores no arquivo apropriado:
      //    - PortalPage.ts: Para elementos gerais do portal
      //    - HomePage.ts: Para elementos específicos da home
      // 
      // 4. Organize os seletores como propriedades readonly na classe
      // 
      // EXEMPLO:
      // readonly botaoLogin: Locator;
      // this.botaoLogin = page.getByRole('button', { name: 'Entrar' });
      
      // Validação básica: verifica se a página carregou
      await expect(page).toHaveURL(/flex\.claro\.com\.br/);
      
      // ⏱️ TIMEOUT PARA MAPEAMENTO MANUAL
      // Este timeout dá tempo para você mapear os elementos
      // Aumente o valor (em milissegundos) se precisar de mais tempo
      // REMOVA esta linha após mapear todos os elementos necessários
      await page.waitForTimeout(5000);
    });
  });

  /**
   * Teste: Navegação Básica
   * 
   * OBJETIVO:
   * Teste simples para verificar se a navegação básica funciona.
   * 
   * QUANDO USAR:
   * - Para verificar se a configuração básica está funcionando
   * - Como teste de smoke (verificação rápida)
   * - Para validar que a URL está correta após navegação
   */
  test('teste básico de navegação', async ({ page }) => {
    await test.step('📋 Navegar e validar', async () => {
      // Navega para a home
      await portalPage.navegarParaHome();
      // Valida se a URL está correta
      // O regex /flex\.claro\.com\.br/ verifica se a URL contém esse domínio
      await expect(page).toHaveURL(/flex\.claro\.com\.br/);
    });
  });
});
