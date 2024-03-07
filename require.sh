#!/usr/bin/env bash

######################################################################
# @author      : Linus Fernandes (linusfernandes at gmail dot com)
# @file        : require
# @created     : Thursday Mar 07, 2024 18:52:19 IST
#
# @description :
######################################################################

require() {
  hash "$@" || exit
}
