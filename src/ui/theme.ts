
interface ITheme {
    Name: string;

    Primary: IColourPalette;
    PrimaryNormal: string;
    PrimaryLight: string;
    PrimaryDark: string;

    Accent: IColourPalette;
    AccentNormal: string;
    AccentLight: string;
    AccentDark: string;

    Neutral: IColourPalette;

    BackgroundPrimary: string;
    BackgroundSecondary: string;

    TextPrimary: string;
    TextSecondary: string;
    TextMuted: string;

    Error: ISemanticColourPalette;
    Success: ISemanticColourPalette;
}

const resolveTheme = (themeName: String): ITheme => {
    switch (themeName) {
        case 'Light':
            return new LightTheme();
        case 'Dark':
            return new DarkTheme();
        case 'Protanopia':
            return new ProtanopiaTheme();
        case 'Deuteranopia':
            return new DeuteranopiaTheme();
        case 'Tritanopia':
            return new TritanopiaTheme();
        case 'Achromatopsia':
            return new AchromatopsiaTheme();
        default:
            throw new Error(`Cannot resolve theme '${themeName}'`);
    }
}

const applyTheme = (theme: ITheme): void => {
    let themeObject: Object = getCssVariablesLookup(theme);

    Object.entries(themeObject).forEach(([name, value]: [string, string]) => {
        document.documentElement.style.setProperty(name, value);
    });

    // Save all variables as JSON
    localStorage.setItem('theme-info', JSON.stringify(themeObject));
}

const loadTheme = () => {
    const stored = localStorage.getItem('theme-info');

    if (!stored) {
        let theme = new LightTheme();
        applyTheme(theme);
        return;
    }

    let variableObject = JSON.parse(stored);
    Object.entries(variableObject).forEach(([name, value]: [string, string]) => {
        document.documentElement.style.setProperty(name, value);
    });
}

const getCssVariablesLookup = (theme: ITheme): Object => {
    let result = {};
    for (const shade in theme.Primary) {
        result['--primary-' + shade] = theme.Primary[shade];
    }

    result['--primary-light'] = theme.PrimaryLight;
    result['--primary-normal'] = theme.PrimaryNormal;
    result['--primary-dark'] = theme.PrimaryDark;

    for (const shade in theme.Accent) {
        result['--accent-' + shade] = theme.Primary[shade];
    }

    result['--accent-light'] = theme.AccentLight;
    result['--accent-normal'] = theme.AccentNormal;
    result['--accent-dark'] = theme.AccentDark;

    for (const shade in theme.Neutral) {
        result['--neutral-' + shade] = theme.Neutral[shade];
    }

    for (const shade in theme.Error) {
        result['--error-' + shade] = theme.Error[shade];
    }

    for (const shade in theme.Success) {
        result['--success-' + shade] = theme.Success[shade];
    }

    result['--bg-primary'] = theme.BackgroundPrimary;
    result['--bg-secondary'] = theme.BackgroundSecondary;
    result['--text-primary'] = theme.TextPrimary;
    result['--text-secondary'] = theme.TextSecondary;
    result['--text-muted'] = theme.TextMuted;

    return result;
}


import { Colours, IColourPalette, ISemanticColourPalette } from "./colours";

class LightTheme implements ITheme {
    Name: string = 'Light';

    _lightShade : number = 200;
    _normalShade : number = 600;
    _darkShade : number = 900;

    Primary = Colours.Blue;
    PrimaryLight = this.Primary[this._lightShade];
    PrimaryNormal = this.Primary[this._normalShade];
    PrimaryDark = this.Primary[this._darkShade];

    Accent = Colours.Yellow;
    AccentLight = this.Accent[this._lightShade];
    AccentNormal = this.Accent[this._normalShade];
    AccentDark = this.Accent[this._darkShade];
    
    Neutral = Colours.Grey;

    Error = {
        'normal': Colours.Red[this._normalShade],
        'light': Colours.Red[this._lightShade],
        'dark': Colours.Red[this._darkShade],
    }

    Success = {
        'normal': Colours.Green[this._normalShade],
        'light': Colours.Green[this._lightShade],
        'dark': Colours.Green[this._darkShade],
    }

    BackgroundPrimary: string = this.Neutral[50];
    BackgroundSecondary: string = this.Neutral[100];

    TextPrimary: string = this.Neutral[900];
    TextSecondary: string = this.Neutral[600];
    TextMuted: string = this.Neutral[400];
}

class DarkTheme implements ITheme {
    Name: string = 'Dark';


    _lightShade : number = 900;
    _normalShade : number = 500;
    _darkShade : number = 500;

    Primary = Colours.Blue;
    PrimaryLight = this.Primary[this._lightShade];
    PrimaryNormal = this.Primary[this._normalShade];
    PrimaryDark = this.Primary[this._darkShade];

    Accent = Colours.Yellow;
    AccentLight = this.Accent[this._lightShade];
    AccentNormal = this.Accent[this._normalShade];
    AccentDark = this.Accent[this._darkShade];

    Neutral = Colours.Grey;

