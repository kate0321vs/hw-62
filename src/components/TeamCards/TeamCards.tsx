import { Card } from 'react-bootstrap';

const TeamCards = () => {
  const teamMembers = [
    {
      name: 'Jane Logan',
      position: 'Founder & CEO',
      img: 'https://livedemo00.template-help.com/wt_prod-19366/images/team-1-369x315.jpg',
    },
    {
      name: 'Michael Lee',
      position: 'Marketing Analyst',
      img: 'https://livedemo00.template-help.com/wt_prod-19366/images/team-2-369x315.jpg',
    },
    {
      name: 'Kate Wilson',
      position: 'Advertising Expert',
      img: 'https://livedemo00.template-help.com/wt_prod-19366/images/team-3-369x315.jpg',
    },
    {
      name: 'Michael Scott',
      position: 'Brand Manager',
      img: 'https://pbs.twimg.com/profile_images/749995385637199873/pS3JLyKf_400x400.jpg',
    },
  ];

  return (
    <>
      {teamMembers.map((member, index) => (
        <Card style={{ width: '18rem', padding:'0' }} key={index}>
          <Card.Img className="TeamImg" variant="top" src={member.img} />
          <Card.Body>
            <Card.Title>{member.name}</Card.Title>
            <Card.Text>
              {member.position}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default TeamCards;