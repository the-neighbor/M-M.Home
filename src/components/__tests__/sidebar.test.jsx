import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../sidebar';

describe('Sidebar Component', () => {
  test('renders Sidebar component', () => {
    render(<Sidebar />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('initially hides the sidebar', () => {
    render(<Sidebar />);
    const sidebarElement = screen.queryByText(/Home/i);
    expect(sidebarElement).not.toBeInTheDocument();
  });

  test('toggles the sidebar visibility', () => {
    render(<Sidebar />);
    const buttonElement = screen.getByRole('button');
    
    // Click to show sidebar
    fireEvent.click(buttonElement);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    // Click to hide sidebar
    fireEvent.click(buttonElement);
    expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
  });

  test('hides the sidebar when hideSidebar is called', () => {
    render(<Sidebar />);
    const buttonElement = screen.getByRole('button');
    
    // Show sidebar
    fireEvent.click(buttonElement);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    // Hide sidebar
    fireEvent.click(buttonElement); // This will hide the sidebar
    expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
  });

  test('contains correct links when sidebar is visible', () => {
    render(<Sidebar />);
    const buttonElement = screen.getByRole('button');
    
    // Show sidebar
    fireEvent.click(buttonElement);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});