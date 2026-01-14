
interface ITheme {
    Name: string;
    ColourScheme : string;
    PatternsEnabled : boolean;

    /* Surfaces and containers */
    ColourBase00 : string;
    ColourBase05 : string;
    ColourBase10 : string;
    ColourBase20 : string;
    ColourBase25 : string;
    ColourBase30 : string;

    /* Separation */
    ColourBase35 : string;
    ColourBase40 : string;
    ColourBase50 : string;

    /* Readable Text */
    ColourBase60 : string;
    ColourBase70 : string;
    ColourBase100 : string;

    /*  Standard Text colours */
    TextNormal : string;
    TextMuted : string;
    TextFaint : string;
    TextOnPrimary : string;
    TextOnAccent : string;
    TextOnAccentInverted : string;
    TextError : string;
    TextWarning : string;
    TextSuccess : string;
    TextAccent : string;

    /* Standard Colours */
    ColourRed : string;
    ColourRedDark : string;
    ColourRedFaded : string;
    ColourOrange : string;
    ColourGreen : string;
    ColourGreenDark : string;
    ColourGreenFaded : string;
    ColourPrimary : string;
    ColourPrimaryDark : string;
    ColourPrimaryFaded : string;
    ColourAccent : string;
    ColourAccentDark : string;
    ColourAccentFaded : string;

    AccessibilityPatternDots : string | null;
    AccessibilityPatternDotsColour : string | null;
    AccessibilityPatternDiagonal : string | null;
    AccessibilityPatternDiagonalColour : string | null;
    AccessibilityPatternCrosshatch : string | null;
    AccessibilityPatternCrosshatchColour : string | null;
    
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

    console.log('Applying theme ' + theme.Name);
    let themeObject: Object = getCssVariablesLookup(theme);
    console.dir(themeObject);
    let patternsEnabled : string = null;

    Object.entries(themeObject).forEach(([name, value]: [string, string | null]) => {
        if(name === "--patterns-enabled") {
            patternsEnabled = value;   
        }

        if(value != null) {
            document.documentElement.style.setProperty(name, value);
        }
        else {
            document.documentElement.style.removeProperty(name);
        }
    });


    document.documentElement.dataset.accessibilityPatternsEnabled = patternsEnabled;

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
    let patternsEnabled : string = null;
    Object.entries(variableObject).forEach(([name, value]: [string, string]) => {
        if(name === "--patterns-enabled") {
            patternsEnabled = value;   
        }

        if(value != null) {
            document.documentElement.style.setProperty(name, value);
        }
        else {
            document.documentElement.style.removeProperty(name);
        }
    });

    document.documentElement.dataset.accessibilityPatternsEnabled = patternsEnabled;
}

const transformKey = (key : string) => {
    let result : string = '';

    let lastCharWasNum = false;
    for(let i = 0; i < key.length; i++) {
        let char = key[i];
        let isNum = '0123456789'.indexOf(char) !== -1

        if(i === 0) {
            result += char;
            if(isNum) lastCharWasNum = true;
            continue;
        }

        if(isNum){
            if(!lastCharWasNum) {
                result += '-';
            }
            result += char;
            lastCharWasNum = true;
            continue;
        }

        let isUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) !== -1
        if(isUppercase) {
            result += '-';
        }

        result += char;
        lastCharWasNum = isNum;
    }

    result = `--${result.toLowerCase()}`;
    return result;
}

const getCssVariablesLookup = (theme: ITheme) => {
    let result = {};

    for (const [key, value] of Object.entries(theme)) {
        let cssVariableString = transformKey(key);
        console.log(`${cssVariableString}: ${value}`);
        result[cssVariableString] = value;
    }

    return result;
}


import { Colours, IColourPalette, ISemanticColourPalette } from "./colours";

class LightTheme implements ITheme {
    Name: string = 'Light';

    ColourScheme = 'light';
    PatternsEnabled = false;

    ColourBase00= '#ffffff';
    ColourBase05= '#fcfcfc';
    ColourBase10= '#fafafa';
    ColourBase20= '#f6f6f6';
    ColourBase25= '#e3e3e3';
    ColourBase30= '#e0e0e0';
    ColourBase35= '#d4d4d4';
    ColourBase40= '#bdbdbd';
    ColourBase50= '#ababab';
    ColourBase60= '#707070';
    ColourBase70= '#5c5c5c';
    ColourBase100= '#222222';

