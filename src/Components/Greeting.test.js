import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting';

const server = setupServer(
  rest.get('https://run.mocky.io/v3/68d1f1f8-4d13-4089-a916-c797aed760ca', (req, res, ctx) => {
    return res(ctx.json({greeting: 'HALO Generasi gigih!'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  render(<Greeting />)

  userEvent.click(screen.getByText('Load Greeting'))

  await screen.findByRole('heading', {name: 'HALO Generasi gigih!'})

  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})