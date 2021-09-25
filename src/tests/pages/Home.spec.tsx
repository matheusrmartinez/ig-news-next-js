import { render, screen} from '@testing-library/react'
import React from 'react'
import { mocked } from 'ts-jest/utils'
import Home, {getStaticProps} from '../../pages'
import {stripe} from '../../services/stripe'

jest.mock('next/router')
jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null,false]
    }
  }
)
jest.mock('../../services/stripe')

describe('Home page', () => {
  it('renders correctly',  () => {
    render (<Home product={{productId: 'fake-price-id', amount: '300' }} />)
    expect(screen.getByText('for 300 month')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const retrieveStripePricesMocked = mocked(stripe.prices.retrieve)

    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-id',
      unit_amount: 1000,
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-id',
            amount: '$10.00'
          }
        }
      })
    )
  })
})
