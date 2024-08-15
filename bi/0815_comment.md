# Comment for MockOrderDataImporter

https://github.com/eventually11/MockOrderDataImporter

1. main folder should be `src`
- it is clear that those are source code.
- it should be callable function or class, and use parameter to control the behavior. (see point 3)

Remember, library, input, output data should never mix up.

```bash
mock_partner_order.csv
mock_partner_order.json
...
```

2. CSV (mock_partner_order.csv)
either it is input / output don't mix up with your source code.

Source code should never mixup with input / output data.

3. use 'script' folder for executable code

- the 'src' should be a library, and we write code in 'script' to call the library.
- e.g. `script` could have configuration file (how many data would be generated, what is the characteristic of the data, etc.), and call the library with the configuration file.
it allow you to create multiple set of data with different configuration.

4. python setup
python should have a setup.py file, so that we can install the library with `pip install .` or `pip install -e .` 

not to specify the required external lib one by one
```
pip install requests pandas
```

5. more direct instruction


Run Scripts: Use the provided scripts to generate and process test data.

```bash
python script_name.py
```

you should know the command better, readme letter the late comer to understand the project.