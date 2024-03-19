'use client'

import React from 'react'
import { AuthProvider } from './Auth'
import { CartProvider } from './Cart'
import { ThemeProvider } from './Theme'
import { FilterProvider } from './Filter'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FilterProvider>
          <CartProvider>{children}</CartProvider>
        </FilterProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
