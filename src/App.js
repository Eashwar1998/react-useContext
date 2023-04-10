import React from 'react';
import './style.css';
import Section from './components/Sections';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Section>
        <Header>This is the h1 header </Header>
        <Header>This is the h1 header </Header>
        <Header>This is the h1 header </Header>
        <Section>
          <Header>This is the h2 header </Header>
          <Header>This is the h2 header </Header>
          <Header>This is the h2 header </Header>
          <Section>
            <Header>This is the h3 header </Header>
            <Header>This is the h3 header </Header>
            <Header>This is the h3 header </Header>
          </Section>
        </Section>
      </Section>
    </div>
  );
}
