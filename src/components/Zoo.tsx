import styled from "styled-components";
import { useState } from "react";
import { Animals } from "./Animals";
import { Friends, FRIENDS } from "./Friends";


const ZooContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const SectionContainer = styled.div`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0 20px;
  &:hover {
    border-color: #646cff;
  }
`

export function Zoo() {
  const sections = Friends.reduce((acc, friend) => {
    if (!acc[friend.section]) {
      acc[friend.section] = [];
    }
    acc[friend.section].push(friend);
    return acc;
  }, {} as Record<string, FRIENDS>);
  //make state to track which sections are open
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  return (
    <ZooContainer >
      {Object.entries(sections).map(([section, sectionFriends]) => (
        <div>
          <SectionContainer
            key={section}
            onClick={() => {
              console.log("section clicked", section, openSections);
              if (openSections.has(section)) {
                const newOpenSections = new Set(openSections);
                newOpenSections.delete(section);
                setOpenSections(newOpenSections);
              } else {
                const newOpenSections = new Set(openSections);
                newOpenSections.add(section);
                setOpenSections(newOpenSections);
              }
            }}
          >
            <h2>{section}</h2>
          </SectionContainer>
          {openSections.has(section) && <Animals friends={sectionFriends} />}
        </div>
      ))}
    </ZooContainer>
  )
}