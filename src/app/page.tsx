import type { Metadata } from 'next';
import Navbar from './components/Navbar';


export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function Home() {
  return (
    <main>
      <Navbar /> 
    </main>
  )
}