#!/bin/bash

#
# Minify images using the guetzli algorithm
# https://github.com/google/guetzli
# It can be very slow.
# Dont use it in a CI process.
#
minify(){
  FILES=$(find "$PWD/assets/images" -type f -name '*.png')
  for f in $FILES
  do
    echo "Processing $f"
    guetzli $f $f
  done
}

if which guetzli >/dev/null; then
  minify
else
  brew update
  brew install guetzli
  minify
fi