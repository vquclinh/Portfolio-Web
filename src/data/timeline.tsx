export type TimelineEvent = {
  id: string;
  date: string;
  description: string;
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t1",
    date: "09/2022",
    description: "Bắt đầu hành trình đại học tại Khoa CNTT, HCMUS.",
  },
  {
    id: "t2",
    date: "12/2024",
    description: "Hoàn thành Spotify Console UI bằng C++ và Rust.",
  },
  {
    id: "t3",
    date: "03/2025",
    description: "Bắt đầu research về Discrete Diffusion Models.",
  },
];