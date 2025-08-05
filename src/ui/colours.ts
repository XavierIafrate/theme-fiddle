
interface IColourPalette {
    '50' : string;
    '100' : string;
    '200' : string;
    '300' : string;
    '400' : string;
    '500' : string;
    '600' : string;
    '700' : string;
    '800' : string;
    '900' : string;
    '950' : string;
}

interface ISemanticColourPalette {
    'normal' : string;
    'light' : string;
    'dark' : string;
}

class Colours {
    static Blue : IColourPalette = {
        '50': '#eef9ff',
        '100': '#daf1ff',
        '200': '#bde7ff',
        '300': '#90d9ff',
        '400': '#5bc1ff',
        '500': '#35a4fc',
        '600': '#1f86f1',
        '700': '#1873e7',
        '800': '#195ab4',
        '900': '#1b4c8d',
        '950': '#153056',
    }

    static Yellow : IColourPalette = {
        '50': '#fefce8',
        '100': '#fef9c3',
        '200': '#fef08a',
        '300': '#fde047',
        '400': '#facc15',
        '500': '#eab308',
        '600': '#ca8a04',
        '700': '#a16207',
        '800': '#854d0e',
        '900': '#713f12',
        '950': '#422006',
    }

    static Grey : IColourPalette = {
        '50': '#f8fafc',
        '100': '#f1f5f9',
        '200': '#e2e8f0',
        '300': '#cbd5e1',
        '400': '#94a3b8',
        '500': '#64748b',
        '600': '#475569',
        '700': '#334155',
        '800': '#1e293b',
        '900': '#0f172a',
        '950': '#020617',
    }

    static Red : IColourPalette = {
        '50': '#fff1f2',
        '100': '#ffe4e6',
        '200': '#fecdd3',
        '300': '#fda4af',
        '400': '#fb7185',
        '500': '#f43f5e',
        '600': '#e11d48',
        '700': '#be123c',
        '800': '#9f1239',
        '900': '#881337',
        '950': '#4c0519',
    }

    static Purple : IColourPalette = {
        '50': '#faf5ff',
        '100': '#f3e8ff',
        '200': '#e9d5ff',
        '300': '#d8b4fe',
        '400': '#c084fc',
        '500': '#a855f7',
        '600': '#9333ea',
        '700': '#7e22ce',
        '800': '#6b21a8',
        '900': '#581c87',
        '950': '#3b0764',
    }

    static Green : IColourPalette = {
        '50': '#f0fdf4',
        '100': '#dcfce7',
        '200': '#bbf7d0',
        '300': '#86efac',
        '400': '#4ade80',
        '500': '#22c55e',
        '600': '#16a34a',
        '700': '#15803d',
        '800': '#166534',
        '900': '#14532d',
        '950': '#052e16',
    }

    static Orange : IColourPalette = {
        '50': '#fff7ed',
        '100': '#ffedd5',
        '200': '#fed7aa',
        '300': '#fdba74',
        '400': '#fb923c',
        '500': '#f97316',
        '600': '#ea580c',
        '700': '#c2410c',
        '800': '#9a3412',
        '900': '#7c2d12',
        '950': '#431407',
    }
}

export { Colours, IColourPalette, ISemanticColourPalette }