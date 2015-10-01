/**
 * Created by Illia_Shevchenko on 29.09.2015.
 */
import listSore from './list-store-mock'


export default {
    filter: listSore.filter.bind(listSore),
    select: () => {}
};