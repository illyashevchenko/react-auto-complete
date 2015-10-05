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


    filter: function ({ query, start, count }) {
        console.log('Query list: ', query, start, count);// eslint-disable-line no-console
        query = query.toUpperCase();

        setTimeout(() => {
            let list = this.list
                .map((item) => item.firstName)
                .filter((listItem) => listItem.toUpperCase().includes(query))
                .slice(start, start + count);

            this.listeners.success.forEach((callback) => callback(list));
        }, 1000);
    },

    
    /*eslint-disable quotes, quote-props */
    list: [
        {
            "registered": "Thursday, July 2, 2015 6:51 AM",
            "firstName": "Montoya",
            "name": {
                "last": "Bradford",
                "firstName": "Preston"
            },
            "index": 16
        },
        {
            "registered": "Sunday, April 12, 2015 3:08 AM",
            "firstName": "May",
            "name": {
                "last": "Holloway",
                "firstName": "Tricia"
            },
            "index": 17
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        }
    ]
    /*eslint-enable quotes, quote-props */
};