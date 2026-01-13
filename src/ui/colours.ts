
interface IColourPalette {
    '50': string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    '800': string;
    '900': string;
    '950': string;
}

interface ISemanticColourPalette {
    'normal': string;
    'light': string;
    'dark': string;
}

enum ColourBlindnessType {
    Normal = 'normal',
    Protanopia = 'protanopia',      // Red-blind (no red cones)
    Deuteranopia = 'deuteranopia',  // Green-blind (no green cones)
    Tritanopia = 'tritanopia',      // Blue-blind (no blue cones)
    Achromatopsia = 'achromatopsia' // Total colour blindness
}

class Colours {
    static Blue: IColourPalette = {
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

    static Yellow: IColourPalette = {
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

    static Grey: IColourPalette = {
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

    static Red: IColourPalette = {
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

    static Purple: IColourPalette = {
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

    static Green: IColourPalette = {
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

    static Orange: IColourPalette = {
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

    // Protanopia (Red-blind) friendly alternatives
    // Uses blue-yellow axis, avoids red-green distinctions
    static ProtanopiaBlue: IColourPalette = {
        '50': '#e8f4f8',
        '100': '#d0e9f1',
        '200': '#a1d3e3',
        '300': '#72bdd5',
        '400': '#43a7c7',
        '500': '#1491b9',
        '600': '#107494',
        '700': '#0c576f',
        '800': '#083a4a',
        '900': '#041d25',
        '950': '#020e12',
    }

    static ProtanopiaYellow: IColourPalette = {
        '50': '#fffef0',
        '100': '#fffde1',
        '200': '#fffbc3',
        '300': '#fff9a5',
        '400': '#fff787',
        '500': '#fff569',
        '600': '#ccc454',
        '700': '#99933f',
        '800': '#66622a',
        '900': '#333115',
        '950': '#19180a',
    }

    static ProtanopiaCyan: IColourPalette = {
        '50': '#ecfeff',
        '100': '#cffafe',
        '200': '#a5f3fc',
        '300': '#67e8f9',
        '400': '#22d3ee',
        '500': '#06b6d4',
        '600': '#0891b2',
        '700': '#0e7490',
        '800': '#155e75',
        '900': '#164e63',
        '950': '#083344',
    }

    // Deuteranopia (Green-blind) friendly alternatives
    // Similar to Protanopia, uses blue-yellow axis
    static DeuteranopiaBrown: IColourPalette = {
        '50': '#fdf8f3',
        '100': '#faf1e7',
        '200': '#f5e3cf',
        '300': '#f0d5b7',
        '400': '#ebc79f',
        '500': '#e6b987',
        '600': '#b8946c',
        '700': '#8a6f51',
        '800': '#5c4a36',
        '900': '#2e251b',
        '950': '#17120d',
    }

    static DeuteranopiaBlue: IColourPalette = {
        '50': '#eff6ff',
        '100': '#dbeafe',
        '200': '#bfdbfe',
        '300': '#93c5fd',
        '400': '#60a5fa',
        '500': '#3b82f6',
        '600': '#2563eb',
        '700': '#1d4ed8',
        '800': '#1e40af',
        '900': '#1e3a8a',
        '950': '#172554',
    }

    static DeuteranopiaGold: IColourPalette = {
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fde68a',
        '300': '#fcd34d',
        '400': '#fbbf24',
        '500': '#f59e0b',
        '600': '#d97706',
        '700': '#b45309',
        '800': '#92400e',
        '900': '#78350f',
        '950': '#451a03',
    }

    // Tritanopia (Blue-blind) friendly alternatives
    // Uses red-green axis, avoids blue-yellow distinctions
    static TritanopiaRed: IColourPalette = {
        '50': '#fef2f2',
        '100': '#fee2e2',
        '200': '#fecaca',
        '300': '#fca5a5',
        '400': '#f87171',
        '500': '#ef4444',
        '600': '#dc2626',
        '700': '#b91c1c',
        '800': '#991b1b',
        '900': '#7f1d1d',
        '950': '#450a0a',
    }

    static TritanopiaTeal: IColourPalette = {
        '50': '#f0fdfa',
        '100': '#ccfbf1',
        '200': '#99f6e4',
        '300': '#5eead4',
        '400': '#2dd4bf',
        '500': '#14b8a6',
        '600': '#0d9488',
        '700': '#0f766e',
        '800': '#115e59',
        '900': '#134e4a',
        '950': '#042f2e',
    }

    static TritanopiaPink: IColourPalette = {
        '50': '#fdf2f8',
        '100': '#fce7f3',
        '200': '#fbcfe8',
        '300': '#f9a8d4',
        '400': '#f472b6',
        '500': '#ec4899',
        '600': '#db2777',
        '700': '#be185d',
        '800': '#9d174d',
        '900': '#831843',
        '950': '#500724',
    }

    // Achromatopsia (Total colour blindness) - Grayscale only
    static AchromatopsiaLight: IColourPalette = {
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#e5e5e5',
        '300': '#d4d4d4',
        '400': '#a3a3a3',
        '500': '#737373',
        '600': '#525252',
        '700': '#404040',
        '800': '#262626',
        '900': '#171717',
        '950': '#0a0a0a',
    }

    static AchromatopsiaMedium: IColourPalette = {
        '50': '#f9fafb',
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827',
        '950': '#030712',
    }

    static AchromatopsiaDark: IColourPalette = {
        '50': '#fafafa',
        '100': '#f4f4f5',
        '200': '#e4e4e7',
        '300': '#d4d4d8',
        '400': '#a1a1aa',
        '500': '#71717a',
        '600': '#52525b',
        '700': '#3f3f46',
        '800': '#27272a',
        '900': '#18181b',
        '950': '#09090b',
    }

    /**
     * Get appropriate colour palette based on colour blindness type
     * @param type The type of colour blindness
     * @param colourName The base colour category (e.g., 'primary', 'success', 'warning')
     * @returns The appropriate colour palette
     */
    static getAccessiblePalette(
        type: ColourBlindnessType,
        colourName: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral'
    ): IColourPalette {
        switch (type) {
            case ColourBlindnessType.Protanopia:
            case ColourBlindnessType.Deuteranopia:
                // Both red-green colour blindness types use similar palettes
                switch (colourName) {
                    case 'primary': return this.ProtanopiaBlue;
                    case 'secondary': return this.ProtanopiaCyan;
                    case 'accent': return this.ProtanopiaYellow;
                    case 'success': return this.ProtanopiaBlue;
                    case 'warning': return this.ProtanopiaYellow;
                    case 'error': return this.DeuteranopiaBrown;
                    case 'neutral': return this.Grey;
                }
                break;

            case ColourBlindnessType.Tritanopia:
                // Blue-yellow colour blindness
                switch (colourName) {
                    case 'primary': return this.TritanopiaRed;
                    case 'secondary': return this.TritanopiaTeal;
                    case 'accent': return this.TritanopiaPink;
                    case 'success': return this.TritanopiaTeal;
                    case 'warning': return this.Orange;
                    case 'error': return this.TritanopiaRed;
                    case 'neutral': return this.Grey;
                }
                break;

            case ColourBlindnessType.Achromatopsia:
                // Total colour blindness - grayscale only
                switch (colourName) {
                    case 'primary': return this.AchromatopsiaLight;
                    case 'secondary': return this.AchromatopsiaMedium;
                    case 'accent': return this.AchromatopsiaDark;
                    case 'success': return this.AchromatopsiaLight;
                    case 'warning': return this.AchromatopsiaMedium;
                    case 'error': return this.AchromatopsiaDark;
                    case 'neutral': return this.Grey;
                }
                break;

            case ColourBlindnessType.Normal:
                switch (colourName) {
                    case 'primary': return this.Blue;
                    case 'secondary': return this.Purple;
                    case 'accent': return this.Yellow;
                    case 'success': return this.Green;
                    case 'warning': return this.Orange;
                    case 'error': return this.Red;
                    case 'neutral': return this.Grey;
                }
            default:
                throw new Error(`Colour blindness type not recongnised: ${type}`)

        }
    }
}

export { Colours, IColourPalette, ISemanticColourPalette, ColourBlindnessType }