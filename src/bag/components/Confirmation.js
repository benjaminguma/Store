import React, {useState, Fragment} from 'react';
import MultiPart from './MultiPart';
import OrderConfirmation from '../components/OrderConfirmation';
import Cart from '../pages/Cart';

const Confirmation = () => {
  const [redirect, setRedirect] = useState (false);
  const redirectHandler = () => setRedirect (true);
  if (redirect) return <OrderConfirmation />;
  return (
    <Fragment>

      <section className="confirmation">
        <div className="container">
          <MultiPart handleRedirect={redirectHandler} />
          <Cart />
        </div>

      </section>
    </Fragment>
  );
};

export default Confirmation;
