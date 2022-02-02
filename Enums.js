
class EnumInstance {
    template = null;
    property = null;
    constructor(template) {
        this.template = template;
        this.property = null;
    }
    set(property) {
        this.property = property;
    }
    compare(property) {
        return this.property == property;
    }
}

class EnumTemplate {
    properties = [];
    instance = null;
    addProperty(property) {
        property.instance = this.instance;
        this.properties.push(property);
    }
    getProperty(identifier) {
        for(const property of this.properties) {
            if(property.identifier === identifier) {
                return property;
            }
        }
        return null;
    }
    constructor() {
        this.properties = [];
    }
    createInstance() {
        return new EnumInstance(this);
    }
}

class EnumProperty {
    index = 0;
    identifier = "";
    instance = null;
    constructor(index, identifier) {
        this.index = index;
        this.identifier = identifier;
    }
}

export default {
    EnumInstance: EnumInstance,
    EnumTemplate: EnumTemplate,
    EnumProperty: EnumProperty
};