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
    label: "Country",
    subItem: [
      {
        id: "1_1",
        label: "Available Countries",
        url: "available-countries",
        target: "_self",
      },
      {
        id: "1_2",
        label: "Country Borders",
        url: "country-borders",
        target: "_self",
      },
    ],
  },
  // {
  //   id: "2",
  //   label: "10 Minute School",
  //   subItem: [
  //     {
  //       id: "2_1",
  //       label: "Next 10 Minute School",
  //       url: "rul2_1",
  //       target: "_self",
  //     },
  //     {
  //       id: "2_1",
  //       label: "Worldwide 10 Minute School",
  //       url: "rul2_1",
  //       target: "_self",
  //     },
  //   ],
  // },
];
export default menuItems;
