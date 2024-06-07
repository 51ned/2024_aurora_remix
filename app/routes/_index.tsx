import type { MetaFunction } from '@remix-run/node'

import { Block, Text as T } from 'views/atoms'


export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}


export default function Index() {
  return (
    <>
      <Block wrap='header' container='div'>
        <h1>Heading level 1</h1>
        <h2>Heading level 2</h2>
        <h3>Heading level 3</h3>

        <br />
        
        <T size='biggest'>Biggest font size</T>
        <T size='bigger'>Bigger font size</T>
        <T size='regular'>Regular font size</T>
        <T size='smaller'>Smaller font size</T>
        <T size='smallest'>Smallest font size</T>
      </Block>

      <Block wrap='main' container='div'>
        <h2>Dolor sit amet</h2>
        <T paragraph>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</T>
        <T paragraph>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</T>
      </Block>
    </>
  )
}
