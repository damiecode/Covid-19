const covid19ImpactEstimator = (data) => {
  const { reportedCases } = data;

  // impact estimations
  const impactCurrentlyInfected = reportedCases * 10;
  const impactInfectionsByRequestedTime = impactCurrentlyInfected * (2 ** factor);

  // severe impact estimations
  const severeImpactCurrentlyInfected = reportedCases * 50;
  const severeImpactInfectionsByRequestedTime = severeImpactCurrentlyInfected * (2 ** factor);
};

export default covid19ImpactEstimator;
