# 0902 Week 7

Review dashboard component and its data source.


the xxx.vue should only for view.
it use one (or more) data class from repository as parameter.

the repository class ( xxx_repository.ts) has `a data source interface` and it convert the result (API or json file) from data source  to the data class for the view.

the data source has a interface xxx_data_source_interface.ts
and two implementation:
1. xxx_data_source.ts
2. xxx_local_data_source.ts

the component project could use the xxx_local_data_source.ts for demo and could easily switch to xxx_data_source.ts for production.


