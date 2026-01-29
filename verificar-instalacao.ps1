# Script de verificação da instalação do Playwright
Write-Host "=== Verificação da Instalação do Playwright ===" -ForegroundColor Cyan
Write-Host ""

# Verifica se node_modules existe
Write-Host "1. Verificando node_modules..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "   ✓ node_modules encontrado" -ForegroundColor Green
} else {
    Write-Host "   ✗ node_modules NÃO encontrado - Execute: npm install" -ForegroundColor Red
    exit 1
}

# Verifica se @playwright/test está instalado
Write-Host "2. Verificando @playwright/test..." -ForegroundColor Yellow
if (Test-Path "node_modules/@playwright/test") {
    Write-Host "   ✓ @playwright/test encontrado" -ForegroundColor Green
} else {
    Write-Host "   ✗ @playwright/test NÃO encontrado - Execute: npm install" -ForegroundColor Red
    exit 1
}

# Verifica se playwright está instalado
Write-Host "3. Verificando playwright CLI..." -ForegroundColor Yellow
try {
    $version = npx playwright --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   ✓ Playwright instalado: $version" -ForegroundColor Green
    } else {
        Write-Host "   ✗ Playwright CLI não encontrado" -ForegroundColor Red
        Write-Host "   Execute: npx playwright install" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ✗ Erro ao verificar Playwright CLI" -ForegroundColor Red
}

# Verifica TypeScript
Write-Host "4. Verificando TypeScript..." -ForegroundColor Yellow
try {
    $tsVersion = npx tsc --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   ✓ TypeScript instalado: $tsVersion" -ForegroundColor Green
    } else {
        Write-Host "   ✗ TypeScript não encontrado" -ForegroundColor Red
    }
} catch {
    Write-Host "   ✗ Erro ao verificar TypeScript" -ForegroundColor Red
}

# Verifica arquivos de configuração
Write-Host "5. Verificando arquivos de configuração..." -ForegroundColor Yellow
$files = @("package.json", "tsconfig.json", "playwright.config.ts")
foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "   ✓ $file encontrado" -ForegroundColor Green
    } else {
        Write-Host "   ✗ $file NÃO encontrado" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=== Verificação Concluída ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para executar os testes:" -ForegroundColor Yellow
Write-Host "  npm run test:ui" -ForegroundColor White
