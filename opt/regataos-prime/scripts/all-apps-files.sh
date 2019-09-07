#!/bin/bash

cd /tmp/regataos-prime/

kmsg=$(ls | grep noapps)
echo $kmsg

if [[ $kmsg == *"noapps"* ]]; then
	echo "all apps" > /tmp/regataos-prime/all-apps-dri.txt
else
	rm -f /tmp/regataos-prime/all-apps-dri.txt
fi
