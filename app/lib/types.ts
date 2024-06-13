type ButtonTypeEnum = 'accordion' | 'link' | 'primary' | 'regular' | 'stripped' | 'tab'
type CardTypeEnum = 'accordion' | 'dialog' | 'regular' | 'tab'
type HeadingLevelEnum = '1' | '2' | '3'
type ListTypeEnum = 'horisontal' | 'ordered' | 'unmarked' | 'unordered'
type TextSizeEnum = 'smallest' | 'smaller' | 'regular' | 'bigger' | 'biggest'


interface AccordionProps {
  accContainerTag?: keyof JSX.IntrinsicElements,
  data: ContentItemProps[],
  accWrapTag?: keyof JSX.IntrinsicElements,
  buttonWrapTag?: keyof JSX.IntrinsicElements,
  cardWrapTag?: keyof JSX.IntrinsicElements
}

interface ButtonProps {
  children?: React.ReactNode,
  controlledID?: string,
  customStyle?: string,
  handleClick: () => void,
  isActive?: boolean,
  isExpandable?: boolean,
  title: string
  type: ButtonTypeEnum,
  wrap?: keyof JSX.IntrinsicElements,
}

interface CardDataProps {
  heading?: string,
  link?: LinkProps,
  text: CardTextProps[] 
}

interface CardProps {
  children?: React.ReactNode,
  controllingID?: string,
  data?: CardDataProps,
  direction?: string,
  id?: string,
  isActive?: boolean,
  type?: CardTypeEnum,
  wrap?: keyof JSX.IntrinsicElements
}

interface CardTextProps {
  list?: ListProps,
  paragraph?: string
}

interface ContentItemProps {
  buttonID: string,
  buttonText: string,
  buttonTitle: string,
  cardData: CardDataProps,
  cardID: string
}

interface HeadingProps {
  children: React.ReactNode,
  level: HeadingLevelEnum,
  padded?: boolean,
  size?: TextSizeEnum,
}

interface LinkProps {
  text: React.ReactNode,
  title: string,
  url: string
}

interface ListProps {
  items: string[] | LinkProps[],
  padded?: boolean,
  type: ListTypeEnum
}

interface TextProps {
  children: React.ReactNode,
  padded?: boolean,
  paragraph?: boolean
  size?: TextSizeEnum,
  tag?: keyof JSX.IntrinsicElements
}


export type {
  AccordionProps,
  ButtonProps,
  CardProps,
  CardDataProps,
  HeadingProps,
  LinkProps,
  ListProps,
  TextProps
}