    TextNormal = this.ColourBase100;
    TextMuted = this.ColourBase70;
    TextFaint = this.ColourBase50;
    TextOnPrimary = Colours.White;
    TextOnAccent = Colours.White;
    TextOnAccentInverted = Colours.Black;

    ColourRed = '#e93147';
    ColourRedDark = '#a32232';
    ColourRedFaded = '#f8c1c8';
    ColourOrange = '#ec7500';
    ColourGreen = '#08b94e';
    ColourGreenDark = '#056f2f';
    ColourGreenFaded = '#cef1dc';
    ColourPrimary = '#7852ee'
    ColourPrimaryDark = '#48318f'
    ColourPrimaryFaded = '#c9baf8'
    ColourAccent = '#00bfbc'
    ColourAccentDark = '#007371'
    ColourAccentFaded = '#b3eceb'

    TextError = this.ColourRed;
    TextWarning = this.ColourOrange;
    TextSuccess = this.ColourGreen;
    TextAccent = this.ColourAccent;

    AccessibilityPatternDots = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nMicgaGVpZ2h0PScyJyBmaWxsPSdibGFjaycgLz4KPC9zdmc+")';
    AccessibilityPatternDotsColour = 'rgba(255, 255, 255, 0.85)';
    AccessibilityPatternDiagonal = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J2JsYWNrJyBzdHJva2Utd2lkdGg9JzEnLz4KPC9zdmc+Cg==")';
    AccessibilityPatternDiagonalColour = 'rgba(255, 255, 255, 0.9)';
    AccessibilityPatternCrosshatch = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgogIDxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyNmZmYnLz4KICA8cGF0aCBkPSdNMCAwTDggOFpNOCAwTDAgOFonIHN0cm9rZS13aWR0aD0nMC41JyBzdHJva2U9JyNhYWEnLz4KPC9zdmc+Cg==")';
    AccessibilityPatternCrosshatchColour = 'rgba(255, 255, 255, 0.5)';
}
class ProtanopiaTheme implements ITheme {
    Name: string = 'Protanopia';

    ColourScheme = 'light';
    PatternsEnabled = false;

    ColourBase00= '#ffffff';
    ColourBase05= '#fcfcfc';
    ColourBase10= '#fafafa';
    ColourBase20= '#f6f6f6';
    ColourBase25= '#e3e3e3';
    ColourBase30= '#e0e0e0';
    ColourBase35= '#d4d4d4';
    ColourBase40= '#bdbdbd';
    ColourBase50= '#ababab';
    ColourBase60= '#707070';
    ColourBase70= '#5c5c5c';
    ColourBase100= '#222222';

    TextNormal = this.ColourBase100;
    TextMuted = this.ColourBase70;
    TextFaint = this.ColourBase50;
    TextOnPrimary = Colours.White;
    TextOnAccent = Colours.White;
    TextOnAccentInverted = Colours.Black;

    // Protanopia-adjusted colors
    ColourRed = '#d97b00';        // Shifted to amber/orange (was red)
    ColourRedDark = '#8f5400';     // Darker amber (was dark red)
    ColourRedFaded = '#fce4c4';    // Light peach (was light red)

    ColourOrange = '#ec7500';      // Unchanged - already distinguishable

    ColourGreen = '#00a8cc';       // Shifted to cyan-blue (was green)
    ColourGreenDark = '#006b7d';   // Dark cyan (was dark green)
    ColourGreenFaded = '#c4e8f0';  // Light cyan (was light green)

    ColourPrimary = '#7852ee';     // Unchanged - purple is distinguishable
    ColourPrimaryDark = '#48318f'; // Unchanged
    ColourPrimaryFaded = '#c9baf8'; // Unchanged

    ColourAccent = '#00bfbc';      // Unchanged - cyan is distinguishable
    ColourAccentDark = '#007371';  // Unchanged
    ColourAccentFaded = '#b3eceb'; // Unchanged

    TextError = this.ColourRed;
    TextWarning = this.ColourOrange;
    TextSuccess = this.ColourGreen;
    TextAccent = this.ColourAccent;

