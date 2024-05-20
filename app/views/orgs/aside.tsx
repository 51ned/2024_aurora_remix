import s from './aside.module.css'


export function Aside({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <aside>
      <div className={s.wrap}>
        { children }
      </div>
    </aside>
  )
}
