import { render, screen } from '@testing-library/react';
import Header from '../components/Header'; // Ensure the path is correct

test("renders a <header> element", () => {
  render(<Header name="Test Header" />); // Provide the required 'name' prop
});

test("renders a <h1> with the blog name", () => {
  render(<Header name="Underreacted" />);
  const h1 = screen.getByText("Underreacted");
  expect(h1.tagName).toBe("H1");
});

