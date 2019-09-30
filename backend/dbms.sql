create table vehicleinfo(
licenceplate varchar(100),
vehicleid varchar(100),
colour varchar(100),
roadid varchar(100),
licenceno varchar(100),
primary key(licenceplate),
foreign key(vehicleid) references type(vehicleid),
foreign key(licenceno) references license(licenceno));


create table license(
licenceno varchar(100),
firstname varchar(100),
lastname varchar(100),
issuedon date,
expirydate date,
type varchar(100),
dob date,
phoneno numeric,
address varchar(100),
state varchar(100),
bloodgroup varchar(100),
fathersname varchar(100),
aadharno numeric,
primary key(licenceno),
foreign key(aadharno) references driverdetail(aadharno));




create table road(
roadid varchar(100),
town varchar(100),
junctionid varchar(100),
dest varchar(100),
source varchar(100),
primary key(roadid),
foreign key(junctionid) references junction(junctionid));



create table junction(
junctionid varchar(100),
name varchar(100),
type varchar(100),
primary key(junctionid));



create table driverdetail(
aadharno numeric,
age numeric,
sex varchar(100),
primary key(aadharno));





create table type(
vehicleid varchar(100),
model varchar(100),
type varchar(100),
primary key(vehicleid));




create table traffic(
roadid varchar(100),
bike numeric,
car numeric,
jeep numeric,
bus numeric,
total numeric,
primary key(roadid),
foreign key(roadid) references road(roadid));





create table trafficpolice(
tpid varchar(100),
stationid varchar(100),
aadharno numeric,
junctionid varchar(100),
primary key(tpid),
foreign key(junctionid) references junction(junctionid),
foreign key(aadharno) references driverdetail(aadharno),
foreign key(stationid) references station(stationid));




create table station(
stationid varchar(100),
stationname varchar(100),
area varchar(100),
incharge varchar(100),
primary key(stationid));


select * from type;
select * from STATION;
select * from driverdetail;
select * from license;
select * from junction;
select * from road;
select * from traffic;
select * from trafficpolice;
select * from vehicleinfo;
