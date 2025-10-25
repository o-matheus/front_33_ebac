import { fireEvent, render, screen } from '@testing-library/react'
import App from "./App";

describe("Testes para o componente principal", () => {
  test('Teste de renderização', () => {
    render(<App />)
    expect(screen.getByText('cadastrar')).toBeInTheDocument()
  })
  test('Deve adicionar "estudar React" na Lista ', () => {
    render(<App />)
    fireEvent.change(screen.getByTestId('campo-tarefa'), {
      target: {
        value: 'estudar React'
      }
    })
    fireEvent.click(screen.getByTestId('btn-cadastrar'))
    expect(screen.getByText('estudar React')).toBeInTheDocument()
  })
})