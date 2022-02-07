import { screen, render } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 2,
  created_at: '2022-01-24T22:01:37+00:00',
  name: 'Fora',
  avatar: 'https://i.pinimg.com/originals/c8/de/fb/c8defbf13c1870d0501f86143e5a7ebb.png',
  header:
    'https://media.istockphoto.com/photos/magical-fairytale-forest-picture-id1082411378?k=20&m=1082411378&s=612x612&w=0&h=GalnNnhN5wVYqKXee-qy8AYrdOUDxEnkJlqC8T0q9dY=',
  likes: [
    'Juggling',
    'Roller Skating',
    'Printmaking',
    'Chemistry',
    'Crystals',
    'Books',
    'Computers',
  ],
  motto: 'You can only be what you are.',
  color: 'Orangered',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const { name, motto, likes } = user
  const userName = await screen.findByRole('heading', { name })

  expect(userName).toBeInTheDocument()
  expect(screen.getByText(motto)).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /interests/i })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: /avatar/i })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: /header/i })).toBeInTheDocument()
  expect(screen.getAllByRole('listitem').length).toEqual(likes.length)
})

test('The user object passed into the Home component as a prop has the correct structure', async () => {
  render(<Home user={user} />)

  expect(user).toHaveProperty('id')
  expect(user).toHaveProperty('name')
  expect(user).toHaveProperty('avatar')
  expect(user).toHaveProperty('header')
  expect(user).toHaveProperty('likes')
  expect(user).toHaveProperty('motto')
  expect(user).toHaveProperty('color')
})
