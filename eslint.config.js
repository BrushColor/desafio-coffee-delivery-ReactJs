import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactNativePlugin from 'eslint-plugin-react-native';
import nodePlugin from 'eslint-plugin-node';
import prettierPlugin from 'eslint-plugin-prettier';
import securityPlugin from 'eslint-plugin-security';

export default {
  languageOptions: {
    parser: tsParser, // Usando o parser do TypeScript
    ecmaVersion: 2021, // Versão do ECMAScript
    sourceType: 'module', // Usando módulos ES
    globals: {
      window: 'readonly', // Global 'window' como somente leitura
      document: 'readonly', // Global 'document' como somente leitura
      navigator: 'readonly', // Global 'navigator' como somente leitura
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin, // Plugin do TypeScript
    react: reactPlugin, // Plugin do React
    'react-hooks': reactHooksPlugin, // Plugin de hooks do React
    'react-native': reactNativePlugin, // Plugin do React Native
    node: nodePlugin, // Plugin do Node.js
    prettier: prettierPlugin, // Plugin do Prettier
    security: securityPlugin, // Plugin de segurança
  },
  ignores: ['node_modules', 'dist', 'build', '*.test.tsx'], // Arquivos/pastas para ignorar
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // Usar aspas simples
        trailingComma: 'all', // Colocar vírgula no final de objetos, arrays, etc.
        printWidth: 80, // Limite de largura de linha
        bracketSpacing: true, // Espaçamento entre os colchetes
        endOfLine: 'lf', // Fim de linha como 'lf' (quebra de linha padrão)
        tabWidth: 2, // Largura da tabulação
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off', // Desabilita a exigência de tipo de retorno explícito
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Desabilita a exigência de tipos explícitos nas funções de módulos
    '@typescript-eslint/no-explicit-any': 'warn', // Aviso para o uso de 'any'
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Erro para variáveis não usadas, exceto quando começam com '_'
    'react/prop-types': 'off', // Desabilitar verificação de prop-types no React, pois estamos usando TypeScript
    'react/react-in-jsx-scope': 'off', // Desabilitar a necessidade de importar o React no escopo (com React 17+)
    'react-native/no-inline-styles': 'warn', // Aviso sobre o uso de estilos inline no React Native
    'react-native/no-unused-styles': 'warn', // Aviso sobre estilos não utilizados no React Native
    'react-native/no-raw-text': 'off', // Desabilitar verificação para textos brutos no React Native
    'react-native/sort-styles': 'off', // Desabilitar ordenação de estilos no React Native
    'node/no-unsupported-features/es-syntax': 'off', // Desabilitar verificação de sintaxe ES não suportada no Node.js
    'node/no-missing-import': 'off', // Desabilitar erro sobre importações ausentes no Node.js
    'security/detect-object-injection': 'warn', // Aviso sobre possíveis injeções de objetos inseguros
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Aviso para uso de console em produção
    'no-unused-vars': 'off', // Desabilitar a regra do ESLint padrão, já que estamos usando a do TypeScript
    eqeqeq: ['error', 'always'], // Exigir comparação estrita (===)
    'no-magic-numbers': [
      'warn',
      { ignoreArrayIndexes: true, ignore: [-1, 0, 1] }, // Aviso sobre números mágicos, exceto para alguns casos
    ],
    'no-implicit-coercion': 'error', // Erro para coerções implícitas
    'consistent-return': 'error', // Erro se funções não retornam consistentemente
    'prefer-const': 'warn', // Aviso para usar 'const' sempre que possível
    'space-before-function-paren': 'off', // Desabilitar a regra para evitar conflito com o Prettier
  },
};
