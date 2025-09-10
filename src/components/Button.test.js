// src/components/Button.test.js

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Test Button</Button>);
    const button = getByText('Test Button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls the onClick handler with the provided event when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Test Button</Button>);
    const button = getByText('Test Button');
    const mockEvent = { preventDefault: jest.fn() };
    fireEvent.click(button, mockEvent);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('renders with disabled state', () => {
    const { getByText } = render(<Button disabled>Test Button</Button>);
    const button = getByText('Test Button');
    expect(button).toBeDisabled();
  });

  it('renders with loading state', () => {
    const { getByText } = render(<Button loading>Test Button</Button>);
    const button = getByText('Test Button');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toHaveAttribute('disabled', '');
  });

  it('renders with loading and disabled state', () => {
    const { getByText } = render(<Button loading disabled>Test Button</Button>);
    const button = getByText('Test Button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });
});