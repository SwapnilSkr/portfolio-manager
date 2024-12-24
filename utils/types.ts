export type ChamberType = {
  id?: number;
  chamberName: string;
  address: string;
  mobile: string;
  timings: string;
};

export type ServiceType = {
  id?: number;
  name: string;
  points: string[];
};

export type ExpertiseType = {
  id?: number;
  name: string;
  para1: string;
  para2: string;
};
