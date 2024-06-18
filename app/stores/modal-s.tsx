import { makeAutoObservable } from 'mobx'


interface RefObj {
  [key: string]: HTMLDialogElement
}


export const modalStore = makeAutoObservable({
  refObj: {} as RefObj,

  openModal(node: HTMLDialogElement) {
    node.showModal()

    const documentWidth = document.documentElement.clientWidth
    const windowWidth = window.innerWidth
    const scrollbarWidth = windowWidth - documentWidth
    
    document.body.setAttribute('style', `overflow:hidden; margin-right:${scrollbarWidth}px;`)
  },

  closeModal(node: HTMLDialogElement) {
    node.setAttribute('close', '')
    node.addEventListener('animationend', () => {
      node.removeAttribute('close')
      node.close()
    }, {once: true})

    document.body.removeAttribute('style')
  }
})
