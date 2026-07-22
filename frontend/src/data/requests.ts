import type { FacilityRequest } from "../types/request";

export const sampleRequests: FacilityRequest[] = [
  {
    id: 1042,
    title: "Projector not working",
    description:
      "The classroom projector powers on, but no image appears from the teacher computer.",
    location: "Classroom 204",
    reportedBy: "Mrs. Smith",
    reportedAt: "July 21, 2026 at 8:15 AM",
    status: "In Progress",
    priority: "High",
    assignedTo: "Aaron Noelke",
  },
  {
    id: 1043,
    title: "Water leaking under sink",
    description:
      "Water is collecting beneath the sink cabinet and appears to be coming from the drain connection.",
    location: "Elementary Building — Room 112",
    reportedBy: "Ms. Johnson",
    reportedAt: "July 21, 2026 at 9:05 AM",
    status: "Awaiting Review",
    priority: "Emergency",
  },
  {
    id: 1044,
    title: "Replace hallway light",
    description:
      "One ceiling light near the west stairwell is flickering and occasionally turns off.",
    location: "Second Floor Hallway",
    reportedBy: "Mr. Davis",
    reportedAt: "July 20, 2026 at 2:30 PM",
    status: "Approved",
    priority: "Medium",
    assignedTo: "Aaron Noelke",
  },
];
