import moment from "moment";

const TableItems = [
    {
        category: 'Food',
        description: "All my food",
        date: moment().subtract(5, 'days').format('l'),
        money: 25,
    },
    {
        category: 'Travel',
        description: "buy a tent",
        date: moment().subtract(14, 'days').subtract(3, 'month').format('l'),
        money: 180,
    },
    {
        category: 'Health',
        description: "Medicine",
        date: moment().subtract(2, 'days').subtract(5, 'month').format('l'),
        money: 13,
    },
];

export default TableItems;