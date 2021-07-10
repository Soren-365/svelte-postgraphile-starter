#!/bin/dash
echo "\n" >> ~/.profile
echo "PATH=\$PATH:${PWD}/database" >> ~/.profile
echo "export PATH" >> ~/.profile

. ~/.profile

