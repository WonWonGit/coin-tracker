import * as Styled from "./Styled.ThemeToggle";

const ThemeToggle = ({click, themeMode}:Iprops) => {

    return(
        <Styled.CustomToggleSwitch>
            <Styled.CustomToggleLabel>
                <Styled.CustomToggleInput onChange={ click } checked={themeMode === 'dark' ? true : false}/>
                <Styled.CustomSpanSlider />   
            </Styled.CustomToggleLabel>
        </Styled.CustomToggleSwitch>
    )
}

export default ThemeToggle;

interface Iprops{
    click: ()=>void;
    themeMode: string;
}
