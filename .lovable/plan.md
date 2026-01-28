
# Plano: Adicionar Link do WhatsApp em Todos os Botões

## Resumo
Vou adicionar o link do WhatsApp (`https://wa.me/5551926340030?text=Oi%20%F0%9F%91%8B%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20franquia%20de%20IA!`) em todos os botões CTA do site, fazendo com que ao clicar, o usuário seja redirecionado para iniciar uma conversa no WhatsApp.

---

## Botões Identificados

### 1. Navbar (`src/components/Navbar.tsx`)
- **Botão Desktop:** "Quero ser Licenciado" (linha 57)
- **Botão Mobile:** "Quero ser Licenciado" (linha 94)

### 2. HeroSection (`src/components/HeroSection.tsx`)
- **Botão Principal:** "Quero ser um Licenciado" (linha 92-98)
- **Botão Secundário:** "Saiba Mais" (linha 99-105)

### 3. SimulatorSection (`src/components/SimulatorSection.tsx`)
- **Botão CTA:** "Começar Agora" (linha 179-182)

### 4. ProductsSection (`src/components/ProductsSection.tsx`)
- **Botões de Produto:** "Saiba mais" em cada card (linha 81-87)

---

## Implementacao Tecnica

Para cada botão, vou:
1. Usar o componente `Button` com a prop `asChild`
2. Envolver com uma tag `<a>` com o link do WhatsApp
3. Adicionar `target="_blank"` e `rel="noopener noreferrer"` para abrir em nova aba

### Exemplo de transformacao:

**Antes:**
```tsx
<Button className="...">
  Quero ser Licenciado
</Button>
```

**Depois:**
```tsx
<Button asChild className="...">
  <a 
    href="https://wa.me/5551926340030?text=Oi%20%F0%9F%91%8B%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20franquia%20de%20IA!" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Quero ser Licenciado
  </a>
</Button>
```

---

## Arquivos a Modificar

| Arquivo | Quantidade de Botoes |
|---------|---------------------|
| `src/components/Navbar.tsx` | 2 botoes |
| `src/components/HeroSection.tsx` | 2 botoes |
| `src/components/SimulatorSection.tsx` | 1 botao |
| `src/components/ProductsSection.tsx` | 4 botoes (1 por produto) |

**Total:** 9 botoes serao atualizados

---

## Resultado Esperado
Todos os botões CTA do site redirecionarão o usuário para o WhatsApp com uma mensagem pré-definida, facilitando o contato direto com a equipe de vendas.
