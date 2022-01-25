import { screen, render } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  // - header image
  const headerImage = screen.getByRole('img', { name: /alchemy/i })
  expect(headerImage).toBeInTheDocument()

  // - profile name
  const profileName = await screen.findByText(/fora/i)
  expect(profileName).toBeInTheDocument()

  // - Background Color (stretch)
})
