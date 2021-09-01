import moment from "moment";

const TableItems = [
    {
        category: 'Food',
        description: "All my food",
        date: moment().format('l'),
        money: 25,
    },
    {
        category: 'Travel',
        description: "buy a tent",
        date: moment().format('l'),
        money: 180,
    },
    {
        category: 'Health',
        description: "Medicine",
        date: moment().format('l'),
        money: 13,
    },
];

export default TableItems;