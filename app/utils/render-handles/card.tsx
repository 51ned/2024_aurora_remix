import React, { useMemo } from 'react'

import { Link } from '@remix-run/react'

import { Heading, List, Text } from 'views/atoms'
import type { CardDataProps } from 'lib/types'


export function RenderCard(cardData: CardDataProps) {
  return useMemo(() => {
    const arr: React.ReactNode[] = []
    
    for (const key of Object.keys(cardData)) {
      if (cardData.heading && key === 'heading') {
        arr.push(<Heading level='3' padded>{ cardData.heading }</Heading>)
      }

      if (cardData.text && key === 'text') {
        for (const item of cardData.text) {
          item.paragraph && arr.push(<Text padded>{ item.paragraph }</Text>)
          item.list && arr.push(<List items={item.list.items} padded type={item.list.type} />)
        }
      }
      
      if (cardData.link && key === 'link') {
        arr.push(
          <Link
            title={cardData.link.title}
            to={cardData.link.url}
          >
            { cardData.link.text }
          </Link>
        )
      }
    }
    
    return arr.map((item, index) => {
      return (
        <React.Fragment key={index}>
          { item }
        </React.Fragment>
      )
    })
  }, [cardData])
}
