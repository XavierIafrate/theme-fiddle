
interface ITheme {
    Name: string;
    BackgroundColour : string;
    Primary : IColourPalette;
    Neutral : IColourPalette;

    BackgroundPrimary : string;
    BackgroundSecondary : string;

    TextPrimary : string;
    TextSecondary : string;
    TextFaded : string;

    Error : ISemanticColourPalette;
    Success : ISemanticColourPalette;
}

const resolveTheme = (themeName : String) => {
    if(themeName === "light") {
        return new LightTheme();
    }
    else {
        return new DarkTheme();
    }
}


import { Colours, IColourPalette, ISemanticColourPalette } from "./colours";

class LightTheme implements ITheme {
    Name : string = 'Light';

    BackgroundColour: string = Colours.Grey[50];

    Primary = Colours.Blue;

    Neutral = Colours.Grey;

    Error = {
        'normal' : Colours.Red[600],
        'light' : Colours.Red[200],
        'dark' : Colours.Red[900],
    }

    Success = {
        'normal' : Colours.Green[600],
        'light' : Colours.Green[200],
        'dark' : Colours.Green[900],
    }

    BackgroundPrimary: string = Colours.Grey[50];
    BackgroundSecondary: string = Colours.Grey[100];

    TextPrimary : string = Colours.Grey[900];
    TextSecondary : string = Colours.Grey[600];
    TextFaded : string = Colours.Grey[400];
}

class DarkTheme implements ITheme {
    Name : string = 'Dark';

    BackgroundColour: string = Colours.Grey[950];

    Primary = Colours.Purple;
    Neutral = Colours.Grey;

    Error = {
        'normal' : Colours.Orange[600],
        'light' : Colours.Orange[200],
        'dark' : Colours.Orange[900],
    }

    Success = {
        'normal' : Colours.Green[600],
        'light' : Colours.Green[200],
        'dark' : Colours.Green[900],
    }

    BackgroundPrimary: string = Colours.Grey[900];
    BackgroundSecondary: string = Colours.Grey[950];

    TextPrimary : string = Colours.Grey[50];
    TextSecondary : string = Colours.Grey[400];
    TextFaded : string = Colours.Grey[600];
}


export { ITheme, resolveTheme, LightTheme, DarkTheme }
