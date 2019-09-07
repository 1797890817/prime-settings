#!/bin/bash

# CPU {

kmsg=$(inxi -C | grep CPU:)
echo $kmsg

kmsg2=$(echo $kmsg | cut -d" " -f -7)
echo $kmsg2
kmsg3=$(echo $kmsg2 | cut -d" " -f 5-)
echo $kmsg3

# }

# iGPU {

kmsg=$(inxi -G | grep Card-1:)
echo $kmsg

kmsg2=$(echo $kmsg | cut -d: -f 3)
echo $kmsg2
kmsg3=$(echo $kmsg2 | cut -d" " -f 2-)
echo $kmsg3

echo $kmsg3

# }

# dGPU {

gpucont='content: "gpuhere";'

kmsg=$(grep -r content /opt/regataos-prime/www/css/style-system/buttom-system-dgpu.css)
echo $kmsg

sed -i "s.$kmsg.$gpucont." /opt/regataos-prime/www/css/style-system/buttom-system-dgpu.css

kmsg=$(inxi -G | grep Card-2)
echo $kmsg

if [[ $kmsg == *"AMD"* ]]; then

	kmsg2=$(echo $kmsg | cut -d: -f 2)
	echo $kmsg2
	kmsg3=$(echo $kmsg2 | cut -d" " -f 2-)
	echo $kmsg3
	kmsg4=$(echo $kmsg3 | cut -d] -f 2)
	echo $kmsg4
	kmsg5=$(echo $kmsg4 | cut -d[ -f 2)
	echo $kmsg5

	sed -i "s.gpuhere.AMD $kmsg5." /opt/regataos-prime/www/css/style-system/buttom-system-dgpu.css

elif [[ $kmsg == *"ATI"* ]]; then

	kmsg2=$(echo $kmsg | cut -d: -f 2)
	echo $kmsg2
	kmsg3=$(echo $kmsg2 | cut -d" " -f 2-)
	echo $kmsg3
	kmsg4=$(echo $kmsg3 | cut -d] -f 2)
	echo $kmsg4
	kmsg5=$(echo $kmsg4 | cut -d[ -f 2)
	echo $kmsg5

	sed -i "s.gpuhere.AMD $kmsg5." /opt/regataos-prime/www/css/style-system/buttom-system-dgpu.css

elif [[ $kmsg == *"NVIDIA"* ]]; then

	kmsg2=$(echo $kmsg | cut -d: -f 2)
	echo $kmsg2
	kmsg3=$(echo $kmsg2 | cut -d" " -f 2-)
	echo $kmsg3
	kmsg4=$(echo $kmsg3 | cut -d] -f 1)
	echo $kmsg4
	kmsg5=$(echo $kmsg4 | cut -d[ -f 2)
	echo $kmsg5

	sed -i "s.gpuhere.NVIDIA $kmsg5." /opt/regataos-prime/www/css/style-system/buttom-system-dgpu.css

elif [[ $kmsg == *"GeForce"* ]]; then

	kmsg2=$(echo $kmsg | cut -d: -f 2)
	echo $kmsg2
	kmsg3=$(echo $kmsg2 | cut -d" " -f 2-)
	echo $kmsg3
	kmsg4=$(echo $kmsg3 | cut -d] -f 1)
	echo $kmsg4
	kmsg5=$(echo $kmsg4 | cut -d[ -f 2)
	echo $kmsg5

	sed -i "s.gpuhere.NVIDIA $kmsg5." /opt/regataos-prime/www/css/style-system/buttom-system-dgpu.css

else
	echo "Not detected graphics"
fi

# }
