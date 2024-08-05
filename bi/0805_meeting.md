# 0805 (Week 3) meeting

1. Start on the order BI.
it should contain a few git project:
- 1. one project to define the data structure / model
- 2. one project to generate test data
  - this project should using library 1
  - it should generate data to sqlite (good for test) / (mysql) / csv
- 3. one project to integrate link up the database
    - this project should using library 1
    - it should also using some output (e.g. the sqlite) from project 2 (but no including it as a library)
    
2. a brief plan of the project
write down your plan of the project,
how to split the project into parts, start from a proof of concept, then try to integrate a third party tools to do the demo etc.


## OSRM
frontend:
https://map.project-osrm.org/


route-service: point a to point b,
table-service: route matrix among points

route-service API doc:
https://project-osrm.org/docs/v5.24.0/api/#route-service

free api:
sample url for table service:
https://router.project-osrm.org/table/v1/driving/-74.07346,4.64830;-74.06948,4.61908;-74.07326,4.62201;-74.07478,4.63126;-74.06390,4.63880;-74.07511,4.64082;-74.07643,4.63453;-74.07549,4.62874;-74.05969,4.64102;-74.07346,4.64830;-74.06948,4.61908;-74.07326,4.62201;-74.07478,4.63126;-74.06390,4.63880;-74.07511,4.64082;-74.07643,4.63453;-74.07549,4.62874;-74.05969,4.64102?sources=0;1;2;3;4;5;6;7;8&destinations=9;10;11;12;13;14;15;16;17

