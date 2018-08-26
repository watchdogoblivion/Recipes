import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count, 
            unit,
            ingredient
        }

        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}

//replacement for uniqid
// const idList = [];
// let uniqueID = () => {

//     let UID = 0;

//     if(idList) idList.sort(function(a, b){return a-b});
//     idList.forEach(num => {
//         if (UID === num) {
//             UID += 1;
//         }
//     });

//     idList.push(UID);

//     return UID;
// }