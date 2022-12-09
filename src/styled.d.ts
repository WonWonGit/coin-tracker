import "styled-components";

declare module "styled-components"{
    export interface DefaultTheme{
        bgColor: string;
        textColor: string;
        accentColor: string;
        overviewColor: string;
        textContentColor: string;
    }
}