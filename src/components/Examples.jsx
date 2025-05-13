import { useState } from 'react';

import  { EXAMPLES } from '../data';

import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

export function Examples() {
    const [ selectedTopic, setSelectedTopic] =  useState(null);

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
            {!selectedTopic && <p>Please select a topic.</p>}
            {selectedTopic && (
              <>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </> 
            )}
        </div>
      );
    }

    return (
        <Section id="examples" title="Examples">
          <Tabs
            buttons={
            <>
              <TabButton
              onClick={() => handleSelect('components')}
              isSelected={selectedTopic === 'components'}>
              Components
            </TabButton>
            <TabButton
              onClick={() => handleSelect('jsx')}
              isSelected={selectedTopic === 'jsx'}>
              JSX
            </TabButton>
            <TabButton
              onClick={() => handleSelect('props')}
              isSelected={selectedTopic === 'props'}>
              Props
            </TabButton>
            <TabButton
              onClick={() => handleSelect('state')}
              isSelected={selectedTopic === 'state'}>
              State
            </TabButton>
            </>
          }>
            {tabContent}
          </Tabs>
        </Section>
    );
}