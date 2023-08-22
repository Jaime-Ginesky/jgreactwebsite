import { useTheme, useThemeUpdate } from '../components/themes/themes.component';

export default function Context() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? 'CCC' : '#333',
        padding: '1rem',
        margin: '1rem'
    }
    return (
        <>
         <button onClick={toggleTheme}>Theme</button>
         <div style={themeStyles}>Theme</div>
        </>
    )
}