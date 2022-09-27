import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CloseButton, Content, Overlay } from './styles';

export function NewTransactionModal() {
  return (
    <div>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>

          <CloseButton>
            <X />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="categoria" required />

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
    </div>
  );
}