    AccessibilityPatternDots = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nMicgaGVpZ2h0PScyJyBmaWxsPSdibGFjaycgLz4KPC9zdmc+")';
    AccessibilityPatternDotsColour = 'rgba(255, 255, 255, 0.85)';
    AccessibilityPatternDiagonal = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J2JsYWNrJyBzdHJva2Utd2lkdGg9JzEnLz4KPC9zdmc+Cg==")';
    AccessibilityPatternDiagonalColour = 'rgba(255, 255, 255, 0.9)';
    AccessibilityPatternCrosshatch = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgogIDxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyNmZmYnLz4KICA8cGF0aCBkPSdNMCAwTDggOFpNOCAwTDAgOFonIHN0cm9rZS13aWR0aD0nMC41JyBzdHJva2U9JyNhYWEnLz4KPC9zdmc+Cg==")';
    AccessibilityPatternCrosshatchColour = 'rgba(255, 255, 255, 0.5)';
}

class DeuteranopiaTheme implements ITheme {
    Name: string = 'Deuteranopia';

    ColourScheme = 'light';
    PatternsEnabled = false;

    ColourBase00= '#ffffff';
    ColourBase05= '#fcfcfc';
    ColourBase10= '#fafafa';
    ColourBase20= '#f6f6f6';
    ColourBase25= '#e3e3e3';
    ColourBase30= '#e0e0e0';
    ColourBase35= '#d4d4d4';
    ColourBase40= '#bdbdbd';
    ColourBase50= '#ababab';
    ColourBase60= '#707070';
    ColourBase70= '#5c5c5c';
    ColourBase100= '#222222';

    TextNormal = this.ColourBase100;
    TextMuted = this.ColourBase70;
    TextFaint = this.ColourBase50;
    TextOnPrimary = Colours.White;
    TextOnAccent = Colours.White;
    TextOnAccentInverted = Colours.Black;

    ColourRed = '#d63384';           // More magenta/pink-red
    ColourRedDark = '#92236d';       // Darker magenta
    ColourRedFaded = '#f5c2dd';      // Soft pink

    ColourOrange = '#ff8c00';        // Brighter, more saturated orange

    ColourGreen = '#0099cc';         // Blue-cyan instead of green
    ColourGreenDark = '#006b8f';     // Darker blue-cyan
    ColourGreenFaded = '#b3e0f2';    // Light blue-cyan

    ColourPrimary = '#7852ee';       // Keep as is (good for deuteranopia)
    ColourPrimaryDark = '#48318f';   // Keep as is
    ColourPrimaryFaded = '#c9baf8';  // Keep as is

    ColourAccent = '#00bfbc';        // Keep as is (cyan works well)
    ColourAccentDark = '#007371';    // Keep as is
    ColourAccentFaded = '#b3eceb';   // Keep as is

    TextError = this.ColourRed;
    TextWarning = this.ColourOrange;
    TextSuccess = this.ColourGreen;
    TextAccent = this.ColourAccent;

    AccessibilityPatternDots = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nMicgaGVpZ2h0PScyJyBmaWxsPSdibGFjaycgLz4KPC9zdmc+")';
    AccessibilityPatternDotsColour = 'rgba(255, 255, 255, 0.85)';
    AccessibilityPatternDiagonal = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J2JsYWNrJyBzdHJva2Utd2lkdGg9JzEnLz4KPC9zdmc+Cg==")';
    AccessibilityPatternDiagonalColour = 'rgba(255, 255, 255, 0.9)';
    AccessibilityPatternCrosshatch = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgogIDxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyNmZmYnLz4KICA8cGF0aCBkPSdNMCAwTDggOFpNOCAwTDAgOFonIHN0cm9rZS13aWR0aD0nMC41JyBzdHJva2U9JyNhYWEnLz4KPC9zdmc+Cg==")';
    AccessibilityPatternCrosshatchColour = 'rgba(255, 255, 255, 0.5)';
}

class TritanopiaTheme implements ITheme {
    Name: string = 'Tritanopia';

    ColourScheme = 'light';
    PatternsEnabled = false;

