import cn from 'classnames'

import { RenderList } from 'utils/render-handles'
import type { ListProps } from 'lib/types'

import s from './list.module.css'


export function List({
  items,
  customStyle,
  padded,
  type
}: ListProps) {
  const Tag = type === 'ordered' ? 'ol' : 'ul'

  const className = cn(customStyle, s.base, s[type], {
    ['paragraph']: padded
  })

  return (
    <Tag className={className}>
      { RenderList(items) }
    </Tag>
  )
}
