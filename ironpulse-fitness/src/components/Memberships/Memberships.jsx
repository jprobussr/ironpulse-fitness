import "./Memberships.css";
import { Check } from "lucide-react";

const membershipPlans = [
  {
    id: 1,
    name: "Basic",
    price: 19,
    features: ["Gym Access", "Cardio Equipment"],
  },
  {
    id: 2,
    name: "Pro",
    price: 39,
    features: ["Everything in Basic", "Group Classes", "Locker Access"],
  },
  {
    id: 3,
    name: "Elite",
    price: 59,
    features: ["Everything in Pro", "Personal Training", "Guest Passes"],
  },
];

const Memberships = () => {
  return (
    <section id="memberships" className="memberships">
      <h2 className="memberships__title">Choose your Membership</h2>
      <div className="memberships__grid">
        {membershipPlans.map((plan) => {
          return (
            <article key={plan.id} className="memberships__card">
              <h3 className="memberships__name">{plan.name}</h3>
              <p className="memberships__price">${plan.price}/month</p>
              <ul className="memberships__features">
                {plan.features.map((feature) => {
                  return (
                    <li className="memberships__feature" key={feature}>
                     <Check className="memberships__check" aria-hidden="true" />
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Memberships;
