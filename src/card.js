import React from 'react';
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';

const container = {
  margin: '10vh 0',
  '@media(min-width: 600px)': {
    
  },
};

const icon = {
  fontSize: 24,
  padding: 15,
  verticalAlign: 'middle',
  paddingLeft: 0,
  color: '#0078d4'
}

const styles = {
  cardStyles: {
    root: {
      background: 'white',
      padding: 20,
      borderTop: '5px solid #0078d4',
      width: '95%',
      maxWidth: '95%',
      margin: '20px auto',
    }
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
       color: '#0c035e',
    }
  },
  amount: {
    root: {
      fontSize: 26,
      paddingBottom: 20,
      paddingTop: 30,
    }
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0078d4',
    }
  }
};

const cards = [
  {
    title: 'Balance',
    amount: 'INR',
    icon: 'Money',
    percentage: '0.0',
  },
  {
    title: ' Expenses',
    amount: 'INR',
    icon: 'PaymentCard',
    percentage: '0.0'
  },
  {
    title: 'Income',
    amount: 'INR',
    icon: 'Savings',
    percentage: '0.0'
  }
]

const CardsSection = () => {
  initializeIcons();
  return (
    <div class="ms-Grid">
    <div className="ms-Grid-row" style={container}>
      {cards.map((card) => (
        <div className="ms-Grid-col ms-sm12 ms-lg4">
          <Card styles={styles.cardStyles}>
            <Card.Section>
              <Card.Item grow={1}>
                <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                <Text styles={styles.header}>{card.title}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.amount}>{card.amount}</Text>
              </Card.Item>
             </Card.Section>
          </Card>
        </div>
      ))}
    </div>
     </div>
  );
};

export default CardsSection;