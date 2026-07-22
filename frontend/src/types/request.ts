export type RequestStatus =
  | "Awaiting Review"
  | "Approved"
  | "In Progress"
  | "Completed";

export type RequestPriority = "Low" | "Medium" | "High" | "Emergency";

export interface FacilityRequest {
  id: number;
  title: string;
  description: string;
  location: string;
  reportedBy: string;
  reportedAt: string;
  status: RequestStatus;
  priority: RequestPriority;
  assignedTo?: string;
}
