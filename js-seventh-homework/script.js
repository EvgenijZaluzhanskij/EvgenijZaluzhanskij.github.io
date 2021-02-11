const io = require('console-read-write');


class Enemy {
    constructor (name) {
        this.name = name;
    }

    attack(target, range) {
        if (this.hit_points <= 0) {
            console.log('DUDE, I AM DEAD!')
            return
        }

        if (range > this.range) {
            console.log('Enemy is too far from me. Cant attack');
            return
        }

        if (target.hit_points <= 0) {
            console.log('ENEMY IS DEAD. CANT ATTACK')
            return
        }

        target.getDamage(this.damage);
        if (target.hit_points > 0) {
            console.log(`${this.name} DEALS ${this.damage} DAMAGE TO ${target.name}`)
        }
    }

    getDamage(damage) {
        this.hit_points -= damage;
        if (this.hit_points <= 0) {
            console.log(`${this.name} IS DEAD`)
        }
    }

    battleCry() {
        if (this.hit_points <= 0) {
            console.log('DUDE, I AM DEAD!')
            return
        }
        console.log(`THIS! IS! ${this.name}!`)
    }
}

class Knight extends Enemy {
    constructor (name) {
        super(name)
        this.hit_points = 100;
        this.color = 'red';
        this.damage = 20;
        this.range = 20;

        this.massive_damage = 30;
    }

    attackAll(targets) {
        if (this.hit_points <= 0) {
            console.log('DUDE, I AM DEAD!')
            return
        }
        console.log('GET OVER HERE!!!!')

        const old_damage  = this.damage
        this.damage = this.massive_damage
        targets.forEach(element => {
            this.attack(element.target, element.range)
        });

        this.damage = old_damage;
    }
}

class Elfe extends Enemy {
    constructor (name) {
        super(name)
        this.hit_points = 90;
        this.color = 'blue';
        this.damage = 15;
        this.range = 40;

        this.spell_damage = 50;
        this.spell_range = 30
    }

    magicAttack(target, range) {
        if (this.hit_points <= 0) {
            console.log('DUDE, I AM DEAD!')
            return
        }

        if (target.hit_points <= 0) {
            console.log('ENEMY IS DEAD. CANT ATTACK')
            return
        }

        if (range > this.spell_range) {
            console.log('Enemy is too far from me. Cant attack');
            return
        }

        console.log('AVADA KEDAVRA!')
        target.getDamage(this.spell_damage)
        if (target.hit_points > 0) {
            console.log(`${this.name} DEALS ${this.spell_damage} DAMAGE TO ${target.name}`)
        }
    }
}

class Dwarf extends Enemy {
    constructor (name) {
        super(name)
        this.hit_points = 80;
        this.color = 'gray';
        this.damage = 30;
        this.range = 10;

        this.axe_damage = 50;
        this.axe_range = 30;
    }

    throwAxe(target, range) {
        if (this.hit_points <= 0) {
            console.log('DUDE, I AM DEAD!')
            return
        }

        if (target.hit_points <= 0) {
            console.log('ENEMY IS DEAD. CANT ATTACK')
            return
        }

        if (range > this.axe_range) {
            console.log('Enemy is too far from me. Cant attack');
            return
        }

        console.log('FUS! RO! DAH!')
        target.getDamage(this.axe_damage)
        if (target.hit_points > 0) {
            console.log(`${this.name} DEALS ${this.axe_damage} DAMAGE TO ${target.name}`)
        }
    }
}

async function main() {
    const distancesMap = {
        'knight_elfe': 5,
        'knight_dwarf': 5,
        'elfe_dwarf': 5,
    }

    const knight = new Knight('Aragorn')
    const elfe = new Elfe('Legolas')
    const dwarf = new Dwarf('Gimli')

    io.write('Input distance between Knight and Elfe')
    inputValue = await io.read()
    distancesMap.knight_elfe = Number(inputValue)

    io.write('Input distance between Knight and Dwarf')
    inputValue = await io.read()
    distancesMap.knight_dwarf = Number(inputValue)

    io.write('Input distance between Dwarf and Elfe')
    inputValue = await io.read()
    distancesMap.elfe_dwarf = Number(inputValue)

    // DEMONSTRATION
    knight.battleCry()
    knight.attack(dwarf, distancesMap.knight_dwarf)

    const allTargets = [
        {
            "target": elfe,
            "range": distancesMap.knight_elfe
        },
        {
            "target": dwarf,
            "range": distancesMap.knight_dwarf
        }
    ]
    knight.attackAll(allTargets)


    elfe.battleCry()
    elfe.attack(knight, distancesMap.knight_elfe)

    elfe.magicAttack(knight, distancesMap.knight_elfe)

    dwarf.battleCry()
    dwarf.attack(knight, distancesMap.knight_dwarf)

    dwarf.throwAxe(elfe, distancesMap.elfe_dwarf)


    for (let i = 0; i < 3; i++) {
        knight.attack(dwarf, distancesMap.knight_dwarf)
    }
}

main()