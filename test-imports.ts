/**
 * Arquivo de teste para verificar se os imports estão funcionando
 * Execute: npx ts-node test-imports.ts
 * Ou simplesmente verifique se há erros no IDE
 */

// Teste de import do Playwright
import { test, expect, Page } from '@playwright/test';

// Teste de import dos Page Objects
import { BasePage } from './pages/BasePage';
import { HomePage } from './pages/HomePage';

console.log('✅ Todos os imports estão funcionando corretamente!');
console.log('✅ Playwright:', typeof test !== 'undefined' ? 'OK' : 'ERRO');
console.log('✅ BasePage:', typeof BasePage !== 'undefined' ? 'OK' : 'ERRO');
console.log('✅ HomePage:', typeof HomePage !== 'undefined' ? 'OK' : 'ERRO');
