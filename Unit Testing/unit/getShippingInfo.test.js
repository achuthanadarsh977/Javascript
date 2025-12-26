const { getShippingInfo } = require('../getShippingInfo');

describe('getShippingInfo', () => {

  test('should give free shipping for orders >= 1000', () => {
    const order = {
      amount: 1200,
      deliveryType: 'STANDARD'
    };

    expect(getShippingInfo(order)).toEqual({
      shippingCost: 0,
      deliveryDays: 5
    });
  });

  test('should charge shipping for orders < 1000', () => {
    const order = {
      amount: 500,
      deliveryType: 'STANDARD'
    };

    expect(getShippingInfo(order)).toEqual({
      shippingCost: 100,
      deliveryDays: 5
    });
  });

  test('should return express delivery days', () => {
    const order = {
      amount: 1500,
      deliveryType: 'EXPRESS'
    };

    expect(getShippingInfo(order)).toEqual({
      shippingCost: 0,
      deliveryDays: 2
    });
  });

});
