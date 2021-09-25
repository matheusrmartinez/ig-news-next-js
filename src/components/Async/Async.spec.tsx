import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Async } from '.';

it('renders correcly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello world')).toBeInTheDocument();
  // expect(screen.getByText('Button')).toBeInTheDocument(); // Não irá funcionar pois há um delay para renderizar o Button.
  expect(await screen.findByText('Button')).toBeInTheDocument(); // Espera algo aparecer em tela (Assíncrono)
  await waitFor(() => {
    return expect(screen.getByText('Button')).toBeInTheDocument(); // Outra maneira de aguardar um componente ser renderizado, é útilizando o waitFor + queryByText (Síncrono, porém retorna erro caso não encontre o elemento em tela.)
  });
  // await waitFor(() => {
  //   return expect(screen.queryByText('Button')).not.toBeInTheDocument(); // Desta maneira aguarda um componente ser removido em tela. (Síncrono, porém não retorna erro caso não encontre o elemento em tela.)
  // });
});
