import { useState } from "react";

const useTheme = () => {
    const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initTheme = isBrowserDarkMode ? 'dark' : 'light';

    const localSettingTheme = localStorage.getItem('theme');

    if (localSettingTheme) {
        initTheme = localSettingTheme;
    }

    const [theme, setTheme] = useState(initTheme);

    const setMode = (mode:string) => {
        // 테마정보 변경하면 localstorage 에 저장해 다음에도 지정한 값으로 테마가 보이도록 설정
        window.localStorage.setItem('theme', mode)
        console.log(mode);
        setTheme(mode)
    };

    const toggleTheme = () => {
        setMode(theme === 'light' ? 'dark' : 'light');
    }

    return [theme, toggleTheme as ()=>void];
}

export default useTheme;