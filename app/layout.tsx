import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MessyTurtule — Loyalty made simple',
  description: 'One app for loyalty cards, stamps, rewards and offers.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
