<?php
$testfile = explode('.', $argv[1]);
$newfile = sprintf('%s.test.js', $testfile[0]);
exec("touch $newfile");