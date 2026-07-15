export type RequestStatus =
  | "Awaiting Review"
  | "Approved"
  | "In Progress"
  | "Completed";

export type RequestPriority = "Low" | "Medium" | "High" | "Emergency";

export interface FacilityRequest {
  id: number;
  title: string;
  location: string;
  reportedBy: string;
  status: RequestStatus;
  priority: RequestPriority;
}
