//this is blueprint for mixins (kinda like traits in PHP or multiple inheritance on 1 level in Python)
//your class is class Something extends mixin(mixin1, mixin2, mixin3)
//great JS-OOP magic

export function mixin(...mixins) {

    const fn = function() {};

    Object.assign(fn.prototype, ...mixins);

    return fn;

}

export function staticMixin(objToMix, ...mixins) {

    Object.assign(objToMix, ...mixins);

    return objToMix;

}