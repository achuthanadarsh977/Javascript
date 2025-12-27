function getShippingInfo(order) {
  const shippingCost = order.amount >= 1000 ? 0 : 100;

  const deliveryDays = order.deliveryType === "EXPRESS" ? 2 : 5;

  return {
    shippingCost,
    deliveryDays,
  };
}

module.exports = { getShippingInfo };
