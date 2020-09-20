import 'package:flutter/material.dart';
MediaQueryData devicedata;
class DeviceScreenInfo{
  double height;
  double width;
}
DeviceScreenInfo screenInfo = new DeviceScreenInfo();
double blocsizw,blocsizh, hscalefactor, wscalefactor;

void screenInfoInit(BuildContext context){
  devicedata = MediaQuery.of(context);
  screenInfo.height = devicedata.size.height;
  screenInfo.width = devicedata.size.width;
  blocsizw = devicedata.size.width/100;
  blocsizh = devicedata.size.height/100;
  if(blocsizw < blocsizh){
    hscalefactor = .8;
    wscalefactor = 2;
  } else{
    hscalefactor = 1;
    wscalefactor = 1;
  }
  return;
}