    Error = {
        'normal': Colours.Orange[this._normalShade],
        'light': Colours.Orange[this._lightShade],
        'dark': Colours.Orange[this._darkShade],
    }

    Success = {
        'normal': Colours.Green[this._normalShade],
        'light': Colours.Green[this._lightShade],
        'dark': Colours.Green[this._darkShade],
    }

    BackgroundPrimary: string = this.Neutral[900];
    BackgroundSecondary: string = this.Neutral[950];

    TextPrimary: string = this.Neutral[50];
    TextSecondary: string = this.Neutral[400];
    TextMuted: string = this.Neutral[600];
}

class ProtanopiaTheme implements ITheme {

    Name: string = "Protanopia";

    _lightShade : number = 200;
    _normalShade : number = 600;
    _darkShade : number = 900;

    BackgroundColour: string = Colours.Grey[50];

    Primary = Colours.ProtanopiaBlue;

    PrimaryLight = this.Primary[this._lightShade];
    PrimaryNormal = this.Primary[this._normalShade];
    PrimaryDark = this.Primary[this._darkShade];

    Accent = Colours.ProtanopiaYellow;

    AccentLight = this.Accent[this._lightShade];
    AccentNormal = this.Accent[this._normalShade];
    AccentDark = this.Accent[this._darkShade];

    Neutral = Colours.Grey;

    Error = {
        'normal': Colours.DeuteranopiaBrown[this._normalShade],
        'light': Colours.DeuteranopiaBrown[this._lightShade],
        'dark': Colours.DeuteranopiaBrown[this._darkShade],
    }

    Success = {
        'normal': Colours.ProtanopiaBlue[this._normalShade],
        'light': Colours.ProtanopiaBlue[this._lightShade],
        'dark': Colours.ProtanopiaBlue[this._darkShade],
    }

    BackgroundPrimary: string = this.Neutral[50];
    BackgroundSecondary: string = this.Neutral[100];

    TextPrimary: string = this.Neutral[900];
    TextSecondary: string = this.Neutral[600];
    TextMuted: string = this.Neutral[400];
}

class DeuteranopiaTheme extends ProtanopiaTheme {
    // allegedly the same theme can be used for both
    Name: string = "Deuteranopia";
}

class TritanopiaTheme implements ITheme {

    Name: string = "Tritanopia";

    _lightShade : number = 200;
    _normalShade : number = 600;
    _darkShade : number = 900;

    Primary = Colours.TritanopiaRed;

    PrimaryLight = this.Primary[this._lightShade];
    PrimaryNormal = this.Primary[this._normalShade];
    PrimaryDark = this.Primary[this._darkShade];

    Accent = Colours.TritanopiaPink;

    AccentLight = this.Accent[this._lightShade];
    AccentNormal = this.Accent[this._normalShade];
    AccentDark = this.Accent[this._darkShade];
    Neutral = Colours.Grey;

    Error = {
        'normal': Colours.TritanopiaRed[this._normalShade],
        'light': Colours.TritanopiaRed[this._lightShade],
        'dark': Colours.TritanopiaRed[this._darkShade],
    }

    Success = {
        'normal': Colours.TritanopiaTeal[this._normalShade],
        'light': Colours.TritanopiaTeal[this._lightShade],
        'dark': Colours.TritanopiaTeal[this._darkShade],
    }

    BackgroundPrimary: string = this.Neutral[50];
    BackgroundSecondary: string = this.Neutral[100];

    TextPrimary: string = this.Neutral[900];
    TextSecondary: string = this.Neutral[600];
    TextMuted: string = this.Neutral[400];
}

class AchromatopsiaTheme implements ITheme {
    Name: string = "Achromatopsia";

    _lightShade : number = 200;
    _normalShade : number = 600;
    _darkShade : number = 900;

    Primary = Colours.AchromatopsiaLight;

    PrimaryLight = this.Primary[this._lightShade];
    PrimaryNormal = this.Primary[this._normalShade];
    PrimaryDark = this.Primary[this._darkShade];

    Accent = Colours.AchromatopsiaDark;

    AccentLight = this.Accent[this._lightShade];
    AccentNormal = this.Accent[this._normalShade];
    AccentDark = this.Accent[this._darkShade];

    Neutral = Colours.Grey;

    Error = {
        'normal': Colours.AchromatopsiaDark[this._normalShade],
        'light': Colours.AchromatopsiaDark[this._lightShade],
        'dark': Colours.AchromatopsiaDark[this._darkShade],
    }

    Success = {
        'normal': Colours.AchromatopsiaLight[this._normalShade],
        'light': Colours.AchromatopsiaLight[this._lightShade],
        'dark': Colours.AchromatopsiaLight[this._darkShade],
    }

    BackgroundPrimary: string = this.Neutral[50];
    BackgroundSecondary: string = this.Neutral[100];

    TextPrimary: string = this.Neutral[900];
    TextSecondary: string = this.Neutral[600];
    TextMuted: string = this.Neutral[400];
}

export { ITheme, resolveTheme, LightTheme, DarkTheme, ProtanopiaTheme, DeuteranopiaTheme, applyTheme, loadTheme }
