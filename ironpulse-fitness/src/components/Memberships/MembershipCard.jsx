import { Check } from 'lucide-react';

const MembershipCard = ({ name, price, features }) => {
  return (
    <article className="memberships__card">
      <h3 className="memberships__name">{name}</h3>
      <p className="memberships__price">${price}/month</p>
      <ul className="memberships__features">
        {features.map((feature) => {
          return (
            <li key={feature} className="memberships__feature">
              <Check className="memberships__check" aria-hidden="true" />
              {feature}
            </li>
          );
        })}
      </ul>
      <button className='memberships__button' type='button'>Join Plan</button>
    </article>
  );
};

export default MembershipCard;
