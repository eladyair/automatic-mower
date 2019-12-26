require('babel-runtime/regenerator');
require('./main.css');
require('./index.html');

import Lawn from './lawn';
import Mower from './mower';

var lawn = new Lawn();
var mower = new Mower();
