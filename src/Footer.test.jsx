import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component Rendering', () => {
    test('renders footer content correctly', () => {
        render(<Footer />);

        expect(screen.getByText('WANNA KILL SOMEONE?')).toBeInTheDocument();
        expect(screen.getByText('FAQs')).toBeInTheDocument();
        expect(screen.getByText('BUY A GUN')).toBeInTheDocument();
        expect(screen.getByText('CONTACT US')).toBeInTheDocument();
        expect(screen.getByText('Email: youremail@email.com')).toBeInTheDocument();
        expect(screen.getByText('Phone: +639151866685')).toBeInTheDocument();
        expect(screen.getByTestId('github-icon')).toBeInTheDocument();
        expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
        expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
        expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
        expect(screen.getByText('Absenot Arsenal ©')).toBeInTheDocument();
    });

    test('renders footer styling correctly', () => {
        render(<Footer />);

        expect(screen.getByTestId('footer-container')).toHaveClass('relative');
        expect(screen.getByTestId('footer-background')).toHaveClass('absolute top-0 left-0 w-full overflow-hidden bg-[#060505]');
    });
});
