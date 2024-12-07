type MenuItem = {
  id: string;
  label: string;
  url?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  subItem?: MenuItem[];
};
const menuItems: MenuItem[] = [
  {
    id: "1",
    label: "English Center",
    subItem: [
      {
        id: "1_1",
        label: "IELTS Program",
        url: "/product/ielts-live-batch",
        target: "_self",
      },
      {
        id: "1_2",
        label: "All Programs",
        url: "/product/ielts-live-batch",
        target: "_self",
      },
    ],
  },
];
export default menuItems;
