/**
 * Created by Illia_Shevchenko on 05.10.2015.
 */

/*eslint-disable quotes, quote-props */
let mockData = [
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
];
/*eslint-enable quotes, quote-props */


export default {
  fetch: function (query, start, count) {
    query = query.toUpperCase();

    return new Promise(function (resolve) {
      setTimeout(() => {
        let data = mockData
            .filter((item) => item.firstName.toUpperCase().includes(query))
            .slice(start, start + count);

        resolve(data);
      }, 1000);
    });
  }
};