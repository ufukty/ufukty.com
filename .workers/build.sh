#!/bin/bash

set -ve

./kask build -in src -out public -domain / -v -cfw
