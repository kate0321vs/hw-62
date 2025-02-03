const MarketingCards = () => {
  const marketingCards = [
    {
      title: "Copywriting",
      text:"Our copywriters can provide your website with proper texts."
    },
    {
      title: "Analytics & Research",
      text:"Our copywriters can provide your website with proper texts."
    },
    {
      title:"Sales Growth",
      text:"Our innovative marketing tools provide great sales growth."
    }
  ]

  return (
    <>
      <h2 className="cardsTitle">Professional Marketing Solutions
      </h2>
      <div className="cardsContainer">
        {marketingCards.map((marketingCard, index) => (
          <div className="marketingCard" key={index}>
            <h4 className="cardTitle">{marketingCard.title}</h4>
            <p className="cardText">{marketingCard.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarketingCards;