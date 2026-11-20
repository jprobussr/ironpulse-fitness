import MembershipCard from './MembershipCard.jsx';
import './Memberships.css';

const membershipPlans = [
  {
    id: 1,
    name: 'Basic',
    price: 19,
    features: ['Gym Access', 'Cardio Equipment'],
  },
  {
    id: 2,
    name: 'Pro',
    price: 39,
    features: ['Everything in Basic', 'Group Classes', 'Locker Access'],
  },
  {
    id: 3,
    name: 'Elite',
    price: 59,
    features: ['Everything in Pro', 'Personal Training', 'Guest Passes'],
  },
];

const Memberships = () => {
  return (
    <section id="memberships" className="memberships">
      <h2 className="memberships__title">Choose your Membership</h2>
      <div className="memberships__grid">
        {membershipPlans.map((plan) => {
          return (
            <MembershipCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              features={plan.features}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Memberships;
