import { User } from "@prisma/client";

export interface MarkerProps {
  id: String;
  primaryPartner: String;
  secondaryPartner: String;
  receivingOrgName: String;
  receivingOrgIdNumber: String;
  typeOfOrganization: String;
  receivingOrgAddress: String;
  receivingOrgContactName: String;
  receivingOrgContactEmail: String;  
  receivingOrgPhoneNumber: String;
  lng: number;
  lat: number;
  userId: String;   
  createdAt: Date;
  user: User;
};

