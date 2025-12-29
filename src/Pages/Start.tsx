import avatar from '../assets/mauricio_avatar.png'
import { DialogBox, type DialogActionButton } from '../Components/DialogBox'
export function Start() {
  const actionButtons: DialogActionButton[] = [
    {
      type: 'green',
      label: 'Ok!',
      onClick: () => console.log('clicou em Ok'),
    },
    {
      type: 'red',
      label: 'Não',
      onClick: () => console.log('clicou em não'),
    },
  ]
  return (
    <div className="flex flex-col items-center">
      <h1>This is the start page</h1>

      <DialogBox
        avatar={avatar}
        actionButtons={actionButtons}
        text="Teste Teste teste are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      />
    </div>
  )
}
