/**
 * @description 定义带依赖的functiom
 * @author xinyang3
 * @date 2020/7/19
 */
define([
    'app/math',
    './def-obj.js'
], function(math) {
    'use strict';
    
    return math('abc', 'abcde')
});