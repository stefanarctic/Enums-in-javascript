import Enums from './Enums.js';

/*
 * Example of:
 *
 * enum PlayerType {PLAYER, ENEMY}
 *
*/

const main = (() => {
    const template = new Enums.EnumTemplate();
    const p0 = new Enums.EnumProperty(0, "PLAYER");
    const p1 = new Enums.EnumProperty(1, "ENEMY");
    template.addProperty(p0);
    template.addProperty(p1);
    const instance = template.createInstance();
    const isPlayer = true;
    if(isPlayer) {
        instance.set(template.getProperty("PLAYER"));
    } else {
        instance.set(template.getProperty("ENEMY"));
    }
    if(instance.compare(template.getProperty("PLAYER"))) {
        console.log("Is player!");
    } else {
        console.log("Is not player!");
    }
})();