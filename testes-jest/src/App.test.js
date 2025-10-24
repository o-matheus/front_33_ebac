import { render, screen } from '@testing-library/react'
import App from "./App";

describe("Testes para o componente principal", () => {
  test('Teste de renderização', () => {
    const { debug } = render(<App/>)
    debug()  
    expect(screen.getByText('cadastrar')).toBeInTheDocument()
  })
})