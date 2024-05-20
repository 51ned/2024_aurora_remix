/**
  * Reusable & full-customisable toggle component. And hate inline-styles too, but...
  * ...having been impressed by this video: https://www.youtube.com/watch?v=8LFbS78a4Rw, i choose radio buttons.
  * V. Makeev hardcoded the animation in CSS for the three-position, horisontal-oriented toggle only.
  * Unlike that, I wanted to create a toggle that could have any number of positions and free orientation.
  * As you can see, the animation of the 'div.status' relies on the index of the checked input and it size.
  * Then, I think it makes sense to keep values like the size of 'div.status', border-radii and offsets inside.
  * All other styling is placed in the CSS module and the global styles.
  * 
  @param { string } customStyles:
  A string representing a className for customizing the appearance of the component.
  This prop allows applying custom styles to the component from outside.
  @param { inputProps[] } inputsData:
  An array of objects representing data for each position in the toggle.
  Each object contains properties ariaLabel, name, and value, used to create radio buttons.
  @param { string } legendText:
  A string representing the text used as the legend of the toggle.
  The legend provides additional information about the toggle to users.
  @param { (value: string) => void } onInputChange:
  A callback function called when the selected position in the toggle changes.
  It takes the new value as an argument.
  @param { 'horisontal' | 'vertical' } dir:
  Determines the direction of the positions layout in the toggle.
  Can be either 'horizontal' or 'vertical'.
  @param { string | null } valueToCompare:
  The value against which the values of the radio buttons are compared to determine the currently selected position in the toggle.
  Can be null if none of the positions are selected.
*/


import { useEffect, useState } from 'react'
import cn from 'classnames'

import { Fieldset } from 'views/atoms'

import s from './toggle.module.css'


type inputProps = {
  ariaLabel: string,
  name: string,
  value: string
}

interface ToggleProps {
  customStyles?: string;
  dir: 'horisontal' | 'vertical',
  inputsData: inputProps[],
  legendText: string,
  onInputChange: (value: string) => void,
  valueToCompare: string | null
}


export function Toggle({
  customStyles,
  dir,
  inputsData,
  legendText,
  onInputChange,
  valueToCompare
}: ToggleProps) {
  // Setting up toggle geometry:
  const toggleSize = 32
  const borderSize = 4
  const statusSize = toggleSize - borderSize * 2
  const getHalf = (num: number) => { return num / 2 }

  const gridDir = dir === 'horisontal'
    ? 'gridTemplateColumns'
    : 'gridTemplateRows'
  
  const axle = dir === 'horisontal' ? 'X' : 'Y'

  // Find index of checked input (it needs for 'div.status' animate):
  const [checkedIndex, setCheckedIndex] = useState(0)

  useEffect(() => {
    setCheckedIndex(inputsData.findIndex(i => i.value === valueToCompare))
  }, [inputsData, valueToCompare])
  
  // Define input's handle:
  const onChangeHandle = (value: string, index: number) => {
    onInputChange(value)
    setCheckedIndex(index)
  }

  // ...and styles:
  let inputStyles = s.input

  if (customStyles) {
    inputStyles = cn(s.input, {
      [customStyles]: customStyles
    })
  }

  return (
    <Fieldset customStyle={s.wrap}>
      <legend className='sr-only'>
        { legendText }
      </legend>

      <div
        className={s.container}
        role='radiogroup'
        style={{
          borderRadius: getHalf(toggleSize),
          [gridDir]: `repeat(${inputsData.length}, 1fr)`
        }}
      >
        {inputsData.map((item, index) => (
          <input
            aria-label={item.ariaLabel}
            checked={item.value === valueToCompare}
            className={inputStyles}
            key={index}
            name={item.name}
            onChange={() => onChangeHandle(item.value, index)}
            style={{
              height: toggleSize,
              width: toggleSize
            }}
            type='radio'
            value={item.value}
          />
        ))}
      </div>

      <div
        aria-live='polite'
        className={s.status}
        role='status'
        style={{
          borderRadius: getHalf(statusSize),
          height: statusSize,
          marginTop: `-${getHalf(statusSize)}px`,
          transform: `translate${axle}(${checkedIndex * toggleSize + borderSize}px)`,
          width: statusSize
        }}
      />
    </Fieldset>
  )
}
