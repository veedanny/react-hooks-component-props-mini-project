import { render, screen } from '@testing-library/react';
import Header from "../components/Header";

test("renders a <header> element", () => {


  render(<Header name="Underreacted" />);
  const h1 = screen.queryByText("Underreacted")
  expect(h1.tagName).toBe("H1");
});

test('renders the correct child components', () => {

  // Use the correct query method and selector
  const childElement = screen.queryByText(/Child Component Text/i);

  // Check if the element is in the document
  
});
;
