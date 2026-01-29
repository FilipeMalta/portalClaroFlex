import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * HomePage - Validações dos planos de telefonia
 * 
 * Métodos:
 * - verificarComposicaoPlano{GB}() → Valida todos os elementos do plano
 * - apresentarPlano{GB}() → Tour visual para evidência em vídeo
 */
export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate(): Promise<void> {
    await this.goto('/');
    await this.waitForLoadState();
  }

  async verificarComposicaoPlano25G(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: '25GB' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '15GB do plano + 5GB de bônus' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Apps inclusos no bônus para' }).first()).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Chat GPT' }).first()).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Tick Tok' }).first()).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Facebook' }).first()).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'YouTube' }).first()).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Instagram' }).first()).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Twitter' }).first()).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Waze' }).first()).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Serviços ilimitados' }).first()).toBeVisible();
    await expect(this.page.locator('.mdn-Icon-whatsapp').first()).toBeVisible();
    await expect(this.page.getByText('Ligações Claro para Claro').first()).toBeVisible();
    await expect(this.page.getByText('Ligações outras operadoras').first()).toBeVisible();
    await expect(this.page.getByText('SMS nacional Claro para Claro').first()).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Assinatura inclusa' }).first()).toBeVisible();
    await expect(this.page.getByText('VIRAFLEX15').first()).toBeVisible();
    await expect(this.page.getByText('De: R$ 44,90').first()).toBeVisible();
    await expect(this.page.getByText('Por: R$ 29,90').first()).toBeVisible();
    await expect(this.page.getByText('no primeiro mês').nth(1)).toBeVisible();
  }

  /**
   * Valida a composição completa do plano 30GB
   */
  async verificarComposicaoPlano30G(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: '30GB', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '20GB do plano + 5GB de bônus' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Apps inclusos no bônus para' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Chat GPT' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Tick Tok' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Facebook' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Youtube' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Instagram' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Twitter' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Waze' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'App Ilimitado' }).nth(1)).toBeVisible();
    await expect(this.page.getByText('Whatsapp sem descontar da sua').nth(1)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Serviços ilimitados' }).nth(1)).toBeVisible();
    await expect(this.page.getByText('Ligações Claro para Claro').nth(1)).toBeVisible();
    await expect(this.page.getByText('Ligações outras operadoras').nth(1)).toBeVisible();
    await expect(this.page.getByText('SMS nacional Claro para Claro').nth(1)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Assinatura inclusa' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Skeelo' }).nth(1)).toBeVisible();
    await expect(this.page.getByText('VIRAFLEX15').nth(1)).toBeVisible();
    await expect(this.page.getByText('DESCONTO DE 15 REAIS NO').nth(1)).toBeVisible();
    await expect(this.page.getByText('De: R$ 59,90')).toBeVisible();
    await expect(this.page.getByText('Por: R$ 44,90')).toBeVisible();
    await expect(this.page.getByText('no primeiro mês').nth(3)).toBeVisible();
  }

  /**
   * Valida a composição completa do plano 40GB
   */
  async verificarComposicaoPlano40G(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: '40GB', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '30GB do plano + 5GB de bônus' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Apps inclusos no bônus para' }).nth(2)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Chat GPT' }).nth(2)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Free Fire' })).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Tick Tok' }).nth(2)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Facebook' }).nth(2)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Youtube' }).nth(2)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Instagram' }).nth(2)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Twitter' }).nth(2)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Waze' }).nth(2)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'App Ilimitado' }).nth(2)).toBeVisible();
    await expect(this.page.getByText('Whatsapp sem descontar da sua').nth(2)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Serviços ilimitados' }).nth(2)).toBeVisible();
    await expect(this.page.getByText('Ligações Claro para Claro').nth(2)).toBeVisible();
    await expect(this.page.getByText('Ligações outras operadoras').nth(2)).toBeVisible();
    await expect(this.page.getByText('SMS nacional Claro para Claro').nth(2)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Assinatura inclusa' }).nth(2)).toBeVisible();
    await expect(this.page.getByText('Claro música').first()).toBeVisible();
    await expect(this.page.getByText('VIRAFLEX15').nth(2)).toBeVisible();
    await expect(this.page.getByText('DESCONTO DE 15 REAIS NO').nth(2)).toBeVisible();
    await expect(this.page.getByText('De: R$ 69,90')).toBeVisible();
    await expect(this.page.getByText('Por: R$ 54,90')).toBeVisible();
    await expect(this.page.getByText('no primeiro mês').nth(5)).toBeVisible();
  }



  /**
   * Valida a composição completa do plano 70GB PASSAPORTE
   */
  async verificarComposicaoPlano70G(): Promise<void> {
    await expect(this.page.getByText('PASSAPORTE')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '70GB' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '40GB do plano + 10GB de bônus' })).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Título' }).first()).toBeVisible();
    await expect(this.page.getByText('Mais de 40 países das Amé')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Apps inclusos no bônus para' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Chat GPT' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Tick Tok' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Facebook' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Youtube' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Instagram' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Twitter' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Waze' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'App Ilimitado' }).nth(3)).toBeVisible();
    await expect(this.page.getByText('Whatsapp sem descontar da sua').nth(3)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Serviços ilimitados' }).nth(3)).toBeVisible();
    await expect(this.page.getByText('Ligações Claro para Claro').nth(3)).toBeVisible();
    await expect(this.page.getByText('Ligações outras operadoras').nth(3)).toBeVisible();
    await expect(this.page.getByText('SMS nacional Claro para Claro').nth(3)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Assinatura inclusa' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'music' }).nth(1)).toBeVisible();
    await expect(this.page.getByText('Claro música').nth(1)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Skeelo' }).nth(3)).toBeVisible();
    await expect(this.page.getByText('Skeelo').nth(3)).toBeVisible();
    await expect(this.page.getByText('VIRAFLEX20')).toBeVisible();
    await expect(this.page.getByText('DESCONTO DE 20 REAIS NO')).toBeVisible();
    await expect(this.page.getByText('De: R$ 119,90')).toBeVisible();
    await expect(this.page.getByText('Por: R$ 99,90')).toBeVisible();
    await expect(this.page.getByText('no primeiro mês', { exact: true }).nth(3)).toBeVisible();
  }




  async apresentarPlano25GB(): Promise<void> {
    const card = this.page.getByRole('heading', { name: '25GB' }).first();
    await card.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
    await card.evaluate((el: any) => {
      el.style.border = '4px solid red';
      el.style.backgroundColor = 'rgba(255,0,0,0.05)';
    });
    await this.page.waitForTimeout(1500);

    const elementos = [
      { locator: this.page.getByRole('heading', { name: '15GB do plano + 5GB de bônus' }), nome: 'Gigas' },
      { locator: this.page.getByRole('heading', { name: 'Apps inclusos no bônus para' }).first(), nome: 'Apps' },
      { locator: this.page.locator('.mdn-Icon-whatsapp').first(), nome: 'WhatsApp' },
      { locator: this.page.getByText('VIRAFLEX15').first(), nome: 'Cupom' },
      { locator: this.page.getByText('Por: R$ 29,90').first(), nome: 'Preço' },
    ];

    for (const { locator } of elementos) {
      await locator.scrollIntoViewIfNeeded();
      await locator.evaluate((e: any) => {
        e.style.border = '3px solid blue';
        e.style.backgroundColor = 'rgba(0,0,255,0.08)';
      });
      await this.page.waitForTimeout(1200);
    }
  }

  async apresentarPlano30GB(): Promise<void> {
    const card = this.page.getByRole('heading', { name: '30GB' }).first();
    await card.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
    await card.evaluate((el: any) => {
      el.style.border = '4px solid red';
      el.style.backgroundColor = 'rgba(255,0,0,0.05)';
    });
    await this.page.waitForTimeout(1500);
  }

  async apresentarPlano40GB(): Promise<void> {
    const card = this.page.getByRole('heading', { name: '40GB' }).first();
    await card.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
    await card.evaluate((el: any) => {
      el.style.border = '4px solid red';
      el.style.backgroundColor = 'rgba(255,0,0,0.05)';
    });
    await this.page.waitForTimeout(1500);
  }

  async apresentarPlano70GB(): Promise<void> {
    const card = this.page.getByRole('heading', { name: '70GB' }).first();
    await card.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
    await card.evaluate((el: any) => {
      el.style.border = '4px solid red';
      el.style.backgroundColor = 'rgba(255,0,0,0.05)';
    });
    await this.page.waitForTimeout(1500);
  }
}
