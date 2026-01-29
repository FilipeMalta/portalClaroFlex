/**
 * Testes de Validação dos Planos de Telefonia
 * Execute: npm test
 */

import { test, expect } from '../Fixtures/PortalFixture';
import { HomePage } from '../pages/HomePage';

test.describe('Portal Claro Flex - Validação de Planos', () => {
  test('Deve validar a composição completa de todos os planos', async ({ portalPage }) => {
    const homePage = new HomePage(portalPage.page);

    await test.step('📋 Carregar página inicial', async () => {
      await portalPage.navegarParaHome();
      await portalPage.waitForLoadState();
      await portalPage.tirarScreenshot('01-home-carregada');
    });

    await test.step('✅ Validar carregamento da página', async () => {
      await portalPage.validarTelaHome();
      await expect(portalPage.page).toHaveURL(/flex\.claro\.com\.br/);
    });

    // Validação do plano 25GB
    await test.step('✅ Validar composição do plano 25GB', async () => {
      await homePage.verificarComposicaoPlano25G();
      await portalPage.tirarScreenshotComScroll(
        portalPage.page.getByRole('heading', { name: '25GB' }).first(),
        'plano-25gb-validado'
      );
    });

    await test.step('✅ Validar composição do plano 30GB', async () => {
      await homePage.verificarComposicaoPlano30G();
      await portalPage.tirarScreenshotComScroll(
        portalPage.page.getByRole('heading', { name: '30GB' }).first(),
        'plano-30gb-validado'
      );
    });

    await test.step('✅ Validar composição do plano 40GB', async () => {
      await homePage.verificarComposicaoPlano40G();
      await portalPage.tirarScreenshotComScroll(
        portalPage.page.getByRole('heading', { name: '40GB' }).first(),
        'plano-40gb-validado'
      );
    });

    await test.step('✅ Validar composição do plano 70GB (PASSAPORTE)', async () => {
      await homePage.verificarComposicaoPlano70G();
      await portalPage.tirarScreenshotComScroll(
        portalPage.page.getByText('PASSAPORTE'),
        'plano-70gb-passaporte-validado'
      );
    });
  });

  test('Deve navegar para a página inicial e validar carregamento', async ({ portalPage }) => {
    await test.step('📋 Navegar para página inicial', async () => {
      await portalPage.navegarParaHome();
      await portalPage.tirarScreenshot('01-home-carregada');
    });

    await test.step('✅ Validar tela inicial', async () => {
      await portalPage.validarTelaHome();
      await expect(portalPage.page).toHaveURL(/flex\.claro\.com\.br/);
    });
  });

  test('Deve capturar cards individuais dos planos', async ({ portalPage }) => {
    const homePage = new HomePage(portalPage.page);

    await test.step('📋 Carregar página inicial', async () => {
      await portalPage.navegarParaHome();
      await portalPage.waitForLoadState();
    });

    await test.step('📸 Capturar card do plano 25GB', async () => {
      await homePage.verificarComposicaoPlano25G();
      await portalPage.capturarCardPlano(
        '25GB15GB do plano + 5GB de bô',
        'card-plano-25gb'
      );
    });

    await test.step('📸 Capturar card do plano 30GB', async () => {
      await homePage.verificarComposicaoPlano30G();
      await portalPage.capturarCardPlano(
        '30GB20GB do plano + 5GB de bô',
        'card-plano-30gb'
      );
    });

    await test.step('📸 Capturar card do plano 40GB', async () => {
      await homePage.verificarComposicaoPlano40G();
      await portalPage.capturarCardPlano(
        '40GB30GB do plano + 5GB de bô',
        'card-plano-40gb'
      );
    });

    await test.step('📸 Capturar card do plano 70GB PASSAPORTE', async () => {
      await homePage.verificarComposicaoPlano70G();
      await portalPage.capturarCardPlano(
        'PASSAPORTE70GB40GB do plano',
        'card-plano-70gb-passaporte'
      );
    });
  });
});