    ColourBase00= '#ffffff';
    ColourBase05= '#fcfcfc';
    ColourBase10= '#fafafa';
    ColourBase20= '#f6f6f6';
    ColourBase25= '#e3e3e3';
    ColourBase30= '#e0e0e0';
    ColourBase35= '#d4d4d4';
    ColourBase40= '#bdbdbd';
    ColourBase50= '#ababab';
    ColourBase60= '#707070';
    ColourBase70= '#5c5c5c';
    ColourBase100= '#222222';

    TextNormal = this.ColourBase100;
    TextMuted = this.ColourBase70;
    TextFaint = this.ColourBase50;
    TextOnPrimary = Colours.White;
    TextOnAccent = Colours.White;
    TextOnAccentInverted = Colours.Black;

    // Adjusted for Tritanopia accessibility
    ColourRed = '#e93147'; // Red remains clear
    ColourRedDark = '#a32232'; // Dark red remains clear
    ColourRedFaded = '#f8c1c8'; // Faded red remains clear

    ColourOrange = '#ec7500'; // Orange remains clear

    ColourGreen = '#08b94e'; // Green remains clear
    ColourGreenDark = '#056f2f'; // Dark green remains clear
    ColourGreenFaded = '#cef1dc'; // Faded green remains clear

    // Purple shifted to more red-magenta to avoid blue confusion
    ColourPrimary = '#d946b8'; // Was purple, now magenta-pink
    ColourPrimaryDark = '#7e2a6a'; // Darker magenta
    ColourPrimaryFaded = '#f5d4ee'; // Faded magenta-pink

    // Cyan shifted to more distinct red tone to separate from greens
    ColourAccent = '#e6194b'; // Was cyan, now distinct red-pink
    ColourAccentDark = '#8f0f2e'; // Darker red-pink
    ColourAccentFaded = '#fbd4dd'; // Faded red-pink

    TextError = this.ColourRed;
    TextWarning = this.ColourOrange;
    TextSuccess = this.ColourGreen;
    TextAccent = this.ColourAccent;

    AccessibilityPatternDots = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nMicgaGVpZ2h0PScyJyBmaWxsPSdibGFjaycgLz4KPC9zdmc+")';
    AccessibilityPatternDotsColour = 'rgba(255, 255, 255, 0.85)';
    AccessibilityPatternDiagonal = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J2JsYWNrJyBzdHJva2Utd2lkdGg9JzEnLz4KPC9zdmc+Cg==")';
    AccessibilityPatternDiagonalColour = 'rgba(255, 255, 255, 0.9)';
    AccessibilityPatternCrosshatch = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgogIDxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyNmZmYnLz4KICA8cGF0aCBkPSdNMCAwTDggOFpNOCAwTDAgOFonIHN0cm9rZS13aWR0aD0nMC41JyBzdHJva2U9JyNhYWEnLz4KPC9zdmc+Cg==")';
    AccessibilityPatternCrosshatchColour = 'rgba(255, 255, 255, 0.5)';
}

class AchromatopsiaTheme implements ITheme {
    Name: string = 'Tritanopia';

    ColourScheme = 'light';
    PatternsEnabled = true;

    ColourBase00= '#ffffff';
    ColourBase05= '#fcfcfc';
    ColourBase10= '#fafafa';
    ColourBase20= '#f6f6f6';
    ColourBase25= '#e3e3e3';
    ColourBase30= '#e0e0e0';
    ColourBase35= '#d4d4d4';
    ColourBase40= '#bdbdbd';
    ColourBase50= '#ababab';
    ColourBase60= '#707070';
    ColourBase70= '#5c5c5c';
    ColourBase100= '#222222';

    TextNormal = this.ColourBase100;
    TextMuted = this.ColourBase70;
    TextFaint = this.ColourBase50;
    TextOnPrimary = Colours.White;
    TextOnAccent = Colours.White;
    TextOnAccentInverted = Colours.Black;

    ColourRed = '#9e9e9e';
    ColourRedDark = '#6b6b6b';
    ColourRedFaded = '#d4d4d4';

    ColourOrange = '#a8a8a8';

    ColourGreen = '#8f8f8f';
    ColourGreenDark = '#565656';
    ColourGreenFaded = '#e8e8e8';

