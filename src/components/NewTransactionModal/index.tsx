export function NewTransactionModal() {
  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  );
}
