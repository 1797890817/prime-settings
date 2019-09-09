#!/bin/bash

# Enable/Desable Reverse Prime
if test -e /tmp/regataos-prime/reverse-prime.txt ; then
	if test -e /tmp/regataos-prime/renderer-dgpu.txt ; then
		echo "reverse-prime on" > /tmp/regataos-prime/reverse-prime-dgpu.txt
		rm -f "/tmp/regataos-prime/reverse-prime-igpu.txt"
		rm -f "/tmp/regataos-prime/reverse-prime-off.txt"
		xrandr --setprovideroutputsource 0 1
		xrandr --setprovideroutputsource modesetting NVIDIA-0
		xrandr --setprovideroutputsource modesetting NVIDIA-G0
		xrandr --setprovideroutputsource Intel NVIDIA-0
		xrandr --setprovideroutputsource Intel NVIDIA-G0
		xrandr --auto
		xrandr --dpi 96
	else
		echo "reverse-prime on" > /tmp/regataos-prime/reverse-prime-igpu.txt
		rm -f "/tmp/regataos-prime/reverse-prime-dgpu.txt"
		rm -f "/tmp/regataos-prime/reverse-prime-off.txt"
		xrandr --setprovideroutputsource 1 0
		xrandr --auto
		xrandr --dpi 96
	fi
else
	if test -e /tmp/regataos-prime/renderer-dgpu.txt ; then
		rm -f "/tmp/regataos-prime/renderer-dgpu.txt"
		echo "reverse-prime off" > /tmp/regataos-prime/reverse-prime-off.txt
		rm -f "/tmp/regataos-prime/reverse-prime-igpu.txt"
		rm -f "/tmp/regataos-prime/reverse-prime-dgpu.txt"
		xrandr --setprovideroutputsource 1 0
		xrandr --auto
		xrandr --dpi 96
	else
		echo "reverse-prime off" > /tmp/regataos-prime/reverse-prime-off.txt
		rm -f "/tmp/regataos-prime/reverse-prime-igpu.txt"
		rm -f "/tmp/regataos-prime/reverse-prime-dgpu.txt"
		xrandr --setprovideroutputsource 1 0
		xrandr --auto
		xrandr --dpi 96
	fi
fi
