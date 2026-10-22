import styled from "styled-components";
import { useState } from "react";
import { FRIENDS } from "./Friends";

const AnimalContainer = styled.div`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0 10px;
  &:hover {
    border-color: #646cff;
  }
`

export function Animals(friends: FRIENDS) {
  const animals = friends.reduce((acc, friend) => {
    if (!acc[friend.animal]) {
      acc[friend.animal] = [];
    }
    acc[friend.animal].push(friend);
    return acc;
  }, {} as Record<string, FRIENDS>);
  const [openAnimal, setOpenAnimals] = useState<Set<string>>(new Set());
  return (Object.entries(animals).map(([animal, animalFriends]) => (
    <div>
      <AnimalContainer
        key={animal}
        onClick={() => {
          console.log("animal clicked", animal, openAnimal);
          if (openAnimal.has(animal)) {
            const newOpenAnimals = new Set(openAnimal);
            newOpenAnimals.delete(animal);
            setOpenAnimals(newOpenAnimals);
          } else {
            const newOpenAnimals = new Set(openAnimal);
            newOpenAnimals.add(animal);
            setOpenAnimals(newOpenAnimals);
          }
        }}
      >
        <h3>{animal}</h3>
      </AnimalContainer>
      {animalFriends.map((friend) => (
        <div key={friend.name}>
          <h4>{friend.name}</h4>
          <p>Birthday: {friend.Birthday}</p>
          <p>Info: {friend.info}</p>
        </div>
      ))
      }
    </div >
  )))
}