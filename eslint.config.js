import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import withNuxt from './.nuxt/eslint.config.mjs';
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt([
    { files: ['**/*.{js,mjs,cjs,ts,vue}'], ignores: ['.nuxt/**/*', 'node_modules/**/*'] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    stylistic.configs.customize({
        indent: 4,
        commaDangle: 'always-multiline',
        quotes: 'single',
        semi: true,
        braceStyle: '1tbs',
        quoteProps: 'consistent-as-needed',
        arrowParens: true,
        blockSpacing: true,
    }),
    {
        files: ['**/*.vue'],
        languageOptions: { parserOptions: { parser: tseslint.parser } },
        rules: {
            'vue/script-indent': ['error', 4, {
                baseIndent: 1,
            }],
            'vue/html-indent': ['error', 4],
            'vue/multi-word-component-names': 'off',
            '@stylistic/indent': 'off',
        },
    },
]);
