declare module 'animax-engine' {
    export interface ThemeColors {
        primary: string;
        secondary: string;
        accent: string;
        success?: string;
        warning?: string;
        error?: string;
        info?: string;
        background?: string;
        backgroundSecondary?: string;
        text?: string;
        textLight?: string;
        border?: string;
    }

    export interface ThemeTypography {
        fontFamily: string;
        monoFamily?: string;
        sizes?: {
            xs?: string;
            sm?: string;
            md?: string;
            lg?: string;
            xl?: string;
            [key: string]: string | undefined;
        };
        weights?: {
            light?: number;
            normal?: number;
            medium?: number;
            semibold?: number;
            bold?: number;
            [key: string]: number | undefined;
        };
    }

    export interface ThemeAnimation {
        keyframes: string;
        duration?: string;
        timingFunction?: string;
        delay?: string;
        iterationCount?: string | number;
        direction?: string;
        fillMode?: string;
    }

    export interface ThemeGradient {
        [key: string]: string;
    }

    export interface ThemeComponent {
        [key: string]: {
            [key: string]: string | number;
        };
    }

    export class ThemeBuilder {
        constructor();
        setColors(colors: Partial<ThemeColors>): this;
        setTypography(typography: Partial<ThemeTypography>): this;
        setAnimations(animations: { [key: string]: ThemeAnimation }): this;
        setGradients(gradients: ThemeGradient): this;
        setComponents(components: ThemeComponent): this;
        generateCSS(): string;
    }

    export class ThemeManager {
        constructor();
        setCurrentTheme(themeName: string): boolean;
        getCurrentTheme(): string;
        generateThemeCSS(themeName: string): string;
        getAllThemes(): string[];
    }

    export const templates: {
        modernPastel: ThemeBuilder;
        neonNight: ThemeBuilder;
        minimalist: ThemeBuilder;
        retro: ThemeBuilder;
    };

    export const components: string;
    export const animations: string;
    export const effects: string;
    export const defaultTheme: ThemeBuilder;
}

declare module 'animax-engine/design' {
    export * from 'animax-engine';
} 