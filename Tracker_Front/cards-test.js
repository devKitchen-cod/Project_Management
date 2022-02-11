import React, { useState } from 'react';

const cards = () => {
  const [cardList, setCard] = useState([
    {id:1, order: 2, text: 'card1'},
    {id:2, order: 5, text: 'card2'},
    {id:3, order: 54, text: 'card3'},
    {id:4, order: 4, text: 'card4'}  
  ])

  const [currentCard, setCurrentCard] = useState(null)

  function dragStartHandler(e, card){
    console.log('drag', card)
    setCurrentCard(card)
  }

  function dragEndHandler(e){

  }

  function dragEndHandler(e){
    e.target.style.background = 'white'
  }

  function dragOverHandler(e){
    e.preventDefault()
    e.target.style.background = 'lightgray'

  }

  function dropHandler(e, card){
    e.preventDefault()
    e.preventDefault()
  }


  return (
    <div className = 'app'>
      {cardList.map(card => 
        <div
        onDragStart ={(e) => dragStartHandler(e, card)}
        onDragLeave = {(e) => dragEndHandler(e)}
        onDragEnd ={(e) => dragEndHandler(e)}
        onDragOver = {(e) => dragOverHandler(e)}
        onDrop ={(e) => dropHandler(e, card)}

        draggable = {true}
        className = 'card'>
          {card.text}
        </div>
      
        
        )}
    </div>
  );
};

export default cards;