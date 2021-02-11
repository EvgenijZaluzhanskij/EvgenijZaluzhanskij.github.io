class Weapon {
    constructor(name) {
        this.name = name;
        this.item_type = 'weapon';
    }
}

class OgreAxe extends Weapon {
    constructor(name) {
        super(name);
        this.required_unit_types = ['ogre']
        this.required_level = 3;
        this.attributes = {
            'strength': 25,
            'intelligence': 2,
            'agility': -5,
        };
    }
}

class ElvesBow extends Weapon {
    constructor(name) {
        super(name);
        this.required_unit_types = ['elfe']
        this.required_level = 2;
        this.attributes = {
            'strength': 3,
            'intelligence': 5,
            'agility': 15,
        };
    }
}

class TheStickOfTruth extends Weapon {
    constructor(name) {
        super(name);
        this.required_unit_types = ['wizard']
        this.required_level = 1;
        this.attributes = {
            'strength': 4,
            'intelligence': 22,
            'agility': 10,
        };
    }
}

class Hat {
    constructor(name) {
        this.name = name;
        this.item_type = 'hat';
    }
}

class OgreHelmet extends Hat {
    constructor(name) {
        super(name);
        this.required_unit_types = ['ogre']
        this.required_level = 4;
        this.attributes = {
            'strength': 15,
            'intelligence': 5,
            'agility': 1,
        };
    }
}

class ElvesTriangle extends Hat {
    constructor(name) {
        super(name);
        this.required_unit_types = ['elfe']
        this.required_level = 4;
        this.attributes = {
            'strength': 10,
            'intelligence': 3,
            'agility': 15,
        };
    }
}

class Wizardry extends Hat {
    constructor(name) {
        super(name);
        this.required_unit_types = ['wizard']
        this.required_level = 4;
        this.attributes = {
            'strength': 1,
            'intelligence': 8,
            'agility': 17,
        };
    }
}

class Armor {
    constructor(name) {
        this.name = name;
        this.item_type = 'armor';
    }
}

class Kolchuga extends Armor {
    constructor (name) {
        super(name);
        this.required_unit_types = ['ogre']
        this.required_level = 10;
        this.attributes = {
            'strength': 45,
            'intelligence': 15,
            'agility': 10,
        };
    }
}

class Vodolazka extends Armor {
    constructor (name) {
        super(name);
        this.required_unit_types = ['elfe']
        this.required_level = 11;
        this.attributes = {
            'strength': 20,
            'intelligence': 9,
            'agility': 55,
        };
    }
}

class Balahon extends Armor {
    constructor (name) {
        super(name);
        this.required_unit_types = ['wizard']
        this.required_level = 8;
        this.attributes = {
            'strength': 14,
            'intelligence': 35,
            'agility': 14,
        };
    }
}

class Pants {
    constructor(name) {
        this.name = name;
        this.item_type = 'pants';
    }
}

class Sharovari extends Pants {
    constructor(name) {
        super(name);
        this.required_unit_types = ['ogre']
        this.required_level = 7;
        this.attributes = {
            'strength': 30,
            'intelligence': 10,
            'agility': 12,
        };                
    }
}

class Losini extends Pants {
    constructor(name) {
        super(name);
        this.required_unit_types = ['elfe']
        this.required_level = 12;
        this.attributes = {
            'strength': 12,
            'intelligence': 12,
            'agility': 41,
        };                
    }
}

class Pantaloni extends Pants {
    constructor(name) {
        super(name);
        this.required_unit_types = ['wizard']
        this.required_level = 15;
        this.attributes = {
            'strength': 5,
            'intelligence': 55,
            'agility': 20,
        };                
    }
}

class Boots {
    constructor(name) {
        this.name = name;
        this.item_type = 'boots';
    }
}

class Valenki extends Boots {
    constructor (name) {
        super(name);
        this.required_unit_types = ['ogre']
        this.required_level = 35;
        this.attributes = {
            'strength': 75,
            'intelligence': 24,
            'agility': 39,
        };  
    }
}

class Sapozhki extends Boots {
    constructor (name) {
        super(name);
        this.required_unit_types = ['elfe']
        this.required_level = 29;
        this.attributes = {
            'strength': 30,
            'intelligence': 18,
            'agility': 58,
        };  
    }
}

class Slanci extends Boots {
    constructor (name) {
        super(name);
        this.required_unit_types = ['wizard']
        this.required_level = 19;
        this.attributes = {
            'strength': 25,
            'intelligence': 48,
            'agility': 20,
        };  
    }
}

