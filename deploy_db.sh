#!/bin/sh

####################################################################
##  ./deploy_db.sh mysql
####################################################################

show_usage()
{
	echo "usage: $0 mysql"
}

if [[ $1 -eq 'mysql' ]]; then
    # run mysql
    docker run -it \
               -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=mysql -e MYSQL_PASSWORD=mysql  -e MYSQL_DATABASE=trello -e TZ=Asia/Seoul \
               -p 3306:3306 \
               --name mysql \
               --health-cmd "mysqladmin -uroot -proot ping -h localhost" --health-interval=20s --health-timeout=3s --health-retries=5 \
               --net bridge \
               -d mysql:5.6
else
   show_usage
   exit;
fi