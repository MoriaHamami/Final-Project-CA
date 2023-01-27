import { useSelector, useDispatch } from 'react-redux'
// import { saveWap } from '../../../../../store/wap/wap.action'
import { wapService } from '../../services/wap.service'
import { saveWap } from '../../store/wap.actions'
// import { ThemePreview } from './theme-preview'

export const SidebarTheme = ({ themeList }) => {
    const dispatch = useDispatch()
    const wap = useSelector((storeState) => storeState.wapModule.wap)

    const onSelectTheme = (theme) => {
        setTheme(wap, theme)
    }

    const setTheme = (wap, { colors, fontFamily }) => {
        // dispatch(saveToHistory())
        // const wapToSave = {...wap}
        wap.cmps.forEach((cmp) => {
            cmp.style = { ...cmp.style, ...colors[cmp.themePalette], fontFamily }
        })
        saveWap(wap)
        // dispatch(saveWap(wap))
    }

    return (
            <section className="sidebar-theme">
                <h3 className="theme-header">Choose a theme</h3>

                {wapService.getThemes().map((theme) => {
                    return <section
                        className="theme-container"
                        onClick={() => onSelectTheme(theme)}
                        style={{ fontFamily: theme.fontFamily }}
                    >
                        <div className="theme-header-info">
                            <p className="theme-header">{theme.name}</p>
                            <p className="theme-description">{theme.description}</p>
                        </div>
                        <div className="theme-colors-container">
                            {Object.entries(theme.colors).map((color, idx) => {
                                return (
                                    <div
                                        key={theme.id + idx}
                                        style={{
                                            height: "15px",
                                            backgroundColor: color[1].backgroundColor,
                                        }}
                                    ></div>
                                )
                            })}
                        </div>
                    </section>
                })}
            </section>
    )
}
