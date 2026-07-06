export interface FacilityRequest {
  id: number;
  title: string;
  location: string;
  reportedBy: string;
  status: "Awaiting Review" | "Approved" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High" | "Emergency";
}
