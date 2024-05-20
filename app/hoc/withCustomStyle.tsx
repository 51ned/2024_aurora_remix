import cn from 'classnames'


interface WithCustomStyleProps {
  customStyle?: string
}


export function withCustomStyle<P extends WithCustomStyleProps>(
  WrappedComponent: React.ComponentType<P>,
  baseClassName: string
) {
  return function WithCustomStyleComponent(props: P) {
    const { customStyle, ...restProps } = props
    const combinedStyle = cn(baseClassName, customStyle)

    return <WrappedComponent {...(restProps as P)} className={combinedStyle} />
  }
}
