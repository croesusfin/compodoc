export const COMPODOC_DEFAULTS = {
    title: 'Application documentation',
    additionalEntryName: 'Additional documentation',
    additionalEntryPath: 'additional-documentation',
    folder: './documentation/',
    hostname: '127.0.0.1',
    port: 8080,
    theme: 'gitbook',
    exportFormat: 'html',
    exportFormatsSupported: ['html', 'json', 'pdf'],
    base: '/',
    defaultCoverageThreshold: 70,
    defaultCoverageMinimumPerFile: 0,
    coverageTestThresholdFail: true,
    toggleMenuItems: ['all'],
    navTabConfig: [],
    disableSourceCode: false,
    disableDomTree: false,
    disableTemplateTab: false,
    disableStyleTab: false,
    disableGraph: false,
    disableMainGraph: false,
    disableCoverage: false,
    disablePrivate: false,
    disableProtected: false,
    disableInternal: false,
    disableLifeCycleHooks: false,
    disableRoutesGraph: false,
    disableDependencies: false,
    disableProperties: false,
    PAGE_TYPES: {
        ROOT: 'root',
        INTERNAL: 'internal'
    },
    gaSite: 'auto',
    coverageTestShowOnlyFailed: false,
    language: 'en-US',
    maxSearchResults: 15
};
