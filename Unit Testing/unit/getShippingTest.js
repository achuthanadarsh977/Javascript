function getShippingTest(destination) {
  console.log(`Getting order for ${destination}`);
  return { cost: 10 * Math.random(), estimatedDays: 2 };
}

module.exports = { getShippingTest };
