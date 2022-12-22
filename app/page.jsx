import { Component1 } from './component1';
import { Component2 } from './component2.client';

import '../styles/3.css';

export default function Home() {
  return (
    <main>
      <Component1 />
      <Component2 />
      <h2 className="blue">I am a BLUE title in Page (Server Component)</h2>
    </main>
  )
}
