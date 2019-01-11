# gLicense.js

`gLicense.js` is a library that generates OSS license statements. And command-line interface is also available.

## Installation
### Command line tool
```shellsession
$ npm install -g glicense
```

## Usage
### Command line tool
```shellsession
$ glicense create mit --author "your name" > LICENSE.txt
$ cat LICENSE.txt
MIT License

Copyright (c) 2019 your name

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
(snip)
```

`--year` option. default is this year.

```shellsession
$ glicense create mit --author "your name" --year 1979
MIT License

Copyright (c) 1979 your name
(snip)
```

`--program` option. You can use GPLv3, LGPL v2.1 only.

```shellsession
$ glicense create gpl3 --author "your name" --program "CoolTools"
(snip)
    CoolTools  Copyright (C) 2019  your name
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.
(snip)
```

`--description` option. default is null. You can use GPLv3, LGPL v2.1 only.

```shellsession
$ glicense create gpl3 --author "your name" --program "CoolTools" --description "I want you the best moment"
(snip)
    CoolTools I want you the best moment
    Copyright (C) 2019 your name
(snip)
```

#### Supported license

| License name     | type    | --author | --year  | --program  | --description  |
| ---------------- | ------- | :------: | :-----: | :--------: | :------------: |
| Apache           | apache2 | 🆗       | 🆗      | ❌         | ❌             |
| BSD 2-Clause     | bsd2c   | 🆗       | 🆗      | ❌         | ❌             |
| BSD 3-Clause     | bsd3c   | 🆗       | 🆗      | ❌         | ❌             |
| GPL Version 3    | gpl3    | 🆗       | 🆗      | 🆗         | 🆗             |
| LGPL Version 3   | lgpl3   | ❌       | ❌      | ❌         | ❌             |
| LGPL Version 2.1 | lgpl21  | 🆗       | 🆗      | 🆗         | 🆗             |
| MIT              | mit     | 🆗       | 🆗      | ❌         | ❌             |


#### Other features
##### glicense list
```shellsession
$ glicense list
-------- + -------------------------------------------------
  type   | License name
-------- + -------------------------------------------------
 apache2 | Apache License
   bsd2c | BSD 2-Clause License
   bsd3c | BSD 3-Clause License
    gpl3 | GNU GENERAL PUBLIC LICENSE Version 3
   lgpl3 | GNU LESSER GENERAL PUBLIC LICENSE Version 3
  lgpl21 | GNU LESSER GENERAL PUBLIC LICENSE Version 2.1
     mit | MIT License
```

You can use alias for `glicense ls`.

##### glicense detail
```shellsession
$ glicense detail gpl3
{ name: 'GNU GENERAL PUBLIC LICENSE Version 3',
  file: 'template/gpl3.mst',
  require: [ 'year', 'name', 'program', 'description' ] }
```


## License
The MIT License.