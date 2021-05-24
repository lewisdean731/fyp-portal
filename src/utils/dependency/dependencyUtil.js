export function howOutOfDate(releaseDate) {
  // https://stackoverflow.com/questions/2627650/why-javascript-gettime-is-not-a-function
  let currentDate = new Date().getTime();
  return currentDate - new Date(releaseDate).getTime();
}

// Work out whether update is major, minor or patch
// Only really works for SemVer-following dependencies
// (which SHOULD be all of them)
export function updateType(dependency){
  let currentVersionArray = dependency.version.split(".");
  let latestVersionArray = dependency.latest_version.split(".");

  if (currentVersionArray[0] !== latestVersionArray[0]) {
    return {type: "MAJOR UPDATE", variant: "danger"}
  }
  if (currentVersionArray[1] !== latestVersionArray[1]) {
    return {type: "MINOR UPDATE", variant: "warning"}
  }
  if (currentVersionArray[2] !== latestVersionArray[2]) {
    return {type: "PATCH UPDATE", variant: "light"}
  }
  return {type: "", variant: "light"}
}