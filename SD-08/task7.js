export class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.inventory = {};
    }

    addItem(item, quantity) {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
    }

    removeItem(item, quantity) {
        if (this.inventory[item]) {
            this.inventory[item] -= quantity;

            if (this.inventory[item] <= 0) {
                delete this.inventory[item];
            }
        }
    }
}