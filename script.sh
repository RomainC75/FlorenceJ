#!/usr/bin/bash

LIST=`ls $1`

for FILENAME in `ls $1`
    do
        echo "----> ${1}/$FILENAME"
        EXT=`echo $FILENAME | cut -d'.' -f2`
        echo "extension : $EXT"
        if [[ $EXT = "jpg" ]] || [[ $EXT = "jpeg" ]];
            then
                WIDTH=`identify -format "%w" ${1}/$FILENAME`
                HEIGHT=`identify -format "%h" ${1}/$FILENAME`
                echo "$WIDTH * $HEIGHT" | bc
                echo " = $WIDTH x $HEIGHT"
                echo "image !"
                if [[ $WIDTH -gt 500 ]];
                then
                    PURENAME=`echo $FILENAME | cut -d'.' -f1`
                    echo "PURENAME : $PURENAME"
                    RSZ=`echo "500 / $WIDTH * 100" | bc -l | cut -d'.' -f'1'`
                    echo $RSZ
                    cp ${1}/$FILENAME ${1}/$FILENAME.old
                    convert ${1}/$FILENAME -resize ${RSZ}% ${1}/${FILENAME}
                fi
        fi
        #echo `cut -d'.' -f2 ${1}/$FILENAME`
    done