/**
 * Created by Illia_Shevchenko on 29.09.2015.
 */
import resultStore from '../stores/result-store-mock'


export default {
    set: resultStore.set.bind(resultStore)
};