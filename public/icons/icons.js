const icons = [
  "M16 0A14 14 0 0 0 2 14c0 10.32 10.37 16.3 13.55 17.89a1 1 0 0 0 .89 0C19.63 30.3 30 24.32 30 14A14 14 0 0 0 16 0zm0 29.88C12.66 28.13 4 22.74 4 14a12 12 0 0 1 24 0c0 8.74-8.66 14.13-12 15.88z",
  "M16.63 6.22a1 1 0 0 0-1.25 0l-5 4A1 1 0 0 0 10 11v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-.37-.78zM20 18h-2v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3h-2v-6.52l4-3.2 4 3.2z",
  "m481.755 0h-355.34c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h355.34c3.087 0 5.599 2.512 5.599 5.599v123.653h-17v-104.752c0-4.142-3.357-7.5-7.5-7.5h-413.708c-4.143 0-7.5 3.358-7.5 7.5v330.074c0 4.142 3.357 7.5 7.5 7.5h53.045v17h-71.946c-3.087 0-5.599-2.512-5.599-5.599v-367.876c0-3.087 2.512-5.599 5.599-5.599h66.17c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-66.17c-11.358 0-20.599 9.241-20.599 20.599v367.876c0 11.358 9.24 20.599 20.599 20.599h269.447c3.087 0 5.599 2.512 5.599 5.599v76.728c0 11.358 9.24 20.599 20.599 20.599h58.419c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-58.419c-3.087 0-5.599-2.512-5.599-5.599v-76.728c0-11.358-9.24-20.599-20.599-20.599h-78.253v-17h78.253c20.732 0 37.599 16.867 37.599 37.599v57.827c0 4.142 3.357 7.5 7.5 7.5h118.062c4.143 0 7.5-3.358 7.5-7.5v-209h17v227.901c0 3.087-2.512 5.599-5.599 5.599h-77.446c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h77.446c11.358 0 20.599-9.241 20.599-20.599v-470.802c0-11.358-9.24-20.599-20.598-20.599zm-26.402 420.92h-30.832c-3.584 0-6.5-2.915-6.5-6.5v-85.403c0-3.584 2.916-6.5 6.5-6.5h30.832zm-33.912-373.92v8.455c0 7.246-5.895 13.14-13.14 13.14h-29.81c-7.246 0-13.141-5.895-13.141-13.14v-8.455zm-105.306 2v39.08c0 8.331-6.777 15.109-15.108 15.109s-15.109-6.778-15.109-15.109v-39.08zm-215.37 31.28h77.519v91.098h-77.519zm77.518-33.28v18.28h-77.519v-18.28zm2.741 230.258v47.519h-91.097v-47.519zm-106.097 47.518h-18.28v-47.519h18.28zm131.512 69.298h-89.248v-17h89.248zm145.852 70.926v-50.327c0-29.003-23.596-52.599-52.599-52.599h-21.127v-107.417h91.928v2.573c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-21.267c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v3.694h-99.428c-4.142 0-7.5 3.358-7.5 7.5v114.917h-206.919v-22.298h125.987c7.384 0 13.391-6.007 13.391-13.391v-50.737c0-7.384-6.007-13.391-13.391-13.391h-125.987v-18.639h137.378v1.821c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-18.955c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v2.135h-137.378v-181.619h29.118v125.987c0 7.384 6.007 13.391 13.391 13.391h80.737c7.384 0 13.391-6.007 13.391-13.391v-125.987h40.126v124.378h-1.821c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h18.956c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-2.135v-124.378h22.508v41.08c0 16.602 13.507 30.109 30.109 30.109s30.108-13.507 30.108-30.109v-41.08h19.217v8.455c0 15.517 12.624 28.14 28.141 28.14h29.81c15.517 0 28.14-12.624 28.14-28.14v-8.455h18.912v260.518h-30.832c-11.856 0-21.5 9.645-21.5 21.5v85.403c0 11.855 9.644 21.5 21.5 21.5h30.832v29.079zm118.062-216.5v-89.248h17v89.248z",
  "m422.773 157.743c0-14.748-11.998-26.746-26.746-26.746-14.747 0-26.745 11.998-26.745 26.746 0 14.747 11.998 26.745 26.745 26.745 14.748 0 26.746-11.998 26.746-26.745zm-26.746 11.745c-6.477 0-11.745-5.269-11.745-11.745 0-6.477 5.269-11.746 11.745-11.746 6.477 0 11.746 5.269 11.746 11.746 0 6.476-5.269 11.745-11.746 11.745z",
  "M496.484,256.516h-0.516v-24.564c0-10.354-6.724-19.16-16.032-22.299v-105.96c0-4.142-3.358-7.5-7.5-7.5H39.564    c-4.142,0-7.5,3.358-7.5,7.5v105.959c-9.308,3.139-16.032,11.946-16.032,22.299v24.564h-0.516C6.96,256.516,0,263.477,0,272.031    v64.129c0,8.556,6.96,15.517,15.516,15.517h0.516v56.629c0,4.142,3.358,7.5,7.5,7.5h16.032c3.441,0,6.441-2.343,7.276-5.681    l14.612-58.448h389.095l14.612,58.448c0.834,3.338,3.834,5.681,7.276,5.681h16.032c4.142,0,7.5-3.358,7.5-7.5v-56.629h0.516    c8.556,0,15.516-6.961,15.516-15.517v-64.129C512,263.477,505.04,256.516,496.484,256.516z M33.708,400.807h-2.676v-49.129h14.959    L33.708,400.807z M480.969,400.807L480.969,400.807h-2.677l-12.282-49.129h14.959V400.807z M496.484,336.677H15.516    c-0.285,0-0.516-0.231-0.516-0.517v-64.129c0-0.285,0.231-0.516,0.516-0.516H440.37c4.142,0,7.5-3.358,7.5-7.5    c0-4.142-3.358-7.5-7.5-7.5H31.032v-24.564c0-4.705,3.828-8.532,8.532-8.532h16.033c4.142,0,7.5-3.358,7.5-7.5    c0-4.142-3.358-7.5-7.5-7.5h-8.533v-97.226h417.871v97.226h-41.113v-40.597c0-12.976-10.557-23.532-23.532-23.532H288.064    c-12.976,0-23.532,10.557-23.532,23.532v40.597h-17.064v-40.597c0-12.976-10.557-23.532-23.532-23.532H111.709    c-12.976,0-23.532,10.557-23.532,23.532v40.597h-0.516c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h384.774    c4.705,0,8.532,3.828,8.532,8.532v24.564h-8.531c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h24.047    c0.285,0,0.516,0.231,0.516,0.516v64.129H497C497,336.445,496.769,336.677,496.484,336.677z M408.822,167.822v40.597h-129.29    v-40.597c0-4.704,3.828-8.532,8.532-8.532H400.29C404.995,159.289,408.822,163.117,408.822,167.822z M232.467,167.822v40.597    h-129.29v-40.597c0-4.704,3.828-8.532,8.532-8.532h112.226C228.64,159.289,232.467,163.117,232.467,167.822z",
  "M92.867,425.667h204.8h204.8c5.12,0,8.533-3.413,8.533-8.533v-153.6v-153.6V7.533C511,2.413,507.587-1,502.467-1H340.333     h-93.867h-153.6c-5.12,0-8.533,3.413-8.533,8.533v204.8V280.6V383v34.133C84.333,422.253,87.747,425.667,92.867,425.667z      M101.4,289.133h85.333c-4.267,45.227-40.107,81.067-85.333,85.333V289.133z M101.4,16.067h136.533v51.2H229.4     c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h34.133c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533H255     v-51.2h76.8v93.867c0,5.12,3.413,8.533,8.533,8.533h34.133V127c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533V92.867     c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v8.533h-25.6V16.067h145.067V101.4H459.8v-8.533     c0-5.12-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533V127c0,5.12,3.413,8.533,8.533,8.533     c5.12,0,8.533-3.413,8.533-8.533v-8.533h34.133V255h-51.2v-8.533c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533V280.6     c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-8.533h51.2V408.6H306.2V272.067h51.2v8.533     c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-34.133c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533V255     h-59.733c-5.12,0-8.533,3.413-8.533,8.533V408.6H101.4v-17.388c57.425-4.332,102.4-52.044,102.4-110.612     c0-5.12-3.413-8.533-8.533-8.533H101.4v-51.2h145.067c5.12,0,8.533-3.413,8.533-8.533V152.6h8.533     c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533H229.4c-5.12,0-8.533,3.413-8.533,8.533     c0,5.12,3.413,8.533,8.533,8.533h8.533v51.2H101.4V16.067z",
  "M64.707,423.107c3.413-3.413,3.413-8.533,0-11.947c-3.413-3.413-8.533-3.413-11.947,0l-11.093,11.093V28.013     L52.76,39.107c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947L40.567,3.02     C39.172,0.511,36.532-1,33.133-1c-3.399,0-6.038,1.511-7.434,4.02L1.56,27.16c-3.413,3.413-3.413,8.533,0,11.947     s8.533,3.413,11.947,0L24.6,28.013v394.24L13.507,411.16c-3.413-3.413-8.533-3.413-11.947,0c-3.413,3.413-3.413,8.533,0,11.947     l24.14,24.14c1.395,2.509,4.034,4.02,7.434,4.02c3.399,0,6.038-1.511,7.433-4.02L64.707,423.107z",
  "M511,476.874c0-0.005,0-0.01,0-0.016c-0.002-3.395-1.512-6.031-4.02-7.426l-24.14-24.14     c-3.413-3.413-8.533-3.413-11.947,0c-3.413,3.413-3.413,8.533,0,11.947l11.093,11.093H87.747L98.84,457.24     c3.413-3.413,3.413-8.533,0-11.947c-3.413-3.413-8.533-3.413-11.947,0l-24.14,24.14c-2.509,1.395-4.02,4.034-4.02,7.434     s1.511,6.038,4.02,7.434l24.14,24.14c1.707,1.707,3.413,2.56,5.973,2.56c2.56,0,4.267-0.853,5.973-2.56     c3.413-3.413,3.413-8.533,0-11.947L87.747,485.4h394.24l-11.093,11.093c-3.413,3.413-3.413,8.533,0,11.947     c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56l24.14-24.14C509.487,482.906,510.997,480.27,511,476.874z",
];

export default icons;