class Unit {
    constructor (name) {
        this.name = name;
        this.unit_class = '';
        
        this.level = 1;
        this.strength = 10;
        this.intelligence = 10;
        this.agility = 10;

        this.equipment = {
            'hat': undefined,
            'armor': undefined,
            'weapon': undefined,
            'pants': undefined,
            'boots': undefined,
        }
    }

    canEquip(item) {
        const is_allowed_by_class = item.required_unit_types.filter((unit_type) => (unit_type === this.unit_class)).length > 0
        const is_allowed_by_level = this.level >= item.required_level

        if (!is_allowed_by_class) {
            console.log(`Can't equip. Required unit class: ${item.required_unit_types.join(', ')}`)
            return false
        }

        if (!is_allowed_by_level) {
            console.log(`Can't equip. Required level: ${item.required_level}`)
            return false
        }

        return true
    }

    increaseAttributesByItem(item) {
        this.strength += item.attributes.strength
        this.agility += item.attributes.agility
        this.strength += item.attributes.strength
    }

    decreaseAttributesByItem(item) {
        this.strength -= item.attributes.strength
        this.agility -= item.attributes.agility
        this.strength -= item.attributes.strength
    }

    dropItemByTypeName(item_type) {
        const item = this.equipment[item_type]

        if (item === undefined) {
            console.log('Cant drop empty equipment')
            return
        }

        this.equipment[item_type] = undefined
        this.decreaseAttributesByItem(item)

        return item
    }

    equipItem(item) {
        if (!this.canEquip(item)) {
            return
        }

        if (this.equipment[item.item_type] !== undefined) {
            this.dropItemByTypeName(item.item_type)
        }

        this.equipment[item.item_type] = item
        this.increaseAttributesByItem(item)
    }

    dropHat() {
        dropItemByTypeName('hat')
    }

    dropArmor() {
        dropItemByTypeName('armor')
    }

    dropWeapon() {
        dropItemByTypeName('weapon')
    }

    dropPants() {
        dropItemByTypeName('pants')
    }

    dropBoots() {
        dropItemByTypeName('boots')
    }

    levelUp () {
        this.level += 1;
        console.log(`Congratulations! You have increase your level! Current level ${this.level}`)
    }    
}

class Skeletone extends Unit {
    constructor () {
        super('Kostik');

        this.level = 5;
        this.strength = 20;
        this.intelligence = 20;
        this.agility = 20;

        this.equipment = {};
    }

    canEquip(item) {
        return;
    }

    increaseAttributesByItem(item) {
        return;
    }

    decreaseAttributesByItem(item) {
        return;
    }

    dropItemByTypeName(item_type) {
        return;
    }

    equipItem(item) {
        return;
    }

    dropHat() {
        return;
    }

    dropArmor() {
        return;
    }

    dropWeapon() {
        return;
    }

    dropPants() {
        return;
    }

    dropBoots() {
        return;
    }

    levelUp () {
        return;
    } 
}

class Ogre extends Unit {
    constructor (name) {
        super(name);
        this.unit_class = 'ogre';
    }

    levelUp () {
        super.levelUp()

        this.strength *= 1.5;
        this.intelligence *= 1.1;
        this.agility *= 1.1;
    }
}

class Elfe extends Unit {
    constructor (name) {
        super(name);
        this.unit_class = 'elfe';
    }

    levelUp () {
        super.levelUp()

        this.strength *= 1.1;
        this.intelligence *= 1.1;
        this.agility *= 1.5;
    }
}

class Wizard extends Unit {
    constructor (name) {
        super(name);
        this.unit_class = 'wizard';
    }

    levelUp () {
        super.levelUp()

        this.strength *= 1.1;
        this.intelligence *= 1.5;
        this.agility *= 1.1;
    }

    summonSkeletone() {
        if (this.level < 6) {
            console.log('Required at least level 6 to summon skeletone')
            return
        }

        return new Skeletone()
    }
}


function main() {
    const wizard = new Wizard('Gendalf');

    const wizardHat = new Wizardry('Ne, nu shlypa super prosto');
    const wizardArmor = new Balahon('Zato teplo');
    const wizardWeapon = new TheStickOfTruth('Penetrator 3000');
    const wizardPants = new Pantaloni('Net mne ne stidno');
    const wizardBoots = new Slanci('Glavnoe bez noskov');

    wizard.equipItem(wizardHat)
    let skeletone = wizard.summonSkeletone()

    for (let i = 0; i < 40; i++) {
        wizard.levelUp()
    }

    wizard.equipItem(wizardHat)
    wizard.equipItem(wizardArmor)
    wizard.equipItem(wizardWeapon)
    wizard.equipItem(wizardPants)
    wizard.equipItem(wizardBoots)

    skeletone = wizard.summonSkeletone()

    console.log(skeletone)

    console.log(wizard)
}

main()