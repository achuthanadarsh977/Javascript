function canDrive(age, CountryCode) {
  const legalDrive = { US: 16, UK: 17, India: 18 };

  if (!legalDrive[CountryCode]) {
    return "Invalid Age";
  }

  return age >= legalDrive[CountryCode];
}

module.exports = canDrive;