    ColourPrimary = '#8c8c8c';
    ColourPrimaryDark = '#515151';
    ColourPrimaryFaded = '#cfcfcf';

    ColourAccent = '#9a9a9a';
    ColourAccentDark = '#5e5e5e';
    ColourAccentFaded = '#e0e0e0';

    TextError = this.ColourRed;
    TextWarning = this.ColourOrange;
    TextSuccess = this.ColourGreen;
    TextAccent = this.ColourAccent;

    AccessibilityPatternDots = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nMicgaGVpZ2h0PScyJyBmaWxsPSdibGFjaycgLz4KPC9zdmc+")';
    AccessibilityPatternDotsColour = 'rgba(255, 255, 255, 0.85)';
    AccessibilityPatternDiagonal = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J2JsYWNrJyBzdHJva2Utd2lkdGg9JzEnLz4KPC9zdmc+Cg==")';
    AccessibilityPatternDiagonalColour = 'rgba(255, 255, 255, 0.9)';
    AccessibilityPatternCrosshatch = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgogIDxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyNmZmYnLz4KICA8cGF0aCBkPSdNMCAwTDggOFpNOCAwTDAgOFonIHN0cm9rZS13aWR0aD0nMC41JyBzdHJva2U9JyNhYWEnLz4KPC9zdmc+Cg==")';
    AccessibilityPatternCrosshatchColour = 'rgba(255, 255, 255, 0.5)';
}

class DarkTheme implements ITheme {
    Name: string = 'Dark';

    ColourScheme = 'dark';
    PatternsEnabled = false;

    ColourBase00= '#1e1e1e';
    ColourBase05= '#212121';
    ColourBase10= '#242424';
    ColourBase20= '#262626';
    ColourBase25= '#2a2a2a';
    ColourBase30= '#363636';
    ColourBase35= '#3f3f3f';
    ColourBase40= '#555555';
    ColourBase50= '#666666';
    ColourBase60= '#999999';
    ColourBase70= '#b3b3b3';
    ColourBase100= '#dadada';

    TextNormal = this.ColourBase100;
    TextMuted = this.ColourBase70;
    TextFaint = this.ColourBase50;
    TextOnPrimary = Colours.White;
    TextOnAccent = Colours.White;
    TextOnAccentInverted = Colours.Black;

    TextError = '#e93147';
    TextWarning = '#ec7500';
    TextSuccess = '#08b94e';
    TextAccent = '#7852ee'

    // Dark background versions
    ColourRed = '#ff5a6e';           // Brighter, more vibrant
    ColourRedDark = '#ff8a9a';       // Even lighter for subtle use
    ColourRedFaded = '#5a1f27';      // Darker, muted
    ColourOrange = '#ff9933';        // Brighter orange
    ColourGreen = '#0be95d';         // Brighter, more vibrant
    ColourGreenDark = '#5dff99';     // Lighter version
    ColourGreenFaded = '#1a4028';    // Darker, muted
    ColourPrimary = '#9d7aff';       // Brighter purple
    ColourPrimaryDark = '#b89fff';   // Lighter for subtle use
    ColourPrimaryFaded = '#2d1f4f';  // Darker, muted
    ColourAccent = '#00f5f1';        // Brighter cyan
    ColourAccentDark = '#5dfffc';    // Lighter version
    ColourAccentFaded = '#0d3d3c';   // Darker, muted


    AccessibilityPatternDots = null;
    AccessibilityPatternDotsColour = null;
    AccessibilityPatternDiagonal = null;
    AccessibilityPatternDiagonalColour = null;
    AccessibilityPatternCrosshatch = null;
    AccessibilityPatternCrosshatchColour = null;
}

// class ProtanopiaTheme implements ITheme {

//     Name: string = "Protanopia";

//     _lightShade : number = 200;
//     _normalShade : number = 600;
//     _darkShade : number = 900;

//     BackgroundColour: string = Colours.Grey[50];

//     Primary = Colours.ProtanopiaBlue;

//     PrimaryLight = this.Primary[this._lightShade];
//     PrimaryNormal = this.Primary[this._normalShade];
//     PrimaryDark = this.Primary[this._darkShade];
//     PrimaryFaded = this.Primary[this._lightShade];

