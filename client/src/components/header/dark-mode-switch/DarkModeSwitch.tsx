import React, { useContext } from 'react'
import Styled from 'styled-components'
import Switch from 'react-switch';
import { IDarkModeContext } from '../../../types/app.types';
import { DarkModeContext } from '../../../App'

const DarkModeWrapper = Styled.div`
display: flex;
align-items: center;
`

export default function DarkModeSwitch() {
  const { darkMode, setDarkMode } = useContext<IDarkModeContext>(DarkModeContext)

  return (
    <DarkModeWrapper>
      Dark Mode:
      <Switch
        height={24}
        width={48}
        uncheckedIcon={false}
        onChange={(checked: boolean) => setDarkMode(checked)}
        checked={darkMode}
      />
    </DarkModeWrapper>
  )
}
