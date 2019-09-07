#!/bin/bash

cd /

kmsg=$(grep -r LANG /home/*/.config/plasma-localerc)
echo $kmsg

if [[ $kmsg == *"pt_BR"* ]]; then
    echo "pt_BR"

	if test -e /tmp/regataos-prime/use-hybrid-graphics-nvidia.txt ; then
		notify-send -i nvidia-dgpu -t 13000 -u normal "Renderizando com a dGPU" "Usando a GPU NVIDIA para a renderização gráfica.\n"
	fi

	if test -e /tmp/regataos-prime/use-hybrid-graphics-amd.txt ; then
		notify-send -i amd-dgpu -t 13000 -u normal "Renderizando com a dGPU" "Usando a GPU AMD para a renderização gráfica.\n"
	fi

elif [[ $kmsg == *"pt_PT"* ]]; then
    echo "pt_PT"

	if test -e /tmp/regataos-prime/use-hybrid-graphics-nvidia.txt ; then
		notify-send -i nvidia-dgpu -t 13000 -u normal "Renderizando com a dGPU" "Usando a GPU NVIDIA para a renderização gráfica.\n"
	fi

	if test -e /tmp/regataos-prime/use-hybrid-graphics-amd.txt ; then
		notify-send -i amd-dgpu -t 13000 -u normal "Renderizando com a dGPU" "Usando a GPU AMD para a renderização gráfica.\n"
	fi

elif [[ $kmsg == *"en_US"* ]]; then
    echo "en_US"

	if test -e /tmp/regataos-prime/use-hybrid-graphics-nvidia.txt ; then
		notify-send -i nvidia-dgpu -t 13000 -u normal "Rendering with dGPU" "Using the NVIDIA GPU for graphical rendering.\n"
	fi

	if test -e /tmp/regataos-prime/use-hybrid-graphics-amd.txt ; then
		notify-send -i amd-dgpu -t 13000 -u normal "Rendering with dGPU" "Using AMD GPU for graphical rendering.\n"
	fi

elif [[ $kmsg == *"es"* ]]; then
    echo "es"

	if test -e /tmp/regataos-prime/use-hybrid-graphics-nvidia.txt ; then
		notify-send -i nvidia-dgpu -t 13000 -u normal "Renderizando con dGPU" "Uso de GPU NVIDIA para renderizar gráficos.\n"
	fi

	if test -e /tmp/regataos-prime/use-hybrid-graphics-amd.txt ; then
		notify-send -i amd-dgpu -t 13000 -u normal "Renderizando con dGPU" "Uso de GPU AMD para renderizar gráficos.\n"
	fi

else

	if test -e /tmp/regataos-prime/use-hybrid-graphics-nvidia.txt ; then
		notify-send -i nvidia-dgpu -t 13000 -u normal "Rendering with dGPU" "Using the NVIDIA GPU for graphical rendering.\n"
	fi

	if test -e /tmp/regataos-prime/use-hybrid-graphics-amd.txt ; then
		notify-send -i amd-dgpu -t 13000 -u normal "Rendering with dGPU" "Using AMD GPU for graphical rendering.\n"
	fi

fi