//     Accent = Colours.ProtanopiaYellow;

//     AccentLight = this.Accent[this._lightShade];
//     AccentNormal = this.Accent[this._normalShade];
//     AccentDark = this.Accent[this._darkShade];

//     Neutral = Colours.Grey;

//     Error = {
//         'normal': Colours.DeuteranopiaBrown[this._normalShade],
//         'light': Colours.DeuteranopiaBrown[this._lightShade],
//         'dark': Colours.DeuteranopiaBrown[this._darkShade],
//     }

//     Success = {
//         'normal': Colours.ProtanopiaBlue[this._normalShade],
//         'light': Colours.ProtanopiaBlue[this._lightShade],
//         'dark': Colours.ProtanopiaBlue[this._darkShade],
//     }

//     BackgroundPrimary: string = this.Neutral[50];
//     BackgroundSecondary: string = this.Neutral[100];

//     TextPrimary: string = this.Neutral[900];
//     TextSecondary: string = this.Neutral[600];
//     TextMuted: string = this.Neutral[400];
// }

// class DeuteranopiaTheme extends ProtanopiaTheme {
//     // allegedly the same theme can be used for both
//     Name: string = "Deuteranopia";
// }

// class TritanopiaTheme implements ITheme {

//     Name: string = "Tritanopia";

//     _lightShade : number = 200;
//     _normalShade : number = 600;
//     _darkShade : number = 900;

//     Primary = Colours.TritanopiaRed;

//     PrimaryLight = this.Primary[this._lightShade];
//     PrimaryNormal = this.Primary[this._normalShade];
//     PrimaryDark = this.Primary[this._darkShade];

//     Accent = Colours.TritanopiaPink;

//     AccentLight = this.Accent[this._lightShade];
//     AccentNormal = this.Accent[this._normalShade];
//     AccentDark = this.Accent[this._darkShade];
//     Neutral = Colours.Grey;

//     Error = {
//         'normal': Colours.TritanopiaRed[this._normalShade],
//         'light': Colours.TritanopiaRed[this._lightShade],
//         'dark': Colours.TritanopiaRed[this._darkShade],
//     }

//     Success = {
//         'normal': Colours.TritanopiaTeal[this._normalShade],
//         'light': Colours.TritanopiaTeal[this._lightShade],
//         'dark': Colours.TritanopiaTeal[this._darkShade],
//     }

//     BackgroundPrimary: string = this.Neutral[50];
//     BackgroundSecondary: string = this.Neutral[100];

//     TextPrimary: string = this.Neutral[900];
//     TextSecondary: string = this.Neutral[600];
//     TextMuted: string = this.Neutral[400];
// }

// class AchromatopsiaTheme implements ITheme {
//     Name: string = "Achromatopsia";

//     _lightShade : number = 200;
//     _normalShade : number = 600;
//     _darkShade : number = 900;

//     Primary = Colours.AchromatopsiaLight;

//     PrimaryLight = this.Primary[this._lightShade];
//     PrimaryNormal = this.Primary[this._normalShade];
//     PrimaryDark = this.Primary[this._darkShade];

//     Accent = Colours.AchromatopsiaDark;

//     AccentLight = this.Accent[this._lightShade];
//     AccentNormal = this.Accent[this._normalShade];
//     AccentDark = this.Accent[this._darkShade];

//     Neutral = Colours.Grey;

//     Error = {
//         'normal': Colours.AchromatopsiaDark[this._normalShade],
//         'light': Colours.AchromatopsiaDark[this._lightShade],
//         'dark': Colours.AchromatopsiaDark[this._darkShade],
//     }

//     Success = {
//         'normal': Colours.AchromatopsiaLight[this._normalShade],
//         'light': Colours.AchromatopsiaLight[this._lightShade],
//         'dark': Colours.AchromatopsiaLight[this._darkShade],
//     }

//     BackgroundPrimary: string = this.Neutral[50];
//     BackgroundSecondary: string = this.Neutral[100];

//     TextPrimary: string = this.Neutral[900];
//     TextSecondary: string = this.Neutral[600];
//     TextMuted: string = this.Neutral[400];
// }

export { ITheme, resolveTheme, LightTheme, DarkTheme, applyTheme, loadTheme }
