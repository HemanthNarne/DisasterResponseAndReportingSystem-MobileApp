export interface Report {
  reportID: string,
  reportedBy: string,
  incidentName: string,
  location: {
    lat: Number,
    lng: Number
  },
  files: string,
  casualties: {
    red: Number,
    yellow: Number,
    green: Number,
    black: Number
  },
  structuralDamage: string,
  fire: string,
  utilities: string,
  hazmat: string,
  rescueteam:string,
  others: string
}
