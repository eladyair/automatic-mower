require('babel-runtime/regenerator');
require('./main.css');
require('./index.html');

import file from './file';
import Mower from './mower';

/*
 * Going over all the mowers in the file and printing their final poistion and direction
 */
function run(file) {
    var mower = null;

    for (let i = 0; i < file.mowers.length; i++) {
        mower = new Mower(file.size, file.mowers[i]);

        mower.start();

        console.log(mower.getEndPosition());
    }
}

run(file);
