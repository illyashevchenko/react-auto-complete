/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import alt from '../alt';
import ListActions from '../actions/list-actions';


class ListStore {
  constructor() {
    this.list = [];

    this.bindListeners({
      filter: ListActions.FILTER
    });
  }

  filter({ query, start, count }) {
    console.log('Query list: ', query, start, count);// eslint-disable-line no-console
    query = query.toUpperCase();

    setTimeout(() => {
      this.list = ListStore.list
          .map((item) => item.firstName)
          .filter((listItem) => listItem.toUpperCase().includes(query))
          .slice(start, start + count);
    }, 1000);
  }
}


/*eslint-disable quotes, quote-props */
ListStore.list = [
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


export default alt.createStore(ListStore, 'ListStore');