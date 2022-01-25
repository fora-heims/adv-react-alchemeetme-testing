import { screen, render } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const profileName = await screen.findByText(/fora/i)

  expect(profileName).toBeInTheDocument()
  expect(screen.getByRole('img', { name: /alchemy/i })).toBeInTheDocument()

  expect(screen.getByRole('banner')).toHaveStyle({
    background: 'var(--grey)',
  })
})
