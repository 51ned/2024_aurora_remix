import React, { useMemo } from 'react'
import { Link } from '@remix-run/react'

import { Text } from 'views/atoms'
import type { LinkProps } from 'lib/types'


export function RenderList(items: string[] | LinkProps[]) {
  return useMemo(() => {
    return items.map((item, index) => {
      if (typeof item === 'string') {
        return (
          <React.Fragment key={index}>
            <Text tag='li'>
              { item }
            </Text>
          </React.Fragment>
        )
      }
      
      return (
        <React.Fragment key={index}>
          <Text size='smaller' tag='li'>
            <Link to={item.url} title={item.title}>
              { item.text }
            </Link>
          </Text>
        </React.Fragment>
      )
    })
  }, [items])
}