import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from '../PricingItem/PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => {
  return (
    <ul className={styles.pricingPlan}>
      {items.map(item => (
        <li className={styles.item} key={item.label}>
          <PricingItem
            label={item.label}
            icon={item.icon}
            capacity={item.capacity}
            price={item.price}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PricingPlan;
