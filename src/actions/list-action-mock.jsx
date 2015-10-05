/**
 * Created by Illia_Shevchenko on 29.09.2015.
 */
import listStore from '../stores/list-store-mock';


export default {
    filter: listStore.filter.bind(listStore)
};