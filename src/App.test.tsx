import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('Main', () => {
  it('renders headline', () => {
    render(<App />);

    expect(screen.getByText('Hello world')).toBeInTheDocument();

    // check if App components renders headline
  });
});
