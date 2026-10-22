import styled from "styled-components";
import { FRIENDS } from "./FRIENDS";
import { useState } from "react";

const ZooContainer = styled.div`

`
const SectionContainer = styled.div`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 6px 6px 0 6px;
  &:hover {
    border-color: #646cff;
  }
`
const AnimalContainer = styled.div`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 6px 6px 0 6px;
  &:hover {
    border-color: #646cff;
  }
`

export function Zoo() {
  const sections = FRIENDS.reduce((acc, friend) => {
    if (!acc[friend.section]) {
      acc[friend.section] = [];
    }
    acc[friend.section].push(friend);
    return acc;
  }, {} as Record<string, typeof FRIENDS>);
  //make state to track which sections are open
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  return (
    <ZooContainer >
      {Object.entries(sections).map(([section, friends]) => (
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
          {openSections.has(section) && friends.map((friend) => (
            <AnimalContainer key={friend.name}>
              <h3>{friend.animal}: {friend.name}</h3>
              <p>Birthday: {friend.Birthday}</p>
              <p>Info: {friend.info}</p>
            </AnimalContainer>
          ))}
        </div>
      ))}
    </ZooContainer>
  )
}