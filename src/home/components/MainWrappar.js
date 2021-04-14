import React from 'react';

const MainWrappar = ({children}) => {
  return (
    <main className="main">
      <section className="products_cart">
        <div className="container">
          {children}
        </div>
      </section>
    </main>
  );
};
export default MainWrappar;
