#!/bin/bash

# Make sure dGPU is off for at least one app
cd /tmp/regataos-prime/

kmsg=$(ls | grep noapps)
echo $kmsg

if [[ $kmsg == *"noapps"* ]]; then
	echo "all apps" > /tmp/regataos-prime/all-apps-dri.txt
else
	rm -f "/tmp/regataos-prime/all-apps-dri.txt"
fi
