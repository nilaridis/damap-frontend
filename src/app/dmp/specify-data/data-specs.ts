export const FILE_TYPES = {
  STANDARD_OFFICE_DOCUMENTS: {label: 'STANDARD_OFFICE_DOCUMENTS', description: 'text documents, spreadsheets, presentations'},
  NETWORKBASED_DATA: {label: 'NETWORKBASED_DATA', description: 'websites, email, chat history, etc.'},
  DATABASES: {label: 'DATABASES', description: 'DBASE, MS Access, Oracle, MySQL, etc.'},
  IMAGES: {label: 'IMAGES', description: 'JPEG, JPEG2000, GIF, TIF, PNG, SVG, etc.'},
  STRUCTURED_GRAPHICS: {label: 'STRUCTURED_GRAPHICS', description: 'CAD, CAM, 3D, VRML, etc.'},
  AUDIOVISUAL_DATA: {label: 'AUDIOVISUAL_DATA', description: 'WAVE, MP3, MP4, Flash, etc.'},
  SCIENTIFIC_STATISTICAL_DATA: {label: 'SCIENTIFIC_STATISTICAL_DATA', description: 'SPSS, FITS, GIS, etc.'},
  RAW_DATA: {label: 'RAW_DATA', description: 'device specific output'},
  PLAIN_TEXT: {label: 'PLAIN_TEXT', description: 'TXT in various encodings'},
  STRUCTURED_TEXT: {label: 'STRUCTURED_TEXT', description: 'XML, SGML, etc.'},
  ARCHIVED_DATA: {label: 'ARCHIVED_DATA', description: 'ZIP, RAR, JAR, etc.'},
  SOFTWARE_APPLICATIONS: {label: 'SOFTWARE_APPLICATIONS', description: 'modelling tools, editors, IDE, compilers, etc.'},
  SOURCE_CODE: {label: 'SOURCE_CODE', description: 'scripting, Java, C, C++, Fortran, etc.'},
  CONFIGURATION_DATA: {label: 'CONFIGURATION_DATA', description: 'parameter settings, logs, library files'},
  OTHER: {label: 'OTHER', description: ''}
};

export const FILE_SIZES = [
  {label: '< 100 MB', min: 0, max: 100000000},
  {label: '100 - 1000 MB', min: 100000000, max: 1000000000},
  {label: '1 - 5 GB', min: 1000000000, max: 5000000000},
  {label: '5 - 20 GB', min: 5000000000, max: 20000000000},
  {label: '20 - 50 GB', min: 20000000000, max: 50000000000},
  {label: '50 - 100 GB', min: 50000000000, max: 100000000000},
  {label: '100 - 500 GB', min: 100000000000, max: 500000000000},
  {label: '500 - 1000 GB', min: 500000000000, max: 1000000000000},
  {label: '1 - 5 TB', min: 1000000000000, max: 5000000000000},
  {label: '5 - 10 TB', min: 5000000000000, max: 10000000000000},
  {label: '10 - 100 TB', min: 10000000000000, max: 100000000000000},
  {label: '100 - 500 TB', min: 100000000000000, max: 500000000000000},
  {label: '500 - 1000 TB', min: 500000000000000, max: 1000000000000000},
  {label: '> 1 PB', min: 1000000000000000, max: undefined},
  {label: 'I don\'t know yet', min: 0, max: 0}
];
