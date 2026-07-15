import type { FacilityRequest } from "../types/request";

export const sampleRequests: FacilityRequest[] = [
  {
    id: 1042,
    title: "Projector not working",
    location: "Classroom 204",
    reportedBy: "Mrs. Smith",
    status: "In Progress",
    priority: "High",
  },
  {
    id: 1041,
    title: "Tables needed for youth night",
    location: "Parish Hall",
    reportedBy: "Youth Ministry",
    status: "Approved",
    priority: "Medium",
  },
  {
    id: 1038,
    title: "Restroom soap dispenser empty",
    location: "Elementary Building",
    reportedBy: "School Office",
    status: "Completed",
    priority: "Low",
  },
];
