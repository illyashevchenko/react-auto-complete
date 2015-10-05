/**
 * Created by Illia_Shevchenko on 29.09.2015.
 */


export default {
    listeners: {
        success: [],
        fail   : []
    },


    bind: function (success, fail = () => {}) {
        if (typeof success !== 'function') {
            return () => {};
        }

        this.listeners.success.push(success);
        this.listeners.fail.push(fail);
        return this.unbind.bind(this, success, fail);
    },


    unbind: function (sucess, fail) {
        let index = this.listeners.success.indexOf(sucess);
        this.listeners.success.splice(index, 1);

        index = this.listeners.fail.indexOf(fail);
        this.listeners.fail.splice(index, 1);
    },


    set: function (result) {
        this.listeners.success.forEach((callback) => callback(result));
    }
};